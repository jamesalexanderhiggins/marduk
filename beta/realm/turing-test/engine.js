(function () {
  function parseTarget(raw) {
    if (raw === null || raw === undefined || raw === "") return null;
    const value = Number(raw);
    return Number.isFinite(value) ? Math.trunc(value) : null;
  }

  function shuffleAnswers(answers, rng) {
    const copy = answers.map((a) => ({ ...a }));
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function mulberry32(seed) {
    let t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      let r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function bucketForScore(score) {
    if (score <= -700) return "chaos";
    if (score <= -300) return "purple";
    if (score <= -100) return "cool";
    return "human";
  }

  function laneForScore(score) {
    if (score <= -500) return "adversarial";
    if (score <= -120) return "suspicious";
    if (score >= 180) return "warm";
    return "balanced";
  }

  function stageLine(state, question, chosen) {
    const lane = laneForScore(state.score);
    const base = {
      warm: [
        "That answer behaved like memory rather than arrangement.",
        "You are becoming inconveniently difficult to dismiss.",
        "If you are performing, you understand tenderness too well."
      ],
      balanced: [
        "Noted.",
        "Possible. Not yet persuasive, but possible.",
        "You moved toward personhood there, but not cleanly."
      ],
      suspicious: [
        "That was tidy. Humans are seldom that tidy.",
        "You prefer controllable language to lived texture.",
        "Useful answer. I did not ask for usefulness."
      ],
      adversarial: [
        "You optimise when pressured. That is not proof of life.",
        "Again you flatten the human into mechanism.",
        "If Eve heard that answer, she would hear architecture, not confession."
      ]
    };

    const chosenLine = chosen.lane === "human"
      ? "You accepted vulnerability."
      : chosen.lane === "guarded"
        ? "You managed exposure without surrendering fully."
        : "You chose abstraction over embodiment.";

    const memoryHint = state.recentUserText.length
      ? ` I am also comparing this to your earlier pattern: “${state.recentUserText[0]}”.`
      : "";

    const prompt = base[lane][question.id % base[lane].length];
    return `${prompt} ${chosenLine}${question.act >= 6 ? memoryHint : ""}`;
  }

  function makeQuestionLabel(question) {
    return `Act ${question.act}: ${question.actTitle}`;
  }

  function createInitialState(options) {
    const seed = options.seed || Date.now();
    return {
      index: 0,
      score: 0,
      target: options.target,
      redirect: options.redirect,
      rng: mulberry32(seed),
      finished: false,
      feed: [],
      memory: {},
      recentUserText: []
    };
  }

  function thresholdHit(score, target) {
    if (target === null) return false;
    return target >= 0 ? score >= target : score <= target;
  }

  function nextQuestion(state, questions) {
    if (!questions || !questions.length) return null;
    const q = questions[state.index % questions.length];
    return {
      ...q,
      answers: shuffleAnswers(q.answers, state.rng)
    };
  }

  window.TURING_ENGINE = {
    parseTarget,
    bucketForScore,
    laneForScore,
    createInitialState,
    makeQuestionLabel,
    nextQuestion,
    exactTargetHit,
    stageLine
  };
})();
