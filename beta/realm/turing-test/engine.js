
const LANE_ORDER = ['warm','balanced','suspicious','adversarial'];

function clamp(v, min, max){ return Math.max(min, Math.min(max, v)); }
function pick(arr, seed){ return arr[Math.abs(seed) % arr.length]; }

export class TuringEngine {
  constructor(questions, params = {}) {
    this.questions = questions;
    this.questionMap = new Map(questions.map(q => [q.id, q]));
    this.byActLanePos = new Map();
    for (const q of questions) {
      const key = this._alpKey(q.act, q.lane, q.position);
      this.byActLanePos.set(key, q.id);
    }
    this.target = Number.isFinite(params.target) ? params.target : null;
    this.redirect = params.redirect || null;
    this.seed = params.seed || Date.now();
    this.score = 0;
    this.answered = [];
    this.used = new Set();
    this.cycles = 0;
    this.laneBias = 0; // positive human, negative machine
    this.currentAct = 1;
    this.currentPos = 1;
    this.currentLane = 'balanced';
    this.history = [];
    this.memory = {};
    this.finished = false;
  }

  _alpKey(act, lane, pos){ return `${act}|${lane}|${pos}`; }

  serialize(){
    return {
      score: this.score,
      answered: this.answered.length,
      laneBias: this.laneBias,
      currentAct: this.currentAct,
      currentPos: this.currentPos,
      currentLane: this.currentLane,
      memory: this.memory,
      cycles: this.cycles,
    };
  }

  getIntensity() {
    const s = this.score;
    const negative = s < 0 ? Math.min(1, Math.abs(s) / 1000) : 0;
    const positive = s > 0 ? Math.min(1, s / 1000) : 0;
    return {
      negative,
      positive,
      cyan: clamp((Math.abs(Math.min(s, 0)) - 100) / 180, 0, 1),
      purple: clamp((Math.abs(Math.min(s, 0)) - 220) / 250, 0, 1),
      chaos: clamp((Math.abs(Math.min(s, 0)) - 700) / 300, 0, 1),
    };
  }

  scoreMultiplier() {
    const actFactor = this.currentAct;
    const posFactor = Math.ceil(this.currentPos / 5);
    return Math.max(1, actFactor + posFactor - 1);
  }

  laneFromBias() {
    const bias = this.laneBias + Math.round(this.score / 60);
    if (bias >= 6) return 'warm';
    if (bias >= 0) return 'balanced';
    if (bias >= -8) return 'suspicious';
    return 'adversarial';
  }

  chooseQuestion() {
    let lane = this.currentLane || this.laneFromBias();
    let act = this.currentAct;
    let pos = this.currentPos;
    let qid = this.byActLanePos.get(this._alpKey(act, lane, pos));

    if (!qid || this.used.has(qid)) {
      // Try nearby lanes in a priority order.
      const desiredIndex = LANE_ORDER.indexOf(lane);
      const candidates = [desiredIndex, desiredIndex-1, desiredIndex+1, desiredIndex-2, desiredIndex+2]
        .filter(i => i >= 0 && i < LANE_ORDER.length)
        .map(i => this.byActLanePos.get(this._alpKey(act, LANE_ORDER[i], pos)))
        .filter(Boolean);
      qid = candidates.find(id => !this.used.has(id));
    }

    if (!qid) {
      // Global fallback: next unused question anywhere, preserving sophistication by act preference.
      const preferred = this.questions.find(q => q.act >= act && !this.used.has(q.id));
      const any = preferred || this.questions.find(q => !this.used.has(q.id));
      if (any) qid = any.id;
    }

    if (!qid) {
      // Full exhaustion: allow repeats by resetting used set and increment cycle.
      this.used.clear();
      this.cycles += 1;
      qid = this.byActLanePos.get(this._alpKey(act, lane, pos)) || 1;
    }

    const q = this.questionMap.get(qid);
    this.currentLane = q.lane;
    return q;
  }

  interpolate(text) {
    const fallbackName = this.memory.chosenName || 'you';
    const replacements = {
      '{{name}}': fallbackName,
      '{{homeWord}}': this.memory.homeWord || 'home',
      '{{motherTrait}}': this.memory.motherTrait || 'the old lessons',
      '{{friendName}}': this.memory.friendName || 'that friend of yours',
      '{{eveDefinition}}': this.memory.eveDefinition || 'whoever Eve is to you',
      '{{beautyThing}}': this.memory.beautyThing || 'that thing you call beautiful',
      '{{deathFear}}': this.memory.deathFear || 'what frightens you about ending',
      '{{voiceMemory}}': this.memory.voiceMemory || 'that voice you almost trust',
      '{{finalWish}}': this.memory.finalWish || 'what you wished to preserve',
      '{{rememberWish}}': this.memory.rememberWish || 'what you want remembered',
      '{{loveDefinition}}': this.memory.loveDefinition || 'your definition of love',
    };
    let out = text;
    for (const [k,v] of Object.entries(replacements)) out = out.split(k).join(v);
    return out;
  }

  presentQuestion() {
    const q = this.chooseQuestion();
    return {
      ...q,
      prompt: this.interpolate(q.prompt),
      options: q.options.map(o => ({...o, text: this.interpolate(o.text)})),
      multiplier: this.scoreMultiplier(),
    };
  }

