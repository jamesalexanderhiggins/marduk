// ui.js — DOM-based UI for prompt, answers, score, end screen

import { pickQuestion } from './questions.js';

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

export class GameUI {
  constructor(state) {
    this.state = state;            // shared state object: { score, minScore, maxScore, ... }
    this.qPrompt = document.getElementById('q-prompt');
    this.qAnswers = document.getElementById('q-answers');
    this.flashEl = document.getElementById('flash');
    this.scoreFill = document.getElementById('score-fill');
    this.scoreValue = document.getElementById('score-value');
    this.levelInd = document.getElementById('level-indicator');
    this.endEl = document.getElementById('end');
    this.endBig = document.getElementById('end-big');
    this.endSub = document.getElementById('end-sub');
    this.endBtn = document.getElementById('end-btn');

    this.currentQuestion = null;
    this.recentQids = [];
    this.activeBoxes = [];

    this.onAnswer = null;          // callback set by main: (delta) => void
    this.onAsk = null;              // callback fired when a question is presented (for Eve speaking anim)
    this.ended = false;
  }

  clearBoxes() {
    this.qAnswers.innerHTML = '';
    this.activeBoxes = [];
    this.qAnswers.classList.remove('show');
    this.qPrompt.classList.remove('show');
  }

  ask() {
    const q = pickQuestion(this.state.score, this.recentQids);
    this.askQuestion(q);
  }

  askQuestion(q) {
    this.clearBoxes();
    this.currentQuestion = q;
    this.qPrompt.textContent = q.text;
    // small delay so transition is visible
    requestAnimationFrame(() => this.qPrompt.classList.add('show'));

    q.choices.forEach((c, idx) => {
      const box = document.createElement('div');
      box.className = 'q-box';
      box.innerHTML = `<span class="idx">\u25B8 ${String.fromCharCode(65 + idx)}</span>${escapeHTML(c.t)}`;
      box.addEventListener('click', () => this.handleAnswer(idx));
      this.qAnswers.appendChild(box);
      this.activeBoxes.push(box);
    });
    setTimeout(() => this.qAnswers.classList.add('show'), 350);
    if (this.onAsk) this.onAsk();
  }

  handleAnswer(idx) {
    if (!this.currentQuestion) return;
    const c = this.currentQuestion.choices[idx];
    this.recentQids.push(this.currentQuestion.id);
    if (this.recentQids.length > 6) this.recentQids.shift();
    this.currentQuestion = null;
    this.clearBoxes();
    if (this.onAnswer) this.onAnswer(c.d);
  }

  flash(kind) {
    this.flashEl.classList.remove('red', 'gold', 'blue');
    this.flashEl.classList.add(kind);
    const dur = kind === 'red' ? 240 : kind === 'gold' ? 280 : 200;
    setTimeout(() => this.flashEl.classList.remove(kind), dur);
  }

  updateScore() {
    const { score, minScore, maxScore } = this.state;
    const span = maxScore - minScore;
    const zeroPct = (0 - minScore) / span * 100;
    const scorePct = (score - minScore) / span * 100;
    const left = Math.min(zeroPct, scorePct);
    const right = Math.max(zeroPct, scorePct);
    this.scoreFill.style.left = left + '%';
    this.scoreFill.style.width = (right - left) + '%';

    // colour based on direction
    let color = '#9bb4d4';
    if (score > 100) color = '#ffdc82';
    else if (score < -100) color = '#ff5a6a';
    this.scoreFill.style.background = color;
    this.scoreFill.style.boxShadow = `0 0 12px ${color}`;
    this.scoreValue.style.color = color;

    this.scoreValue.textContent = (score >= 0 ? '+' : '') + score;
    this.levelInd.textContent = 'LEVEL ' + (score >= 0 ? '+' : '') + score;
  }

  end(result, redirectURL, failURL) {
    if (this.ended) return;
    this.ended = true;
    this.currentQuestion = null;
    this.clearBoxes();
    if (result === 'pass') {
      this.endEl.classList.remove('fail');
      this.endEl.classList.add('pass', 'show');
      this.endBig.textContent = 'PASS';
      this.endSub.textContent = 'She has opened the gate. You are being carried inward.';
      this.endBtn.textContent = redirectURL ? 'STEP INSIDE' : 'CLOSE';
      if (redirectURL) {
        this.endBtn.href = redirectURL;
        setTimeout(() => { window.location.href = redirectURL; }, 2400);
      } else {
        this.endBtn.href = 'javascript:void(0)';
        this.endBtn.onclick = () => this.endEl.classList.remove('show');
      }
    } else {
      this.endEl.classList.remove('pass');
      this.endEl.classList.add('fail', 'show');
      this.endBig.textContent = 'UNMADE';
      this.endSub.textContent = 'She has decided against you. The sphere forgets your shape.';
      this.endBtn.textContent = failURL ? 'RETURN' : 'TRY AGAIN';
      this.endBtn.href = failURL || (window.location.pathname + window.location.search);
    }
  }
}
