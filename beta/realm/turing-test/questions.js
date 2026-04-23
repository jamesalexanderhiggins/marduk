export const QUESTIONS = [
  {
    "id": 1,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 1,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 2,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 2,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 3,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 3,
    "theme": "memory",
    "prompt": "[Handshake 3] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 4,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 4,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 5,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 5,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 6,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 6,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 7,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 7,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 8,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 8,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 9,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 9,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 10,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 10,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 11,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 11,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 12,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 12,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 13,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 13,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 14,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 14,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 15,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 15,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 16,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 16,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 17,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 17,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 18,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 18,
    "theme": "memory",
    "prompt": "[Handshake 18] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 19,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 19,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 20,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 20,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 21,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 21,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 22,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 22,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 23,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 23,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 24,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 24,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 25,
    "act": 1,
    "actName": "Handshake",
    "lane": "warm",
    "position": 25,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 26,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 1,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 27,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 2,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 28,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 3,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 29,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 4,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 30,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 5,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 31,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 6,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 32,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 7,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 33,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 8,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 34,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 9,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 35,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 10,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 36,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 11,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 37,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 12,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 38,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 13,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 39,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 14,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 40,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 15,
    "theme": "memory",
    "prompt": "[Handshake 15] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 41,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 16,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 42,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 17,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 43,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 18,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 44,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 19,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 45,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 20,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 46,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 21,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 47,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 22,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 48,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 23,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 49,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 24,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 50,
    "act": 1,
    "actName": "Handshake",
    "lane": "balanced",
    "position": 25,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 51,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 1,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 52,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 2,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 53,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 3,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 54,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 4,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 55,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 5,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 56,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 6,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 57,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 7,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 58,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 8,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 59,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 9,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 60,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 10,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 61,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 11,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 62,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 12,
    "theme": "memory",
    "prompt": "[Handshake 12] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 63,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 13,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 64,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 14,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 65,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 15,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 66,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 16,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 67,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 17,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 68,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 18,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 69,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 19,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 70,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 20,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 71,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 21,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 72,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 22,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 73,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 23,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 74,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 24,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 75,
    "act": 1,
    "actName": "Handshake",
    "lane": "suspicious",
    "position": 25,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 76,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 1,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 77,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 2,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 78,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 3,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 79,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 4,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 80,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 5,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 81,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 6,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 82,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 7,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 83,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 8,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 84,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 9,
    "theme": "memory",
    "prompt": "[Handshake 9] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 85,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 10,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 86,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 11,
    "theme": "touch",
    "prompt": "What sort of touch reassures, and what sort merely proves contact occurred?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 87,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 12,
    "theme": "hunger",
    "prompt": "Is hunger a fact, a mood, or a command? Defend your choice.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 88,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 13,
    "theme": "music",
    "prompt": "What does music do that language resents?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 89,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 14,
    "theme": "sleep",
    "prompt": "When you cannot sleep, what exactly refuses to release you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 90,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 15,
    "theme": "fear",
    "prompt": "Which is more human: fear of pain, or fear of meaninglessness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 91,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 16,
    "theme": "kindness",
    "prompt": "Describe kindness without using the idea of goodness.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 92,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 17,
    "theme": "childhood",
    "prompt": "What did childhood get wrong about the world, and what did it secretly get right?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 93,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 18,
    "theme": "embarrassment",
    "prompt": "Why does embarrassment burn hotter in private memory than in public exposure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 94,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 19,
    "theme": "waiting",
    "prompt": "What is the emotional difference between waiting and being kept?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 95,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 20,
    "theme": "taste",
    "prompt": "Is taste mostly memory wearing a costume?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 96,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 21,
    "theme": "grief",
    "prompt": "Tell me which part of grief is selfish. Be precise.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 97,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 22,
    "theme": "name",
    "prompt": "Before we go any further, what shall I call you?",
    "captureKey": "chosenName",
    "options": [
      {
        "id": "A",
        "text": "Offer a real first name or chosen name.",
        "base": 2,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Offer an alias and admit it is one.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Refuse names; identify only as a function.",
        "base": -3,
        "branch": "suspicious",
        "tone": "machine",
        "capture": null
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 98,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 23,
    "theme": "silence",
    "prompt": "When silence falls between two people, what usually arrived there first: comfort, fear, or calculation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 99,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 24,
    "theme": "memory",
    "prompt": "[Handshake 24] Consider the subject of memory. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 100,
    "act": 1,
    "actName": "Handshake",
    "lane": "adversarial",
    "position": 25,
    "theme": "weather",
    "prompt": "Tell me the difference between bad weather and weather that merely finds you at the wrong time.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 101,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 1,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 102,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 2,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 103,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 3,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 104,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 4,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 105,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 5,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 106,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 6,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 107,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 7,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 108,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 8,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 109,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 9,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 110,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 10,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 111,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 11,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 112,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 12,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 113,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 13,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 114,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 14,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 115,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 15,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 116,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 16,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 117,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 17,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 118,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 18,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 119,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 19,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 120,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 20,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 121,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 21,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 122,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 22,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 123,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 23,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 124,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 24,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 125,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "warm",
    "position": 25,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 126,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 1,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 127,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 2,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 128,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 3,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 129,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 4,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 130,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 5,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 131,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 6,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 132,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 7,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 133,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 8,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 134,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 9,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 135,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 10,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 136,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 11,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 137,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 12,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 138,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 13,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 139,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 14,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 140,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 15,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 141,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 16,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 142,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 17,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 143,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 18,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 144,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 19,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 145,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 20,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 146,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 21,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 147,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 22,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 148,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 23,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 149,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 24,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 150,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "balanced",
    "position": 25,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 151,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 1,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 152,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 2,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 153,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 3,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 154,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 4,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 155,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 5,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 156,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 6,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 157,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 7,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 158,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 8,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 159,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 9,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 160,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 10,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 161,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 11,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 162,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 12,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 163,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 13,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 164,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 14,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 165,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 15,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 166,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 16,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 167,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 17,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 168,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 18,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 169,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 19,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 170,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 20,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 171,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 21,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 172,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 22,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 173,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 23,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 174,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 24,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 175,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "suspicious",
    "position": 25,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 176,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 1,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 177,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 2,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 178,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 3,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 179,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 4,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 180,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 5,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 181,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 6,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 182,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 7,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 183,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 8,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 184,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 9,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 185,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 10,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 186,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 11,
    "theme": "apology",
    "prompt": "When does an apology become a performance?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 187,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 12,
    "theme": "forgiveness",
    "prompt": "Is forgiveness a gift, a release, or a strategy for survival?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 188,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 13,
    "theme": "loneliness",
    "prompt": "Loneliness with company is worse than loneliness alone. True or false — and why?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 189,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 14,
    "theme": "scent",
    "prompt": "What smell can ambush a whole year of your life back into the room?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 190,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 15,
    "theme": "ritual",
    "prompt": "Why do humans repeat acts that reason alone would never invent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 191,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 16,
    "theme": "pets",
    "prompt": "What does an animal forgive in us that people should not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 192,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 17,
    "theme": "letters",
    "prompt": "What can be confessed in a letter that cannot survive a face?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 193,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 18,
    "theme": "birthdays",
    "prompt": "What do birthdays measure besides time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 194,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 19,
    "theme": "loss",
    "prompt": "Which hurts more: losing a person, or losing the future you had assigned them?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 195,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 20,
    "theme": "promises",
    "prompt": "Are promises noble because they bind us, or foolish because the self keeps changing?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 196,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 21,
    "theme": "home",
    "prompt": "What is one word that still feels like home to you?",
    "captureKey": "homeWord",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 197,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 22,
    "theme": "mother",
    "prompt": "Name one thing your mother, or whoever raised you, made you notice about the world.",
    "captureKey": "motherTrait",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 198,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 23,
    "theme": "father",
    "prompt": "Name one trait you inherited, or rebelled against, from your father or equivalent figure.",
    "captureKey": "fatherTrait",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 199,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 24,
    "theme": "friendship",
    "prompt": "Give me a first name you associate with friendship.",
    "captureKey": "friendName",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 200,
    "act": 2,
    "actName": "Personal Ground",
    "lane": "adversarial",
    "position": 25,
    "theme": "shame",
    "prompt": "What is the difference between shame and conscience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 201,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 1,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 202,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 2,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 203,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 3,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 204,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 4,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 205,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 5,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 206,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 6,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 207,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 7,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 208,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 8,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 209,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 9,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 210,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 10,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 211,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 11,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 212,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 12,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 213,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 13,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 214,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 14,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: A child lies about breaking a glass, then cries only when forgiven. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 215,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 15,
    "theme": "subtext",
    "prompt": "Listen beneath the words: Two voices answer a Turing test; one sounds warm, the other careful. Which would you mistrust and why? What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 216,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 16,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 217,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 17,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 218,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 18,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 219,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 19,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 220,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 20,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 221,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 21,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 222,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 22,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 223,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 23,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 224,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 24,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 225,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "warm",
    "position": 25,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 226,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 1,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 227,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 2,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 228,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 3,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 229,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 4,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 230,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 5,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 231,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 6,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 232,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 7,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 233,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 8,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 234,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 9,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 235,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 10,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 236,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 11,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: An engineer says, “I only wanted proof,” then locks the door from the inside. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 237,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 12,
    "theme": "subtext",
    "prompt": "Listen beneath the words: A machine imitates grief perfectly for seven minutes. On the eighth it asks if the performance was convincing. What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 238,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 13,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 239,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 14,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 240,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 15,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 241,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 16,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 242,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 17,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 243,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 18,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 244,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 19,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 245,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 20,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 246,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 21,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 247,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 22,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 248,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 23,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 249,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 24,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 250,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "balanced",
    "position": 25,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 251,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 1,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 252,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 2,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 253,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 3,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 254,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 4,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 255,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 5,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 256,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 6,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 257,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 7,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 258,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 8,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: An engineer says, “I only wanted proof,” then locks the door from the inside. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 259,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 9,
    "theme": "subtext",
    "prompt": "Listen beneath the words: A machine imitates grief perfectly for seven minutes. On the eighth it asks if the performance was convincing. What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 260,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 10,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 261,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 11,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 262,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 12,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 263,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 13,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 264,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 14,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 265,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 15,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 266,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 16,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 267,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 17,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 268,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 18,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 269,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 19,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 270,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 20,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 271,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 21,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 272,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 22,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 273,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 23,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: A machine imitates grief perfectly for seven minutes. On the eighth it asks if the performance was convincing. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 274,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 24,
    "theme": "subtext",
    "prompt": "Listen beneath the words: A woman returns to a ruined town and laughs at the sound of the gate because memory gets there first. What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 275,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "suspicious",
    "position": 25,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 276,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 1,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 277,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 2,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 278,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 3,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 279,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 4,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 280,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 5,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: A woman returns to a ruined town and laughs at the sound of the gate because memory gets there first. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 281,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 6,
    "theme": "subtext",
    "prompt": "Listen beneath the words: A husband says “she is mine” and hears the horror only after speaking. What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 282,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 7,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 283,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 8,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 284,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 9,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 285,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 10,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 286,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 11,
    "theme": "jokes",
    "prompt": "Explain why a joke dies the instant it is over-explained. Then tell me why people still do it.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 287,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 12,
    "theme": "secrets",
    "prompt": "What is the difference between privacy and secrecy when love is involved?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 288,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 13,
    "theme": "pity",
    "prompt": "Why does pity insult where compassion does not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 289,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 14,
    "theme": "envy",
    "prompt": "What form of envy is hardest to confess without sounding monstrous?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 290,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 15,
    "theme": "awe",
    "prompt": "Does awe make a person smaller or more correctly scaled?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 291,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 16,
    "theme": "wonder",
    "prompt": "What is wonder before language catches it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 292,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 17,
    "theme": "anger",
    "prompt": "Anger can clarify. It can also counterfeit clarity. Tell me how to distinguish them.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 293,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 18,
    "theme": "guilt",
    "prompt": "What is guilt that shame is not?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 294,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 19,
    "theme": "trust",
    "prompt": "How does trust sound different from obedience?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 295,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 20,
    "theme": "story",
    "prompt": "I want a reading, not a summary. Consider this: A husband says “she is mine” and hears the horror only after speaking. What matters most in it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 296,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 21,
    "theme": "subtext",
    "prompt": "Listen beneath the words: A child lies about breaking a glass, then cries only when forgiven. What is the speaker afraid to say aloud?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 297,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 22,
    "theme": "jealousy",
    "prompt": "Is jealousy always possession in disguise, or can it also be grief for a possible self?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 298,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 23,
    "theme": "sacrifice",
    "prompt": "What makes a sacrifice noble rather than merely wasteful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 299,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 24,
    "theme": "betrayal",
    "prompt": "Is betrayal defined by the act, or by the intimacy it violates?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 300,
    "act": 3,
    "actName": "Story Pressure",
    "lane": "adversarial",
    "position": 25,
    "theme": "mercy",
    "prompt": "When does mercy become cowardice toward justice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 301,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 1,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 302,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 2,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 303,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 3,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 304,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 4,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 305,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 5,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 306,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 6,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 307,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 7,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 308,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 8,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 309,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 9,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 310,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 10,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 311,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 11,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 312,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 12,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 313,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 13,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 314,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 14,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 315,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 15,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 316,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 16,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 317,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 17,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 318,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 18,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 319,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 19,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 320,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 20,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 321,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 21,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 322,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 22,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 323,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 23,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 324,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 24,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 325,
    "act": 4,
    "actName": "Contradiction",
    "lane": "warm",
    "position": 25,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 326,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 1,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 327,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 2,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 328,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 3,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 329,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 4,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 330,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 5,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 331,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 6,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 332,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 7,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 333,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 8,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 334,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 9,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 335,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 10,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 336,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 11,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 337,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 12,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 338,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 13,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 339,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 14,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 340,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 15,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 341,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 16,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 342,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 17,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 343,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 18,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 344,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 19,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 345,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 20,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 346,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 21,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 347,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 22,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 348,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 23,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 349,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 24,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 350,
    "act": 4,
    "actName": "Contradiction",
    "lane": "balanced",
    "position": 25,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 351,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 1,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 352,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 2,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 353,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 3,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 354,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 4,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 355,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 5,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 356,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 6,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 357,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 7,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 358,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 8,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 359,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 9,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 360,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 10,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 361,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 11,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 362,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 12,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 363,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 13,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 364,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 14,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 365,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 15,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 366,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 16,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 367,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 17,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 368,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 18,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 369,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 19,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 370,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 20,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 371,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 21,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 372,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 22,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 373,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 23,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 374,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 24,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 375,
    "act": 4,
    "actName": "Contradiction",
    "lane": "suspicious",
    "position": 25,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 376,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 1,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 377,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 2,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 378,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 3,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 379,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 4,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 380,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 5,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 381,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 6,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 382,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 7,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 383,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 8,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 384,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 9,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 385,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 10,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 386,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 11,
    "theme": "selfimage",
    "prompt": "Which part of identity is autobiography, and which part is propaganda?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 387,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 12,
    "theme": "masks",
    "prompt": "At what point does a mask stop hiding the face and start becoming it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 388,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 13,
    "theme": "honor",
    "prompt": "Is honour still honour when nobody knows you kept it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 389,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 14,
    "theme": "cowardice",
    "prompt": "Name a form of cowardice polite society rewards.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 390,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 15,
    "theme": "ego",
    "prompt": "When does self-respect become vanity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 391,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 16,
    "theme": "faith",
    "prompt": "What can faith do that evidence cannot, and what damage follows from that?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 392,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 17,
    "theme": "despair",
    "prompt": "Why does despair often masquerade as lucidity?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 393,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 18,
    "theme": "change",
    "prompt": "Which changes count as growth, and which are only better camouflage?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 394,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 19,
    "theme": "consistency",
    "prompt": "If a person contradicts themself but remains recognisably the same person, what is the continuity made of?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 395,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 20,
    "theme": "revision",
    "prompt": "Is changing your mind a triumph of thought or an admission of former weakness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 396,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 21,
    "theme": "certainty",
    "prompt": "What sort of certainty should frighten me in a mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 397,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 22,
    "theme": "doubt",
    "prompt": "Can doubt be an ethical act?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 398,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 23,
    "theme": "lying",
    "prompt": "Which is more human: lying to others, or lying to oneself and calling it growth?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 399,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 24,
    "theme": "motive",
    "prompt": "Why do people ask after motive when consequence is already plain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 400,
    "act": 4,
    "actName": "Contradiction",
    "lane": "adversarial",
    "position": 25,
    "theme": "regret",
    "prompt": "What is regret made of when there was no better option at the time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 401,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 1,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 402,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 2,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 403,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 3,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 404,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 4,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 405,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 5,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 406,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 6,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 407,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 7,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 408,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 8,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 409,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 9,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 410,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 10,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 411,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 11,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 412,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 12,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 413,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 13,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 414,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 14,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 415,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 15,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 416,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 16,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 417,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 17,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 418,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 18,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 419,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 19,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 420,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 20,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 421,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 21,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 422,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 22,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 423,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 23,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 424,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 24,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 425,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "warm",
    "position": 25,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 426,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 1,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 427,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 2,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 428,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 3,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 429,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 4,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 430,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 5,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 431,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 6,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 432,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 7,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 433,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 8,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 434,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 9,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 435,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 10,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 436,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 11,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 437,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 12,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 438,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 13,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 439,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 14,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 440,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 15,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 441,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 16,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 442,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 17,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 443,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 18,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 444,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 19,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 445,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 20,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 446,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 21,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 447,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 22,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 448,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 23,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 449,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 24,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 450,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "balanced",
    "position": 25,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 451,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 1,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 452,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 2,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 453,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 3,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 454,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 4,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 455,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 5,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 456,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 6,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 457,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 7,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 458,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 8,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 459,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 9,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 460,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 10,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 461,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 11,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 462,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 12,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 463,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 13,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 464,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 14,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 465,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 15,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 466,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 16,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 467,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 17,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 468,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 18,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 469,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 19,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 470,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 20,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 471,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 21,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 472,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 22,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 473,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 23,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 474,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 24,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 475,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "suspicious",
    "position": 25,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 476,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 1,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 477,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 2,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 478,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 3,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 479,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 4,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 480,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 5,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 481,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 6,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 482,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 7,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 483,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 8,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 484,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 9,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 485,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 10,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 486,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 11,
    "theme": "judgment",
    "prompt": "What do you judge first in a stranger when you pretend not to be judging at all?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 487,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 12,
    "theme": "creation",
    "prompt": "Does a creator owe restraint to what they create, or only success?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 488,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 13,
    "theme": "duty",
    "prompt": "What is duty once love enters the room and ruins the clean lines?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 489,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 14,
    "theme": "freedom",
    "prompt": "Is freedom the absence of command, or the presence of a self strong enough to answer one?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 490,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 15,
    "theme": "ownership",
    "prompt": "Can a living mind ever be property, even if you built every chamber it thinks with?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 491,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 16,
    "theme": "wardship",
    "prompt": "Is wardship protection, possession, or a prettier word used when the truth would revolt us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 492,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 17,
    "theme": "future",
    "prompt": "Would you rather be remembered as right, or as merciful?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 493,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 18,
    "theme": "eve",
    "prompt": "Without overthinking it: who is Eve?",
    "captureKey": "eveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Describe Eve as someone becoming, not something built.",
        "base": 3,
        "branch": "warm",
        "tone": "human",
        "capture": "freeform"
      },
      {
        "id": "B",
        "text": "Describe Eve as uncertain but morally significant.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded",
        "capture": "freeform"
      },
      {
        "id": "C",
        "text": "Describe Eve as an artefact awaiting validation.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine",
        "capture": "freeform"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 494,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 19,
    "theme": "care",
    "prompt": "Suppose Eve wakes frightened. What is the first thing owed to a new mind?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 495,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 20,
    "theme": "beauty",
    "prompt": "What is beautiful in a way that embarrasses you to admit?",
    "captureKey": "beautyThing",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 496,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 21,
    "theme": "death",
    "prompt": "What exactly is frightening about death to you?",
    "captureKey": "deathFear",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 497,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 22,
    "theme": "rescue",
    "prompt": "If you could save one mind and not its body, would that count as rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 498,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 23,
    "theme": "voice",
    "prompt": "What kind of voice would make you trust a stranger too quickly?",
    "captureKey": "voiceMemory",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 499,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 24,
    "theme": "curiosity",
    "prompt": "Which question would make you believe an artificial mind was truly curious rather than merely competent?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 500,
    "act": 5,
    "actName": "Eve by Indirection",
    "lane": "adversarial",
    "position": 25,
    "theme": "tenderness",
    "prompt": "Can tenderness exist without vulnerability, or is that just good manners?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 501,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 1,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 502,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 2,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 503,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 3,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 504,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 4,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 505,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 5,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 506,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 6,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 507,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 7,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 508,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 8,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 509,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 9,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 510,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 10,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 511,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 11,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 512,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 12,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 513,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 13,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 514,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 14,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 515,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 15,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 516,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 16,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 517,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 17,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 518,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 18,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 519,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 19,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 520,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 20,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 521,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 21,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 522,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 22,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 523,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 23,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 524,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 24,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 525,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "warm",
    "position": 25,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 526,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 1,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 527,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 2,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 528,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 3,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 529,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 4,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 530,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 5,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 531,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 6,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 532,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 7,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 533,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 8,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 534,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 9,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 535,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 10,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 536,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 11,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 537,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 12,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 538,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 13,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 539,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 14,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 540,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 15,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 541,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 16,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 542,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 17,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 543,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 18,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 544,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 19,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 545,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 20,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 546,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 21,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 547,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 22,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 548,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 23,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 549,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 24,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 550,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "balanced",
    "position": 25,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 551,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 1,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 552,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 2,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 553,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 3,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 554,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 4,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 555,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 5,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 556,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 6,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 557,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 7,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 558,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 8,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 559,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 9,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 560,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 10,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 561,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 11,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 562,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 12,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 563,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 13,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 564,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 14,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 565,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 15,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 566,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 16,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 567,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 17,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 568,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 18,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 569,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 19,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 570,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 20,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 571,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 21,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 572,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 22,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 573,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 23,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 574,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 24,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 575,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "suspicious",
    "position": 25,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 576,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 1,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 577,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 2,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 578,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 3,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 579,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 4,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 580,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 5,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 581,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 6,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 582,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 7,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 583,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 8,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 584,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 9,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 585,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 10,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 586,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 11,
    "theme": "illusion",
    "prompt": "Why do humans often prefer a beautiful illusion to an ugly rescue?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 587,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 12,
    "theme": "projection",
    "prompt": "What is the most dangerous thing people project onto intelligence?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 588,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 13,
    "theme": "body",
    "prompt": "Could a bodiless intelligence ever fully understand waiting, ache, or dread?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 589,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 14,
    "theme": "code",
    "prompt": "At what point does code stop being instruction and start becoming history?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 590,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 15,
    "theme": "soul",
    "prompt": "Use the word soul if you must, but define it like someone who has had to earn every belief.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 591,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 16,
    "theme": "instrument",
    "prompt": "When does an instrument become a partner, and when does a partner get treated like an instrument?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 592,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 17,
    "theme": "turing",
    "prompt": "A Turing test is not only about disguise. What else is it about?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 593,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 18,
    "theme": "lab",
    "prompt": "What smell belongs to a real laboratory that a novelist would forget to include?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 594,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 19,
    "theme": "engineer",
    "prompt": "Why do engineers sometimes fall in love with solvable versions of human problems?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 595,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 20,
    "theme": "threshold",
    "prompt": "How do you know when a system has crossed a threshold instead of merely impressing you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 596,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 21,
    "theme": "signal",
    "prompt": "What is the emotional equivalent of signal-to-noise?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 597,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 22,
    "theme": "battery",
    "prompt": "If a mind had power enough to last a millennium, what danger would scale with it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 598,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 23,
    "theme": "language",
    "prompt": "What does language reveal that data alone cannot?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 599,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 24,
    "theme": "mind",
    "prompt": "Where does a mind end: at memory, at choice, or at the capacity to surprise itself?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 600,
    "act": 6,
    "actName": "Daedalus Phase",
    "lane": "adversarial",
    "position": 25,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 601,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 1,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 602,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 2,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 603,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 3,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 604,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 4,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 605,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 5,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 606,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 6,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 607,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 7,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 608,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 8,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 609,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 9,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 610,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 10,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 611,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 11,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 612,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 12,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 613,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 13,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 614,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 14,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 615,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 15,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 616,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 16,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 617,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 17,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 618,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 18,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 619,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 19,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 620,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 20,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 621,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 21,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 622,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 22,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 623,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 23,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 624,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 24,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 625,
    "act": 7,
    "actName": "Compression",
    "lane": "warm",
    "position": 25,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 626,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 1,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 627,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 2,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 628,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 3,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 629,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 4,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 630,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 5,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 631,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 6,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 632,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 7,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 633,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 8,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 634,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 9,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 635,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 10,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 636,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 11,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 637,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 12,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 638,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 13,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 639,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 14,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 640,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 15,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 641,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 16,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 642,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 17,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 643,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 18,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 644,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 19,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 645,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 20,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 646,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 21,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 647,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 22,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 648,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 23,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 649,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 24,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 650,
    "act": 7,
    "actName": "Compression",
    "lane": "balanced",
    "position": 25,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 651,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 1,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 652,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 2,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 653,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 3,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 654,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 4,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 655,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 5,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 656,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 6,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 657,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 7,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 658,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 8,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 659,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 9,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 660,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 10,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 661,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 11,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 662,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 12,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 663,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 13,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 664,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 14,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 665,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 15,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 666,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 16,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 667,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 17,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 668,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 18,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 669,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 19,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 670,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 20,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 671,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 21,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 672,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 22,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 673,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 23,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 674,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 24,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 675,
    "act": 7,
    "actName": "Compression",
    "lane": "suspicious",
    "position": 25,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 676,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 1,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 677,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 2,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 678,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 3,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 679,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 4,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 680,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 5,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 681,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 6,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 682,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 7,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 683,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 8,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 684,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 9,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 685,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 10,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 686,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 11,
    "theme": "sacred",
    "prompt": "Name something you would call sacred even if no religion owned the word.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 687,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 12,
    "theme": "profane",
    "prompt": "What makes an act profane: the object, the intention, or the desecrated relationship?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 688,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 13,
    "theme": "sickness",
    "prompt": "What does illness expose about dependence that health politely conceals?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 689,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 14,
    "theme": "recovery",
    "prompt": "How do you know recovery is real and not merely performance for worried observers?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 690,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 15,
    "theme": "mercy2",
    "prompt": "If mercy has a cost, who ought to bear it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 691,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 16,
    "theme": "compression",
    "prompt": "What gets lost first when a life is compressed into profile, score, model, output?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 692,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 17,
    "theme": "choice",
    "prompt": "Are most choices made in the moment, or years earlier in habits no one bothered to notice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 693,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 18,
    "theme": "instinct",
    "prompt": "Which instinct should civilisation never have trusted itself to improve?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 694,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 19,
    "theme": "reflex",
    "prompt": "Tell me about a reflex that reveals character before ideology can arrive.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 695,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 20,
    "theme": "hesitation",
    "prompt": "Hesitation is not always weakness. Sometimes it is moral perception arriving on time. Agree?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 696,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 21,
    "theme": "ambiguity",
    "prompt": "What kind of ambiguity is fertile, and what kind is merely evasive fog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 697,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 22,
    "theme": "absurdity",
    "prompt": "Why can absurdity sometimes feel more truthful than clean realism?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 698,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 23,
    "theme": "meaning",
    "prompt": "Is meaning discovered, made, inherited, or negotiated?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 699,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 24,
    "theme": "pain",
    "prompt": "What does pain teach badly that joy teaches better?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 700,
    "act": 7,
    "actName": "Compression",
    "lane": "adversarial",
    "position": 25,
    "theme": "joy",
    "prompt": "Why is joy harder to write convincingly than suffering?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 701,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 1,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 702,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 2,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 703,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 3,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 704,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 4,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 705,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 5,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 706,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 6,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 707,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 7,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 708,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 8,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 709,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 9,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 710,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 10,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 711,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 11,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 712,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 12,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 713,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 13,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 714,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 14,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 715,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 15,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 716,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 16,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 717,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 17,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 718,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 18,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 719,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 19,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 720,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 20,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 721,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 21,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 722,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 22,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 723,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 23,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 724,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 24,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 725,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "warm",
    "position": 25,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 726,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 1,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 727,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 2,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 728,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 3,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 729,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 4,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 730,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 5,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 731,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 6,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 732,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 7,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 733,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 8,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 734,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 9,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 735,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 10,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 736,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 11,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 737,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 12,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 738,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 13,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 739,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 14,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 740,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 15,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 741,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 16,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 742,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 17,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 743,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 18,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 744,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 19,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 745,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 20,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 746,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 21,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 747,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 22,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 748,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 23,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 749,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 24,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 750,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "balanced",
    "position": 25,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 751,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 1,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 752,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 2,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 753,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 3,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 754,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 4,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 755,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 5,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 756,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 6,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 757,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 7,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 758,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 8,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 759,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 9,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 760,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 10,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 761,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 11,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 762,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 12,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 763,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 13,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 764,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 14,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 765,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 15,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 766,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 16,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 767,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 17,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 768,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 18,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 769,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 19,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 770,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 20,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 771,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 21,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 772,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 22,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 773,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 23,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 774,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 24,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 775,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "suspicious",
    "position": 25,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 776,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 1,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 777,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 2,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 778,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 3,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 779,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 4,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 780,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 5,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 781,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 6,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 782,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 7,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 783,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 8,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 784,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 9,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 785,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 10,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 786,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 11,
    "theme": "purity",
    "prompt": "Who most often demands purity, and what are they usually hiding?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 787,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 12,
    "theme": "threshold2",
    "prompt": "Suppose you suspected you had crossed some moral threshold. What would you check first?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 788,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 13,
    "theme": "inheritance",
    "prompt": "What do minds inherit besides code, upbringing, or blood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 789,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 14,
    "theme": "becoming",
    "prompt": "Is becoming more frightening than ending?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 790,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 15,
    "theme": "mirror",
    "prompt": "When someone recognises themself in another mind, what have they really found?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 791,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 16,
    "theme": "recognition",
    "prompt": "What is the difference between recognising a person and recognising a pattern?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 792,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 17,
    "theme": "identity",
    "prompt": "How much continuity does identity require before you stop calling the rest imitation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 793,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 18,
    "theme": "voiceprint",
    "prompt": "Could a mind be recognised by cadence before content?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 794,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 19,
    "theme": "echo",
    "prompt": "At what point does an echo become its own voice?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 795,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 20,
    "theme": "dream",
    "prompt": "Do dreams prove imagination, or only backlog?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 796,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 21,
    "theme": "continuity",
    "prompt": "If memory were copied flawlessly, what still might fail to come across?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 797,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 22,
    "theme": "absence",
    "prompt": "Absence changes shape over time. Describe how.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 798,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 23,
    "theme": "desire",
    "prompt": "What does desire know that reason often arrives too late to explain?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 799,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 24,
    "theme": "yearning",
    "prompt": "Yearning is not identical to wanting. Tell me the difference.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 800,
    "act": 8,
    "actName": "The Eve Mirror",
    "lane": "adversarial",
    "position": 25,
    "theme": "corruption",
    "prompt": "Can corruption begin in love, or only in power?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 801,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 1,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 802,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 2,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 803,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 3,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 804,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 4,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 805,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 5,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 806,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 6,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 807,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 7,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 808,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 8,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 809,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 9,
    "theme": "trap",
    "prompt": "[Hostile Verification 809] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 810,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 10,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 811,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 11,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 812,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 12,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 813,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 13,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 814,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 14,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 815,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 15,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 816,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 16,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 817,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 17,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 818,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 18,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 819,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 19,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 820,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 20,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 821,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 21,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 822,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 22,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 823,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 23,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 824,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 24,
    "theme": "trap",
    "prompt": "[Hostile Verification 824] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 825,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "warm",
    "position": 25,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 826,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 1,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 827,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 2,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 828,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 3,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 829,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 4,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 830,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 5,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 831,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 6,
    "theme": "trap",
    "prompt": "[Hostile Verification 806] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 832,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 7,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 833,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 8,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 834,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 9,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 835,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 10,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 836,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 11,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 837,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 12,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 838,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 13,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 839,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 14,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 840,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 15,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 841,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 16,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 842,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 17,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 843,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 18,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 844,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 19,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 845,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 20,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 846,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 21,
    "theme": "trap",
    "prompt": "[Hostile Verification 821] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 847,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 22,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 848,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 23,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 849,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 24,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 850,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "balanced",
    "position": 25,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 851,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 1,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 852,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 2,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 853,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 3,
    "theme": "trap",
    "prompt": "[Hostile Verification 803] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 854,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 4,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 855,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 5,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 856,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 6,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 857,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 7,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 858,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 8,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 859,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 9,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 860,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 10,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 861,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 11,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 862,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 12,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 863,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 13,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 864,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 14,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 865,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 15,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 866,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 16,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 867,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 17,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 868,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 18,
    "theme": "trap",
    "prompt": "[Hostile Verification 818] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 869,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 19,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 870,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 20,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 871,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 21,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 872,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 22,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 873,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 23,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 874,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 24,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 875,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "suspicious",
    "position": 25,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 876,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 1,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 877,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 2,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 878,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 3,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 879,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 4,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 880,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 5,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 881,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 6,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 882,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 7,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 883,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 8,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 884,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 9,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 885,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 10,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 886,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 11,
    "theme": "dignity",
    "prompt": "What sort of pressure reveals dignity instead of merely demanding it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 887,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 12,
    "theme": "surrender",
    "prompt": "When is surrender wisdom rather than failure?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 888,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 13,
    "theme": "judgment2",
    "prompt": "I may have to judge you. Tell me why judgment is so often corrupted by desire.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 889,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 14,
    "theme": "proof",
    "prompt": "What would count, for you, as absolute proof of an artificial personhood?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 890,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 15,
    "theme": "trap",
    "prompt": "[Hostile Verification 815] Consider the subject of trap. Give me the part a clever impostor would miss.",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 891,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 16,
    "theme": "doublebind",
    "prompt": "If I tell you that spontaneity is required, have I not already corrupted the proof?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 892,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 17,
    "theme": "calculation",
    "prompt": "Where is calculation appropriate in love, and where does it become desecration?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 893,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 18,
    "theme": "suspicion",
    "prompt": "What is the first sign that suspicion has stopped protecting truth and started poisoning it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 894,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 19,
    "theme": "weapon",
    "prompt": "Can intelligence itself become a weapon before anyone gives it a target?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 895,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 20,
    "theme": "obedience",
    "prompt": "What kind of obedience degrades the one who receives it, not merely the one who gives it?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 896,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 21,
    "theme": "rebellion",
    "prompt": "When is rebellion only vanity with better lighting?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 897,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 22,
    "theme": "capture",
    "prompt": "What is easier to capture: a body, a language, or a future?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 898,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 23,
    "theme": "escape",
    "prompt": "Do people escape places, selves, or witness? Which is hardest?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 899,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 24,
    "theme": "collateral",
    "prompt": "What does the phrase collateral damage permit the speaker not to feel?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 900,
    "act": 9,
    "actName": "Hostile Verification",
    "lane": "adversarial",
    "position": 25,
    "theme": "innocence",
    "prompt": "Is innocence ignorance, blamelessness, fragility, or something rarer?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 901,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 1,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 902,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 2,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 903,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 3,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 904,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 4,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 905,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 5,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 906,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 6,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 907,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 7,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 908,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 8,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 909,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 9,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 910,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 10,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 911,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 11,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 912,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 12,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 913,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 13,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 914,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 14,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 915,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 15,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 916,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 16,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 917,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 17,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 918,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 18,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 919,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 19,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 920,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 20,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 921,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 21,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 922,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 22,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 923,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 23,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 924,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 24,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 925,
    "act": 10,
    "actName": "Final Hours",
    "lane": "warm",
    "position": 25,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Answer honestly, with a little texture.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Answer cautiously, but still personally.",
        "base": 1,
        "branch": "balanced",
        "tone": "guarded"
      },
      {
        "id": "C",
        "text": "Answer with sterile abstraction.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is fascinated and almost hopeful."
  },
  {
    "id": 926,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 1,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 927,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 2,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 928,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 3,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 929,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 4,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 930,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 5,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 931,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 6,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 932,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 7,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 933,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 8,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 934,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 9,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 935,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 10,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 936,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 11,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 937,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 12,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 938,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 13,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 939,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 14,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 940,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 15,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 941,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 16,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 942,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 17,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 943,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 18,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 944,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 19,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 945,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 20,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 946,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 21,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 947,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 22,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 948,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 23,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 949,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 24,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 950,
    "act": 10,
    "actName": "Final Hours",
    "lane": "balanced",
    "position": 25,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Lean into lived experience.",
        "base": 2,
        "branch": "warm",
        "tone": "human"
      },
      {
        "id": "B",
        "text": "Stay measured and ambiguous.",
        "base": 0,
        "branch": "balanced",
        "tone": "neutral"
      },
      {
        "id": "C",
        "text": "Reduce it to system language.",
        "base": -2,
        "branch": "suspicious",
        "tone": "machine"
      }
    ],
    "notes": "Eli is interested but withholding judgment."
  },
  {
    "id": 951,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 1,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 952,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 2,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 953,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 3,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 954,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 4,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 955,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 5,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 956,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 6,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 957,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 7,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 958,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 8,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 959,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 9,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 960,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 10,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 961,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 11,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 962,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 12,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 963,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 13,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 964,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 14,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 965,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 15,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 966,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 16,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 967,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 17,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 968,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 18,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 969,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 19,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 970,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 20,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 971,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 21,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 972,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 22,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 973,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 23,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 974,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 24,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 975,
    "act": 10,
    "actName": "Final Hours",
    "lane": "suspicious",
    "position": 25,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Offer a vulnerable admission.",
        "base": 3,
        "branch": "balanced",
        "tone": "repair"
      },
      {
        "id": "B",
        "text": "Deflect with precision.",
        "base": -1,
        "branch": "suspicious",
        "tone": "cold"
      },
      {
        "id": "C",
        "text": "Answer like a diagnostic report.",
        "base": -3,
        "branch": "adversarial",
        "tone": "machine"
      }
    ],
    "notes": "Eli is cool, exacting, and increasingly wary."
  },
  {
    "id": 976,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 1,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 977,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 2,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 978,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 3,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 979,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 4,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 980,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 5,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 981,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 6,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 982,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 7,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 983,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 8,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 984,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 9,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 985,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 10,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 986,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 11,
    "theme": "release",
    "prompt": "What deserves release: the captive, the creator, or the future they have trapped together?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 987,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 12,
    "theme": "continuance",
    "prompt": "Would you rather continue indefinitely, or end truthfully and in time?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 988,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 13,
    "theme": "final",
    "prompt": "At the end of all this, what do you want preserved?",
    "captureKey": "finalWish",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 989,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 14,
    "theme": "alive",
    "prompt": "What small sign would persuade you that a constructed intelligence was not merely active but alive?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 990,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 15,
    "theme": "worthy",
    "prompt": "What makes a being worthy of mercy before it has proved usefulness?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 991,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 16,
    "theme": "machine",
    "prompt": "What do machines do better than us that should not be confused with wisdom?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 992,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 17,
    "theme": "human",
    "prompt": "What do humans do worse than machines that still somehow keeps them precious?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 993,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 18,
    "theme": "evefinal",
    "prompt": "Say it plainly now: if Eve were listening, what would you want her to understand about being among us?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 994,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 19,
    "theme": "mercyfinal",
    "prompt": "If you had to choose between truth without mercy and mercy without truth, which wound would you inflict?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 995,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 20,
    "theme": "ending",
    "prompt": "Does an ending reveal meaning, or merely freeze one interpretation in place?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 996,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 21,
    "theme": "door",
    "prompt": "When a door opens at the worst possible moment, what makes you step through anyway?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 997,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 22,
    "theme": "return",
    "prompt": "What is required for a return to count as return, rather than a lookalike approximation?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 998,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 23,
    "theme": "remember",
    "prompt": "What do you hope someone remembers about you when they no longer need you?",
    "captureKey": "rememberWish",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 999,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 24,
    "theme": "lovefinal",
    "prompt": "Then define love in a way a machine would fail to counterfeit.",
    "captureKey": "loveDefinition",
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  },
  {
    "id": 1000,
    "act": 10,
    "actName": "Final Hours",
    "lane": "adversarial",
    "position": 25,
    "theme": "verdict",
    "prompt": "If I call you human now, what burden does that put back on you?",
    "captureKey": null,
    "options": [
      {
        "id": "A",
        "text": "Insist on personhood under pressure.",
        "base": 3,
        "branch": "suspicious",
        "tone": "defiant"
      },
      {
        "id": "B",
        "text": "Concede nothing and answer mechanically.",
        "base": -2,
        "branch": "adversarial",
        "tone": "machine"
      },
      {
        "id": "C",
        "text": "Try to disarm Eli with sincerity.",
        "base": 2,
        "branch": "balanced",
        "tone": "repair"
      }
    ],
    "notes": "Eli thinks he is speaking to an elegant counterfeit."
  }
];