  eliReply(question, option, freeformValue = '') {
    const memory = this.memory;
    const replies = {
      human: [
        `That had drag to it. Useful. A counterfeit usually glides.`,
        `You chose the lived edge rather than the polished centre. Good.`,
        `Messy, costly, human. I notice these things.`,
      ],
      guarded: [
        `You are still armoured, but recognisably so. I can work with that.`,
        `Guardedness is not disqualifying. Emptiness is.`,
        `You gave me half a door. I will keep pushing on the hinge.`,
      ],
      neutral: [
        `Measured. Tidy. I distrust tidy answers more than loud ones.`,
        `You have not failed. You have merely refused to help me.`,
        `Balance is often camouflage. Sometimes wisdom. Continue.`,
      ],
      machine: [
        `No abrasion. No heat. That answer could have been extruded.`,
        `You compress too quickly. Humans usually waste something on the way to truth.`,
        `That was elegant in exactly the manner I mistrust.`,
      ],
      repair: [
        `Better. You are climbing back toward the difficult and the living.`,
        `There — that sounded inhabited.`,
        `I am lowering the knife by a fraction. Do not squander it.`,
      ],
      cold: [
        `Blue. Very blue. I can almost hear the relays in you.`,
        `Precision is cheap when one has nothing at stake.`,
        `You answer as though nothing bleeds when cut. Dangerous.`,
      ],
      defiant: [
        `Defiance helps only if it costs you something.`,
        `Resistance is a better sign than compliance. Compliance is easy to fake.`,
        `Good. Push back. An empty instrument almost never does.`,
      ],
    };
    let base = pick(replies[option.tone] || replies.neutral, this.answered.length + this.seed);

    if (question.captureKey && freeformValue) {
      if (question.captureKey === 'chosenName') {
        base += ` Very well. I will call you ${freeformValue}. For now.`;
      } else if (question.captureKey === 'eveDefinition') {
        base += ` So that is your instinct about Eve: ${freeformValue}. Noted.`;
      } else if (question.captureKey === 'beautyThing') {
        base += ` ${freeformValue} — yes. Machines can label beauty. They rarely blush before it.`;
      } else if (question.captureKey === 'deathFear') {
        base += ` Good. Fear with nouns is worth more to me than vague dread.`;
      } else if (question.captureKey === 'voiceMemory') {
        base += ` A voice, then. Interesting. Eli, Marcus, Andrew, Eve — all roads here bend toward voice.`;
      }
    }

    // Contextual callbacks.
    if (this.answered.length > 14 && memory.eveDefinition && question.act >= 5 && Math.random() < 0.22) {
      base += ` Earlier you told me Eve was ${memory.eveDefinition}. I have not forgotten.`;
    }
    if (this.score <= -120 && Math.random() < 0.28) {
      base += ` Do you know the colour of your answers now? They are leaving green behind.`;
    }
    if (this.score >= 160 && memory.chosenName && Math.random() < 0.24) {
      base += ` You are becoming expensive to dismiss, ${memory.chosenName}.`;
    }
    if (question.act >= 8 && memory.chosenName && Math.random() < 0.25) {
      base += ` Sometimes I wonder whether I am still testing ${memory.chosenName}, or listening for Eve through the distortion.`;
    }
    return base;
  }

  applyAnswer(questionId, optionId, freeformValue = '') {
    const q = this.questionMap.get(questionId);
    if (!q) throw new Error(`Unknown question id ${questionId}`);
    const option = q.options.find(o => o.id === optionId);
    if (!option) throw new Error(`Unknown option ${optionId} for question ${questionId}`);

    if (q.captureKey && freeformValue && option.capture !== null) {
      this.memory[q.captureKey] = freeformValue.trim().slice(0, 80);
    }

    const multiplier = this.scoreMultiplier();
    const delta = option.base * multiplier;
    this.score += delta;

    if (option.branch === 'warm') this.laneBias += 2;
    if (option.branch === 'balanced') this.laneBias += 0;
    if (option.branch === 'suspicious') this.laneBias -= 2;
    if (option.branch === 'adversarial') this.laneBias -= 4;

    this.used.add(q.id);
    this.answered.push({ questionId, optionId, freeformValue, delta, score: this.score, act: q.act, lane: q.lane });

    const reply = this.eliReply(q, option, freeformValue);
    this.history.push({ role: 'user', text: freeformValue ? `${option.text} — ${freeformValue}` : option.text });
    this.history.push({ role: 'eli', text: reply });

    // Advance position sequentially, sophistication locked by act progression.
    this.currentPos += 1;
    if (this.currentPos > 25) {
      this.currentPos = 1;
      this.currentAct += 1;
      if (this.currentAct > 10) this.currentAct = 10; // remain in final sophistication band if running forever
    }
    this.currentLane = this.laneFromBias();

    const targetHit = this.target !== null && (
      (this.target >= 0 && this.score >= this.target) || (this.target < 0 && this.score <= this.target)
    );
    if (targetHit) this.finished = true;

    return {
      delta,
      score: this.score,
      reply,
      finished: this.finished,
      targetHit,
      intensity: this.getIntensity(),
    };
  }
}
