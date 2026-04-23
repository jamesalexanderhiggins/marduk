
(function(){
  'use strict';

  var PACK = (typeof window !== 'undefined' && (window.TURING_QUESTION_PACK || window.QUESTIONS || window.TURING_QUESTIONS)) || null;
  if (!PACK) {
    document.getElementById('prompt').textContent = 'Question pack failed to load.';
    return;
  }

  var nodes = Array.isArray(PACK.nodes) ? PACK.nodes : (Array.isArray(PACK) ? PACK : []);
  if (!nodes.length) {
    document.getElementById('prompt').textContent = 'Question pack is empty.';
    return;
  }

  var nodeMap = {};
  for (var i = 0; i < nodes.length; i++) nodeMap[nodes[i].id] = nodes[i];

  var params = new URLSearchParams(window.location.search);
  var thresholdRaw = params.get('target') || params.get('threshold');
  var threshold = thresholdRaw !== null && thresholdRaw !== '' && !isNaN(Number(thresholdRaw)) ? Number(thresholdRaw) : null;
  var redirect = params.get('redirect') || '';

  var state = {
    score: 0,
    shownCount: 0,
    currentId: (PACK.start || nodes[0].id),
    history: [],
    asked: {},
    lane: 'balanced',
    memory: {},
    finished: false
  };

  var el = {
    prompt: document.getElementById('prompt'),
    answers: document.getElementById('answers'),
    feed: document.getElementById('feed'),
    scoreLabel: document.getElementById('scoreLabel'),
    thresholdLabel: document.getElementById('thresholdLabel'),
    questionLabel: document.getElementById('questionLabel')
  };

  function shuffle(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = copy[i];
      copy[i] = copy[j];
      copy[j] = t;
    }
    return copy;
  }

  function laneFromDelta(delta) {
    if (delta >= 6) return 'warm';
    if (delta <= -6) return 'adversarial';
    if (delta < 0) return 'suspicious';
    return 'balanced';
  }

  function updateChrome() {
    el.scoreLabel.textContent = 'score: ' + state.score;
    el.thresholdLabel.textContent = threshold === null ? 'threshold: endless' : ('threshold: ' + threshold);
    el.questionLabel.textContent = 'question: ' + (state.shownCount + 1) + ' / 1000';

    document.body.classList.remove('mode-negative-1', 'mode-negative-2', 'mode-chaos');
    if (state.score <= -100) document.body.classList.add('mode-negative-1');
    if (state.score <= -300) document.body.classList.add('mode-negative-2');
    if (state.score <= -900) document.body.classList.add('mode-chaos');
  }

  function pushFeed(role, text) {
    var div = document.createElement('div');
    div.className = 'entry ' + role;
    div.textContent = (role === 'eli' ? 'ELI: ' : 'YOU: ') + text;
    el.feed.prepend(div);
    state.history.unshift({ role: role, text: text });

    var items = el.feed.children;
    for (var i = 0; i < items.length; i++) {
      var fade = Math.max(0.08, 1 - (i * 0.13));
      var blur = Math.min(5, i * 0.7);
      var scale = 1 - Math.min(0.08, i * 0.01);
      items[i].style.opacity = String(fade);
      items[i].style.filter = 'blur(' + blur + 'px)';
      items[i].style.transform = 'scale(' + scale + ')';
    }
    while (el.feed.children.length > 14) {
      el.feed.removeChild(el.feed.lastChild);
    }
  }

  function findFallbackUnasked(fromIndex) {
    for (var i = fromIndex; i < nodes.length; i++) {
      if (!state.asked[nodes[i].id]) return nodes[i].id;
    }
    for (var j = 0; j < nodes.length; j++) {
      if (!state.asked[nodes[j].id]) return nodes[j].id;
    }
    return nodes[0].id;
  }

  function currentNode() {
    return nodeMap[state.currentId] || nodes[0];
  }

  function enrichPrompt(node) {
    var parts = [];
    if (node.actName) parts.push('[' + node.actName.toUpperCase() + ']');
    parts.push(node.prompt);

    var mk = node.theme ? String(node.theme).replace(/\s+/g, '_') : '';
    if (mk && state.memory[mk]) {
      var mem = state.memory[mk];
      if (Math.random() < 0.35) {
        parts.push('\n\nEarlier, when I pressed you on ' + node.theme + ', you chose: "' + mem + '". I have not forgotten that.');
      }
    }
    return parts.join(' ');
  }

  function render() {
    if (state.finished) return;
    updateChrome();

    var node = currentNode();
    state.asked[node.id] = true;
    el.prompt.textContent = enrichPrompt(node);
    el.answers.innerHTML = '';

    var options = shuffle(node.answers || []);
    for (var i = 0; i < options.length; i++) {
      var answer = options[i];
      var btn = document.createElement('button');
      btn.className = 'answer';
      btn.type = 'button';
      btn.textContent = answer.text;
      btn.onclick = makeAnswerHandler(node, answer);
      el.answers.appendChild(btn);
    }
  }

  function makeAnswerHandler(node, answer) {
    return function() {
      if (state.finished) return;
      state.score += Number(answer.delta || 0);
      state.lane = laneFromDelta(Number(answer.delta || 0));
      state.shownCount += 1;
      if (answer.memoryKey) state.memory[answer.memoryKey] = answer.text;

      pushFeed('you', answer.text);
      pushFeed('eli', answer.eli || 'Noted.');

      if (threshold !== null) {
        var won = (threshold >= 0 && state.score >= threshold) || (threshold < 0 && state.score <= threshold);
        if (won) {
          state.finished = true;
          el.prompt.textContent = 'Threshold crossed. I have seen enough.' + (redirect ? '\n\nRedirecting…' : '');
          el.answers.innerHTML = '';
          updateChrome();
          if (redirect) setTimeout(function(){ window.location.href = redirect; }, 900);
          return;
        }
      }

      var nextId = null;
      if (node.forks && node.forks[state.lane] && nodeMap[node.forks[state.lane]] && !state.asked[node.forks[state.lane]]) {
        nextId = node.forks[state.lane];
      } else if (node.fallbackNext && nodeMap[node.fallbackNext] && !state.asked[node.fallbackNext]) {
        nextId = node.fallbackNext;
      } else {
        var idx = Number(node.meta && node.meta.index || 0) + 1;
        nextId = findFallbackUnasked(idx);
      }
      state.currentId = nextId;
      render();
    };
  }

  updateChrome();
  render();
})();
