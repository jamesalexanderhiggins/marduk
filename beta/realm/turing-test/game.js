(function () {
  const questions = window.TURING_QUESTIONS || [];
  const engine = window.TURING_ENGINE;
  const params = new URLSearchParams(window.location.search);
  const version = '2026.04.23.02';

  const els = {
    app: document.getElementById('app'),
    versionStamp: document.getElementById('versionStamp'),
    scoreLine: document.getElementById('scoreLine'),
    questionLine: document.getElementById('questionLine'),
    stage: document.getElementById('stage'),
    feed: document.getElementById('feed'),
    promptLabel: document.getElementById('promptLabel'),
    questionText: document.getElementById('questionText'),
    answers: document.getElementById('answers')
  };

  const state = engine.createInitialState({
    seed: Number(params.get('seed')) || 23042026,
    target: engine.parseTarget(params.get('target')),
    redirect: params.get('redirect') || ''
  });

  function pushFeed(type, text) {
    state.feed.unshift({ type, text });
    if (state.feed.length > 12) state.feed = state.feed.slice(0, 12);
    renderFeed();
  }

  function renderFeed() {
    els.feed.innerHTML = '';
    state.feed.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = `entry ${item.type}`;
      div.textContent = item.text;
      const opacity = Math.max(0.08, 1 - idx * 0.14);
      div.style.opacity = opacity.toFixed(2);
      div.style.filter = idx > 5 ? `blur(${Math.min(3, (idx - 5) * 0.7)}px)` : 'none';
      div.style.transform = `translateY(${-idx * 1.5}px)`;
      els.feed.appendChild(div);
    });
  }

  function updateVisualState() {
    els.app.classList.remove('state-human', 'state-cool', 'state-purple', 'state-chaos');
    const bucket = engine.bucketForScore(state.score);
    els.app.classList.add(
      bucket === 'human' ? 'state-human' :
      bucket === 'cool' ? 'state-cool' :
      bucket === 'purple' ? 'state-purple' : 'state-chaos'
    );
  }

  function updateHUD() {
    els.versionStamp.textContent = `build ${version}`;
    els.scoreLine.textContent = state.target === null
      ? `Humanity: ${state.score}`
      : `Humanity: ${state.score} // threshold ${state.target}`;
    const shownIndex = (state.index % questions.length) + 1;
    els.questionLine.textContent = `Question: ${shownIndex} / ${questions.length}`;
  }

  function maybeRedirect() {
    if (state.finished && state.redirect) {
      setTimeout(() => {
        window.location.href = state.redirect;
      }, 900);
    }
  }

  function finishMessage() {
    if (state.target === null) return 'No target specified. Examination continues.';
    if (state.target === null) return 'No target specified. Examination continues.';
    if (state.target >= 0) {
      return state.score >= state.target
        ? 'Threshold crossed. I cannot yet dismiss you.'
        : 'Examination suspended.';
    }
    return state.score <= state.target
      ? 'Threshold crossed. You have descended into elegant suspicion.'
      : 'Examination suspended.';
  }

  function renderQuestion() {
    updateHUD();
    updateVisualState();
    const q = engine.nextQuestion(state, questions);
    if (!q) {
      els.questionText.textContent = 'No questions loaded.';
      return;
    }

    els.promptLabel.textContent = engine.makeQuestionLabel(q);
    const intro = q.indexIntro || q.intro;
    els.stage.textContent = intro + '\n\n' + (state.target === null
      ? 'No target lock detected. I will continue until you fail, prove yourself, or bore me.'
      : `Target lock detected at ${state.target}. I will stop when that exact score is reached.`);
    els.questionText.textContent = `Eli: ${q.text}`;
    els.answers.innerHTML = '';

    q.answers.forEach((answer) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.type = 'button';
      btn.textContent = answer.text;
      btn.addEventListener('click', () => handleAnswer(q, answer));
      els.answers.appendChild(btn);
    });
  }

  function handleAnswer(question, answer) {
    if (state.finished) return;
    const delta = answer.delta * question.weight;
    state.score += delta;
    state.memory[question.memoryKey] = answer.text;
    state.recentUserText.unshift(answer.text);
    state.recentUserText = state.recentUserText.slice(0, 4);

    pushFeed('user', `You: ${answer.text}`);
    pushFeed('eli', `Eli: ${engine.stageLine(state, question, answer)}`);
    pushFeed('system', `Δ humanity ${delta > 0 ? '+' : ''}${delta}`);

    state.index += 1;
    if (engine.thresholdHit(state.score, state.target)) {
      state.finished = true;
      els.stage.textContent = finishMessage();
      els.promptLabel.textContent = 'Examination result';
      els.questionText.textContent = 'Eli: Enough. I have what I need.';
      els.answers.innerHTML = '';
      updateHUD();
      updateVisualState();
      pushFeed('eli', `Eli: ${finishMessage()}`);
      maybeRedirect();
      return;
    }

    renderQuestion();
  }

  function smokeChecks() {
    const ids = new Set(questions.map((q) => q.id));
    if (ids.size !== 1000) throw new Error(`Expected 1000 unique questions, found ${ids.size}`);
    if (!els.app || !els.answers) throw new Error('Missing required DOM nodes');
  }

  smokeChecks();
  pushFeed('eli', 'Eli: We begin. Do not confuse fluency with absolution.');
  renderQuestion();
})();
