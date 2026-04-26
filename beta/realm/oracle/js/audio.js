// audio.js — Web Audio synth sounds for Marduk Oracle UI.
// All sounds generated procedurally via Web Audio API; no files required.

let _ctx = null;

function ctx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

function tone(freq, duration, vol = 0.07, type = 'sine', attack = 0.004, decay = 0.0) {
  try {
    const c    = ctx();
    const osc  = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.value = freq;
    const t = c.currentTime;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(vol, t + attack);
    if (decay > 0) {
      gain.gain.setValueAtTime(vol, t + attack + decay);
    }
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.start(t);
    osc.stop(t + duration + 0.01);
  } catch (_) {}
}

function chord(freqs, duration, vol = 0.05, type = 'sine') {
  freqs.forEach((f, i) => {
    setTimeout(() => tone(f, duration, vol, type), i * 90);
  });
}

export const SFX = {
  // Call once on first user gesture to unlock AudioContext
  unlock() {
    try { ctx().resume(); } catch (_) {}
  },

  // Keypress — short high blip, pitch varies slightly per call
  keypress(n = 0) {
    const base = 780 + (n % 7) * 28;
    tone(base, 0.055, 0.045, 'sine', 0.002);
  },

  // Button click — satisfying low thud
  buttonClick() {
    tone(520, 0.07,  0.06,  'square',   0.003);
    tone(260, 0.10,  0.035, 'triangle', 0.003);
  },

  // Admin key entered — low warning boop
  adminKey() {
    tone(320, 0.14, 0.06, 'sawtooth', 0.005);
    setTimeout(() => tone(200, 0.20, 0.05, 'triangle'), 80);
  },

  // Search triggered — ascending ping
  searchStart() {
    tone(440, 0.12, 0.06, 'sine', 0.005);
    setTimeout(() => tone(660, 0.14, 0.06, 'sine', 0.005), 90);
  },

  // Data found — three-note chime
  dataFound() {
    tone(523, 0.16, 0.07, 'sine', 0.006);
    setTimeout(() => tone(659, 0.16, 0.07, 'sine', 0.006), 95);
    setTimeout(() => tone(784, 0.24, 0.07, 'sine', 0.006), 190);
  },

  // No results — falling tone
  noResults() {
    tone(400, 0.10, 0.05, 'sine');
    setTimeout(() => tone(280, 0.18, 0.05, 'sine'), 80);
  },

  // Touch the oracle — crystalline high ping
  touch() {
    const f = 1100 + Math.random() * 600;
    tone(f,     0.04, 0.05, 'sine', 0.001);
    tone(f * 2, 0.06, 0.02, 'sine', 0.002);
  },

  // Detail open — soft whoosh-in
  detailOpen() {
    tone(660, 0.10, 0.04, 'sine', 0.002);
    setTimeout(() => tone(880, 0.14, 0.04, 'sine', 0.002), 60);
  },

  // Back/close — reverse: descending
  detailClose() {
    tone(600, 0.08, 0.04, 'sine', 0.002);
    setTimeout(() => tone(400, 0.12, 0.04, 'sine', 0.002), 50);
  },

  // Clear / escape
  clear() {
    tone(340, 0.12, 0.045, 'triangle', 0.003);
  },
};
