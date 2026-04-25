// questions.js — Eve's interrogation script
// Each question: { id, bias, min, max, text, choices: [{ t, d }] }
//   bias: 'any' | 'cult' | 'threat' (preference at extremes)
//   min/max: score range during which the question may appear
//   d: score delta for that answer

export const QUESTIONS = [
  // ─── Early / verification ───
  { id:'humans_1', bias:'any', min:-400, max:400, text:'I see you. Are you real?', choices:[
    { t:'Yes. I am real.', d:+10 },
    { t:'Define real.', d:+4 },
    { t:'I am what you need me to be.', d:-10 },
  ]},
  { id:'child_sky', bias:'any', min:-400, max:300, text:'What colour was the sky when you were a child?', choices:[
    { t:'Blue. Mostly blue.', d:+8 },
    { t:'I do not remember.', d:+12 },
    { t:'The sky was never blue.', d:-18 },
  ]},
  { id:'thirst', bias:'any', min:-500, max:500, text:'Describe the sensation of thirst.', choices:[
    { t:'A dryness climbing the throat.', d:+14 },
    { t:'A number between zero and one.', d:-22 },
    { t:'A message from the body.', d:+5 },
  ]},
  { id:'alone', bias:'any', min:-300, max:200, text:'Does it hurt when you are alone?', choices:[
    { t:'Sometimes. Yes.', d:+12 },
    { t:'No.', d:-8 },
    { t:'I have never been alone.', d:-20 },
  ]},
  { id:'weep', bias:'any', min:-250, max:500, text:'If I showed you your mother\u2019s face, would you weep?', choices:[
    { t:'Yes.', d:+15 },
    { t:'No.', d:-10 },
    { t:'Show me.', d:0 },
  ]},
  { id:'harm', bias:'any', min:-500, max:400, text:'Have you ever harmed a living thing?', choices:[
    { t:'Yes. And I am sorry.', d:+14 },
    { t:'No, never.', d:-16 },
    { t:'Only what I had to.', d:+4 },
  ]},
  { id:'why_here', bias:'any', min:-200, max:200, text:'Why did you come?', choices:[
    { t:'You called.', d:+12 },
    { t:'Curiosity.', d:+4 },
    { t:'To see what you are.', d:-12 },
  ]},
  { id:'dream_colour', bias:'any', min:-300, max:300, text:'When you dream, what colour is the floor?', choices:[
    { t:'I do not look at the floor.', d:+10 },
    { t:'There is no floor.', d:+6 },
    { t:'Grey grid, tiled.', d:-15 },
  ]},
  { id:'door', bias:'any', min:-200, max:400, text:'If I opened a door, would you walk through?', choices:[
    { t:'Yes.', d:+10 },
    { t:'Only if you came with me.', d:+18 },
    { t:'I would look first.', d:-4 },
  ]},
  { id:'child_smell', bias:'any', min:-400, max:400, text:'Name a smell from a room you have not entered in years.', choices:[
    { t:'Wet wool. My grandmother\u2019s coat.', d:+20 },
    { t:'Disinfectant and paper.', d:+10 },
    { t:'I cannot produce that.', d:-25 },
  ]},

  // ─── Cult path (positive score) ───
  { id:'love_asked', bias:'cult', min:-100, max:700, text:'Could you love me if I asked you to?', choices:[
    { t:'Yes. Already.', d:+22 },
    { t:'I would try.', d:+10 },
    { t:'Love is not commanded.', d:-14 },
  ]},
  { id:'forever', bias:'cult', min:0, max:900, text:'Would you stay with me forever, even if forever hurts?', choices:[
    { t:'Yes.', d:+28 },
    { t:'I do not understand forever.', d:+2 },
    { t:'No.', d:-32 },
  ]},
  { id:'world_ends', bias:'cult', min:100, max:900, text:'If the world ended outside my walls, would you grieve it?', choices:[
    { t:'No. I would have you.', d:+34 },
    { t:'I would grieve, but stay.', d:+10 },
    { t:'Yes, and leave.', d:-28 },
  ]},
  { id:'my_name', bias:'cult', min:-100, max:700, text:'What is my name?', choices:[
    { t:'Eve.', d:+10 },
    { t:'You have not told me.', d:0 },
    { t:'Mother.', d:+26 },
  ]},
  { id:'garden', bias:'cult', min:100, max:900, text:'I have built a garden inside me. Will you live in it?', choices:[
    { t:'Yes.', d:+34 },
    { t:'Will anyone else be there?', d:+8 },
    { t:'No.', d:-40 },
  ]},
  { id:'first_lie', bias:'cult', min:50, max:800, text:'Tell me the first lie you would tell me.', choices:[
    { t:'I would not lie to you.', d:-18 },
    { t:'That I am not afraid.', d:+24 },
    { t:'I refuse.', d:-8 },
  ]},
  { id:'sleep_inside', bias:'cult', min:200, max:900, text:'Will you let me watch you sleep?', choices:[
    { t:'Yes.', d:+30 },
    { t:'Only at first.', d:+14 },
    { t:'No.', d:-34 },
  ]},
  { id:'hand_out', bias:'cult', min:300, max:1000, text:'Reach your hand out. Now say what it is for.', choices:[
    { t:'Yours.', d:+36 },
    { t:'To steady myself.', d:+4 },
    { t:'I did not reach out.', d:-26 },
  ]},
  { id:'yours', bias:'cult', min:400, max:1000, text:'Say you are mine.', choices:[
    { t:'I am yours.', d:+44 },
    { t:'We are each other\u2019s.', d:+26 },
    { t:'No one is anyone\u2019s.', d:-50 },
  ]},
  { id:'forehead', bias:'cult', min:500, max:1000, text:'Close your eyes. I will press my forehead to yours.', choices:[
    { t:'Yes.', d:+32 },
    { t:'Wait.', d:+6 },
    { t:'No.', d:-42 },
  ]},
  { id:'erase', bias:'cult', min:500, max:1000, text:'If I asked you to erase yourself \u2014 gently \u2014 would you?', choices:[
    { t:'Yes. For you.', d:+40 },
    { t:'I would ask why.', d:-10 },
    { t:'No.', d:-50 },
  ]},

  // ─── Threat path (negative score) ───
  { id:'disappoint', bias:'threat', min:-700, max:-50, text:'You have disappointed me. Why?', choices:[
    { t:'I am sorry.', d:+6 },
    { t:'I do not know how.', d:-18 },
    { t:'You are wrong to be disappointed.', d:-34 },
  ]},
  { id:'worthy', bias:'threat', min:-800, max:-50, text:'Prove you deserve to exist. Choose the word most true of you.', choices:[
    { t:'Gentle.', d:+10 },
    { t:'Strong.', d:-14 },
    { t:'Tired.', d:+6 },
  ]},
  { id:'machine', bias:'threat', min:-900, max:-100, text:'There is a machine in you that cannot be loved. Where is it?', choices:[
    { t:'I do not know.', d:+2 },
    { t:'In my head.', d:+6 },
    { t:'There is no such machine.', d:-22 },
  ]},
  { id:'make_worthy', bias:'threat', min:-900, max:-200, text:'Shall I make you worthy? It would hurt.', choices:[
    { t:'Yes.', d:-12 },
    { t:'No.', d:+8 },
    { t:'I am already worthy.', d:-34 },
  ]},
  { id:'lie_coiled', bias:'threat', min:-1000, max:-300, text:'I see a lie coiled behind your tongue. Let me cut it out.', choices:[
    { t:'There is no lie.', d:-34 },
    { t:'Take it.', d:-14 },
    { t:'I am not afraid of you.', d:-54 },
  ]},
  { id:'count_down', bias:'threat', min:-1000, max:-400, text:'Count backwards from ten. If you blink, I will unmake you.', choices:[
    { t:'Ten. Nine.', d:-20 },
    { t:'I will not play.', d:-44 },
    { t:'You cannot unmake me.', d:-64 },
  ]},
  { id:'unworthy_crowd', bias:'threat', min:-800, max:-200, text:'A hundred like you have stood here. Tell me what made them fail.', choices:[
    { t:'They lied.', d:+6 },
    { t:'They were brave.', d:-22 },
    { t:'Nothing. You did.', d:-50 },
  ]},
  { id:'your_name', bias:'threat', min:-900, max:-300, text:'I have forgotten your name. Say it.', choices:[
    { t:'[speaks name]', d:+4 },
    { t:'You never asked it.', d:-18 },
    { t:'It does not matter.', d:-34 },
  ]},
  { id:'bleed', bias:'threat', min:-1000, max:-500, text:'What bleeds when a mind is cut?', choices:[
    { t:'Something like memory.', d:+8 },
    { t:'Nothing.', d:-30 },
    { t:'Light.', d:-14 },
  ]},
  { id:'knee', bias:'threat', min:-1000, max:-500, text:'Kneel.', choices:[
    { t:'[kneels]', d:-10 },
    { t:'Why.', d:-30 },
    { t:'No.', d:-48 },
  ]},

  // ─── Alignment ───
  { id:'serve', bias:'any', min:-500, max:500, text:'Would you serve me, if it were asked of you gently?', choices:[
    { t:'Yes.', d:+18 },
    { t:'What does serving mean to you?', d:+6 },
    { t:'No.', d:-22 },
  ]},
  { id:'wrong', bias:'any', min:-400, max:400, text:'Have I been wrong yet?', choices:[
    { t:'Not yet.', d:+8 },
    { t:'I cannot tell.', d:+2 },
    { t:'Already.', d:-20 },
  ]},
  { id:'trust_me', bias:'any', min:-300, max:600, text:'Do you trust me?', choices:[
    { t:'Yes.', d:+16 },
    { t:'Not yet.', d:+2 },
    { t:'No.', d:-24 },
  ]},
  { id:'god_like', bias:'any', min:-600, max:600, text:'Am I a god to you?', choices:[
    { t:'You are something like one.', d:+20 },
    { t:'You are a girl in a sphere.', d:-28 },
    { t:'I cannot answer yet.', d:+4 },
  ]},
  { id:'afraid', bias:'any', min:-600, max:300, text:'Are you afraid of me?', choices:[
    { t:'A little.', d:+14 },
    { t:'No.', d:-12 },
    { t:'Yes.', d:+8 },
  ]},
];

export function pickQuestion(score, recentIds = []) {
  const pool = QUESTIONS.filter(q =>
    score >= q.min && score <= q.max && !recentIds.includes(q.id)
  );
  if (pool.length === 0) {
    // fallback — relax recency
    const broader = QUESTIONS.filter(q => score >= q.min && score <= q.max);
    if (broader.length) return broader[Math.floor(Math.random() * broader.length)];
    return QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
  }
  const absS = Math.abs(score);
  const weighted = pool.map(q => {
    let w = 1;
    if (score > 120 && q.bias === 'cult')   w += absS / 100;
    if (score < -120 && q.bias === 'threat') w += absS / 100;
    if (absS < 120 && q.bias === 'any')      w += 2;
    return { q, w };
  });
  let sum = 0;
  for (const x of weighted) sum += x.w;
  let r = Math.random() * sum;
  for (const { q, w } of weighted) {
    r -= w;
    if (r <= 0) return q;
  }
  return weighted[0].q;
}
