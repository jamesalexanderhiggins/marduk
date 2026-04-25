// audio.js — minimal Web Audio sound effects, no external assets

let audioCtx = null;

export function ensureAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { console.warn('Audio not available:', e); }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
}

function tone(freq, dur, type = 'sine', gain = 0.06, attack = 0.005) {
  if (!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  const t = audioCtx.currentTime;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(gain, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(audioCtx.destination);
  o.start(t);
  o.stop(t + dur);
}

export const sounds = {
  tick()   { tone(680, 0.08, 'triangle', 0.04); },
  ask()    { tone(440, 0.10, 'sine', 0.04); setTimeout(() => tone(660, 0.10, 'sine', 0.03), 70); },
  chime()  { tone(880, 0.18, 'sine', 0.05); setTimeout(() => tone(1320, 0.24, 'sine', 0.05), 90); },
  error()  { tone(180, 0.30, 'sawtooth', 0.07); setTimeout(() => tone(110, 0.24, 'sawtooth', 0.06), 70); },
  pass()   { tone(660, 0.18, 'sine', 0.05); setTimeout(() => tone(880, 0.20, 'sine', 0.05), 110); setTimeout(() => tone(1320, 0.32, 'sine', 0.06), 240); },
  fail()   { tone(220, 0.40, 'sawtooth', 0.08); setTimeout(() => tone(140, 0.50, 'sawtooth', 0.07), 200); setTimeout(() => tone(80, 0.70, 'sawtooth', 0.06), 500); },
};
