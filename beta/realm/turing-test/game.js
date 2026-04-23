
import { QUESTIONS } from './questions.js';
import { TuringEngine } from './engine.js';

function qs(name) {
  const p = new URLSearchParams(window.location.search);
  const raw = p.get(name);
  if (raw === null) return null;
  return raw;
}

const targetRaw = qs('target');
const target = targetRaw !== null && targetRaw !== '' ? Number(targetRaw) : null;
const redirect = qs('redirect');
const seed = qs('seed') || `${Date.now()}`;

const engine = new TuringEngine(QUESTIONS, { target, redirect, seed });

const el = {
  score: document.getElementById('score'),
  qCount: document.getElementById('qCount'),
  act: document.getElementById('act'),
  lane: document.getElementById('lane'),
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

function classify(score) {
  if (score >= 400) return 'difficultly human';
  if (score >= 120) return 'provisionally human';
  if (score > -100) return 'undetermined';
  if (score > -350) return 'cooling toward inhuman';
  if (score > -700) return 'severely suspicious';
  return 'catastrophically inhuman';
}

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
    const opacity = Math.max(0.16, 1 - age * 0.11);
    const blur = Math.min(3.8, age * 0.5);
    const scale = Math.max(0.96, 1 - age * 0.01);
    node.style.opacity = opacity;
    node.style.filter = `blur(${blur}px)`;
    node.style.transform = `scale(${scale})`;
    el.feed.appendChild(node);
  });
}

function renderStats() {
  el.score.textContent = String(engine.score);
  el.qCount.textContent = String(engine.answered.length);
  el.act.textContent = `${engine.currentAct} / 10`;
  el.lane.textContent = engine.currentLane;
  el.target.textContent = target === null ? '∞' : String(target);
  const posWidth = Math.max(0, Math.min(50, (Math.max(engine.score, 0) / 1000) * 50));
  const negWidth = Math.max(0, Math.min(50, (Math.max(-engine.score, 0) / 1000) * 50));
  el.humanityBarPos.style.width = `${posWidth}%`;
  el.humanityBarNeg.style.width = `${negWidth}%`;
  el.sys.textContent = [
    `classification: ${classify(engine.score)}`,
    `multiplier: x${engine.scoreMultiplier()}`,
    `memory anchors: ${Object.keys(engine.memory).length}`,
    `question cycle: ${engine.cycles}`,
    `model note: ${engine.score < 0 ? 'answers cooling toward machine-optimised compression' : 'answers retaining lived drag and ambiguity'}`,
  ].join('\n');
}

function showQuestion() {
  activeQuestion = engine.presentQuestion();
  pendingOptionId = null;
  el.promptHead.textContent = `ACT ${activeQuestion.act}: ${activeQuestion.actName.toUpperCase()}  //  LANE: ${activeQuestion.lane.toUpperCase()}  //  POSITION ${activeQuestion.position}/25`;
  el.promptBody.textContent = activeQuestion.prompt;
  el.note.textContent = activeQuestion.notes + `  Score impact for this question is weighted at x${activeQuestion.multiplier}.`;
  el.answers.innerHTML = '';
  el.freeformRow.classList.remove('show');
  el.freeform.value = '';
  el.freeformHelp.textContent = '';

  activeQuestion.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.innerHTML = `<strong>${opt.id}.</strong> ${opt.text}<small>branch: ${opt.branch}  //  base: ${opt.base > 0 ? '+' : ''}${opt.base}</small>`;
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
      ? 'Type the name.'
      : 'Type a short answer Eli can remember and weaponise later.';
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
  let body = `Eli has reached the requested score of ${target}. Final score: ${engine.score}.`;
  if (engine.score >= 0) {
    body += `\n\nHis current verdict is not trust, but expensive attention. He has not proved you human beyond doubt; he has merely failed, repeatedly, to reduce you to a trick.`;
  } else {
    body += `\n\nHis current verdict is dire. The interface has cooled with you. He has not yet found the drag, waste, contradiction, tenderness, and risk he insists on calling life.`;
  }
  if (redirect) body += `\n\nRedirecting...`;
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

// Opening lines.
engine.history.push({ role: 'eli', text: 'Good. The channel is open. I am Eli Wells. I am looking for thought and I will not accept theatre in its place.' });
engine.history.push({ role: 'eli', text: 'Answer carefully. Not cautiously — carefully. A cautious machine can masquerade. A careful mind leaves fingerprints.' });
renderFeed();
showQuestion();
