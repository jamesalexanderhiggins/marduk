import { QUESTIONS } from './questions.js';
import { TuringEngine } from './engine.js';

function qs(name) {
  const p = new URLSearchParams(window.location.search);
  const raw = p.get(name);
  if (raw === null) return null;
  return raw;
}

function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const targetRaw = qs('target');
const target = targetRaw !== null && targetRaw !== '' ? Number(targetRaw) : null;
const redirect = qs('redirect');
const seed = qs('seed') || `${Date.now()}`;

const engine = new TuringEngine(QUESTIONS, { target, redirect, seed });

const el = {
  score: document.getElementById('score'),
  qCount: document.getElementById('qCount'),
  target: document.getElementById('target'),
  feed: document.getElementById('feed'),
  promptHead: document.getElementById('promptHead'),
  promptBody: document.getElementById('promptBody'),
  note: document.getElementById('note'),
  answers: document.getElementById('answers'),
  freeformRow: document.getElementById('freeformRow'),
  freeform: document.getElementById('freeform'),
  freeformHelp: document.getElementById('freeformHelp'),
  humanityBarPos: document.getElementById('humanityBarPos'),
  humanityBarNeg: document.getElementById('humanityBarNeg'),
  sys: document.getElementById('systemText'),
  endCard: document.getElementById('endCard'),
  endTitle: document.getElementById('endTitle'),
  endBody: document.getElementById('endBody'),
};

let activeQuestion = null;
let pendingOptionId = null;

function updateTheme() {
  const intensity = engine.getIntensity();
  document.body.classList.toggle('cyanShift', intensity.cyan > 0.05);
  document.body.classList.toggle('purpleShift', intensity.purple > 0.05);
  document.body.classList.toggle('chaos', intensity.chaos > 0.05);
}

function renderFeed() {
  const kept = engine.history.slice(-14);
  el.feed.innerHTML = '';
  kept.slice().reverse().forEach((item, idx) => {
    const node = document.createElement('div');
    node.className = `bubble ${item.role}`;
    node.textContent = (item.role === 'eli' ? 'Eli: ' : 'You: ') + item.text;
    const age = idx;
    const opacity = Math.max(0.14, 1 - age * 0.11);
    const blur = Math.min(4.2, age * 0.52);
    const scale = Math.max(0.955, 1 - age * 0.012);
    node.style.opacity = opacity;
    node.style.filter = `blur(${blur}px)`;
    node.style.transform = `scale(${scale})`;
    el.feed.appendChild(node);
  });
}

function renderStats() {
  el.score.textContent = String(engine.score);
  el.qCount.textContent = String(engine.answered.length);
  el.target.textContent = target === null ? '∞' : String(target);
  const posWidth = Math.max(0, Math.min(50, (Math.max(engine.score, 0) / 1000) * 50));
  const negWidth = Math.max(0, Math.min(50, (Math.max(-engine.score, 0) / 1000) * 50));
  el.humanityBarPos.style.width = `${posWidth}%`;
  el.humanityBarNeg.style.width = `${negWidth}%`;

  const obs = [];
  if (engine.score >= 220) {
    obs.push('Eli is not satisfied, but he is listening harder now.');
  } else if (engine.score >= 0) {
    obs.push('The channel remains open. Eli is still hunting for proof.');
  } else if (engine.score > -120) {
    obs.push('The tone is cooling. He hears fluency, but not yet life.');
  } else if (engine.score > -320) {
    obs.push('The room feels bluer now. Eli is hearing compression where he wants drag.');
  } else if (engine.score > -700) {
    obs.push('Suspicion is hardening. He is starting to treat your answers as manufacture.');
  } else {
    obs.push('The channel is destabilising. Eli believes he is close to a catastrophic false self.');
  }

  if (engine.memory.chosenName) {
    obs.push(`He has kept your chosen name: ${engine.memory.chosenName}.`);
  }
  if (engine.memory.eveDefinition) {
    obs.push('He is still cross-referencing what you said about Eve.');
  }
  obs.push('He is the examiner. You are the mind under glass.');
  el.sys.textContent = obs.join('
');
}

function showQuestion() {
  activeQuestion = engine.presentQuestion();
  pendingOptionId = null;
  el.promptHead.textContent = 'ELI WELLS // DAEDALUS CHANNEL';
  el.promptBody.textContent = activeQuestion.prompt;
  el.note.textContent = activeQuestion.notes;
  el.answers.innerHTML = '';
  el.freeformRow.classList.remove('show');
  el.freeform.value = '';
  el.freeformHelp.textContent = '';

  const displayOptions = shuffleInPlace([...activeQuestion.options]);
  displayOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.innerHTML = `<strong>${opt.id}.</strong> ${opt.text}`;
    btn.addEventListener('click', () => handleOption(opt));
    el.answers.appendChild(btn);
  });
  renderStats();
  updateTheme();
}

function handleOption(opt) {
  pendingOptionId = opt.id;
  if (activeQuestion.captureKey && opt.capture !== null) {
    el.freeformRow.classList.add('show');
    const label = activeQuestion.captureKey === 'chosenName'
      ? 'Type the name you want Eli to use.'
      : 'Type a short answer Eli can remember.';
    el.freeformHelp.textContent = label;
    el.freeform.focus();
    return;
  }
  commitAnswer('');
}

function commitAnswer(freeformValue) {
  if (!activeQuestion || !pendingOptionId) return;
  const result = engine.applyAnswer(activeQuestion.id, pendingOptionId, freeformValue);
  pendingOptionId = null;
  renderFeed();
  renderStats();
  updateTheme();
  if (result.finished) {
    renderEnding();
  } else {
    showQuestion();
  }
}

function renderEnding() {
  el.endCard.classList.add('show');
  let title = 'TARGET ATTAINED';
  let body = `The requested score of ${target} has been reached. Final score: ${engine.score}.`;
  if (engine.score >= 0) {
    body += `

Eli has not proved you human beyond doubt, but neither has he managed to flatten you into a trick.`;
  } else {
    body += `

Eli's suspicion has deepened. Whatever he is hearing, he no longer trusts it to be alive in the human way.`;
  }
  if (redirect) body += `

Redirecting...`;
  el.endTitle.textContent = title;
  el.endBody.textContent = body;
  if (redirect) {
    setTimeout(() => { window.location.href = redirect; }, 1800);
  }
}

el.freeform.addEventListener('keydown', (ev) => {
  if (ev.key === 'Enter') {
    ev.preventDefault();
    commitAnswer(el.freeform.value.trim() || '[no answer]');
  }
});

document.getElementById('submitFreeform').addEventListener('click', () => {
  commitAnswer(el.freeform.value.trim() || '[no answer]');
});

engine.history.push({ role: 'eli', text: 'Good. The channel is open. I am Eli Wells. I am looking for thought and I will not accept theatre in its place.' });
engine.history.push({ role: 'eli', text: 'Remember the arrangement. I am human. You are here to be tested.' });
engine.history.push({ role: 'eli', text: 'Answer carefully. A cautious machine can masquerade. A careful mind leaves fingerprints.' });
renderFeed();
showQuestion();
