import { QUESTIONS } from './questions.js';
import { TuringEngine } from './engine.js';
function assert(cond, msg){ if(!cond) throw new Error(msg); }

assert(QUESTIONS.length === 1000, 'Need 1000 questions');
assert(new Set(QUESTIONS.map(q => q.id)).size === 1000, 'Question IDs must be unique');

const eng = new TuringEngine(QUESTIONS, { target: 120, seed: 'test' });
let q = eng.presentQuestion();
for (let i=0;i<60 && !eng.finished;i++) {
  const opt = [...q.options].sort((a,b)=>b.base-a.base)[0];
  const free = q.captureKey ? `value-${i}` : '';
  eng.applyAnswer(q.id, opt.id, free);
  if (!eng.finished) q = eng.presentQuestion();
}
assert(eng.score >= 120, 'Positive run should hit target');

const eng2 = new TuringEngine(QUESTIONS, { target: -220, seed: 'test2' });
q = eng2.presentQuestion();
for (let i=0;i<120 && !eng2.finished;i++) {
  const opt = [...q.options].sort((a,b)=>a.base-b.base)[0];
  const free = q.captureKey ? `cold-${i}` : '';
  eng2.applyAnswer(q.id, opt.id, free);
  if (!eng2.finished) q = eng2.presentQuestion();
}
assert(eng2.score <= -220, `Negative run should hit target, got ${eng2.score}`);

const eng3 = new TuringEngine(QUESTIONS, { seed: 'test3' });
q = eng3.presentQuestion();
const seen = new Set();
for (let i=0;i<300;i++) {
  assert(!seen.has(q.id), `Repeated question too early at ${q.id}`);
  seen.add(q.id);
  const opt = q.options[1];
  eng3.applyAnswer(q.id, opt.id, q.captureKey ? `mem-${i}` : '');
  q = eng3.presentQuestion();
}
console.log('All tests passed.', {score1: eng.score, score2: eng2.score, seen: seen.size});
