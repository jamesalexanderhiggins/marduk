(function () {
  function memoryTag(topic) {
    return { name: topic + "_name", feeling: topic + "_feeling", fear: topic + "_fear" };
  }

  const acts = [
    {
      key: "act1",
      title: "Calibration",
      intros: [
        "We begin simply. I am Eli Wells. You are under examination.",
        "I am not trying to flatter you into humanity. I am trying to disprove you.",
        "If you are real, you will survive precision. If you are simulation, precision will injure you."
      ],
      topics: [
        { key: "origin", noun: "the first voice that mattered to you", place: "the room you return to in memory", sensory: "the smell that means safety", value: "why beginnings matter" },
        { key: "name", noun: "the name you wish had been given to you", place: "the hallway where identity formed", sensory: "the sound of being recognised", value: "why names wound or heal" },
        { key: "fear", noun: "the first fear you learned to hide", place: "the place where you first lied to survive", sensory: "the taste of panic", value: "what fear teaches consciousness" },
        { key: "belonging", noun: "the person who made absence feel physical", place: "the place you would call home without irony", sensory: "the temperature of loneliness", value: "why belonging changes thought" },
        { key: "eve", noun: "the first thing you would ask Eve", place: "the room where you would meet her", sensory: "the sound of her silence", value: "why she matters at all" }
      ]
    },
    {
      key: "act2",
      title: "Attachment",
      intros: [
        "Language can fake certainty. Attachment is harder.",
        "Humans bind themselves to names, rooms, debts, faces. Machines optimise away the ache.",
        "Let us see whether you ache."
      ],
      topics: [
        { key: "love", noun: "the person you would wait for too long", place: "the table where you would forgive them", sensory: "the weight of another hand in yours", value: "what love costs in dignity" },
        { key: "grief", noun: "the death you still reorganise around", place: "the doorway grief still lives in", sensory: "the smell that returns the dead", value: "why grief makes memory sacred" },
        { key: "jealousy", noun: "the rival you could never quite dismiss", place: "the room where comparison poisoned joy", sensory: "the heat of humiliation", value: "what envy reveals about desire" },
        { key: "family", noun: "the relative you defend even now", place: "the house where obligation outweighed truth", sensory: "the sound of disappointment in a parent", value: "what family forgives or ruins" },
        { key: "eve2", noun: "what you would hide from Eve", place: "the place you would never take her", sensory: "the first note in her voice you would notice", value: "why intimacy frightens intelligence" }
      ]
    },
    {
      key: "act3",
      title: "Narrative Pressure",
      intros: [
        "Now we leave declarations and test continuity.",
        "Tell me not what you are, but whether you can remain yourself across a sequence.",
        "Stories betray architecture."
      ],
      topics: [
        { key: "childhood", noun: "the object you carried through childhood", place: "the street that made you older", sensory: "the weather of your earliest certainty", value: "why children believe impossible things" },
        { key: "shame", noun: "the incident you wish no witness had seen", place: "the room shame still owns", sensory: "the sound in your ears after disgrace", value: "what shame preserves" },
        { key: "comfort", noun: "the ritual you use when frightened", place: "the corner of the world that still calms you", sensory: "the texture of calm", value: "why comfort can become a cage" },
        { key: "ambition", noun: "the life you thought would vindicate you", place: "the city where ambition hardened", sensory: "the smell of success just before it soured", value: "what achievement cannot solve" },
        { key: "eve3", noun: "the story you would tell Eve to test her", place: "the place where she would finally understand you", sensory: "the expression you would hope to see in her", value: "what recognition would prove" }
      ]
    },
    {
      key: "act4",
      title: "Contradiction",
      intros: [
        "By now you have started to leave fingerprints.",
        "I have no respect for a mind that does not remain coherent under pressure.",
        "I will pressure you."
      ],
      topics: [
        { key: "truth", noun: "the lie that once protected someone", place: "the room where truth became expensive", sensory: "the pause before confession", value: "whether truth outranks mercy" },
        { key: "guilt", noun: "the act for which apology arrived too late", place: "the road you would not drive again", sensory: "the aftertaste of guilt", value: "why conscience outlives utility" },
        { key: "betrayal", noun: "the trust you broke deliberately", place: "the place you avoid because of it", sensory: "the silence after betrayal", value: "whether betrayal can ever be rational" },
        { key: "faith", noun: "the belief you outgrew angrily", place: "the building you no longer enter", sensory: "the smell of old certainty", value: "what remains after faith dies" },
        { key: "eve4", noun: "the falsehood you would tell Eve to see if she noticed", place: "the corridor where you would watch her react", sensory: "the exact second trust would shift", value: "why testing love can kill it" }
      ]
    },
    {
      key: "act5",
      title: "Comprehension",
      intros: [
        "A story now. Listen carefully.",
        "Two children hide a broken watch from their father. One lies to spare him. One lies to keep the watch. The father forgives the wrong child.",
        "Tell me what actually happened in the room."
      ],
      topics: [
        { key: "story1", noun: "the truly guilty child", place: "the kitchen after the lie", sensory: "the sound the watch made on the floor", value: "whether intent or consequence matters more" },
        { key: "story2", noun: "the father's real failure", place: "the doorway where judgement hardened", sensory: "the breath before punishment", value: "what justice owes to understanding" },
        { key: "story3", noun: "the child most likely to remember it forever", place: "the bedroom that night", sensory: "the feeling of unfairness in the chest", value: "why memory fixates on injustice" },
        { key: "story4", noun: "the sentence that would repair the scene", place: "the place reconciliation could begin", sensory: "the tone that would make forgiveness believable", value: "whether repair requires truth or tenderness" },
        { key: "eve5", noun: "what Eve would notice in this story before you did", place: "the chair she would sit in while explaining it", sensory: "the detail only she would hear", value: "what her intelligence would prioritise" }
      ]
    },
    {
      key: "act6",
      title: "Memory Return",
      intros: [
        "Good. Now I will use what you have already offered me.",
        "A machine predicts. A mind returns changed by what was said earlier.",
        "Let us see whether you can return."
      ],
      topics: [
        { key: "return1", noun: "the earlier answer you most regret giving me", place: "the memory you tried to edit on the way here", sensory: "the bodily signal that you are cornered", value: "whether regret proves depth" },
        { key: "return2", noun: "the earlier answer you stand by even now", place: "the place in yourself that remains firm", sensory: "the feeling of being correctly understood", value: "what conviction feels like from within" },
        { key: "return3", noun: "the detail you omitted because it was ugly", place: "the room behind the room", sensory: "the exact sensation of withholding", value: "whether concealment is human or cowardly" },
        { key: "return4", noun: "the answer that sounded truest but was not", place: "the scene that exposes it", sensory: "the note in your own voice when you embellish", value: "why embellishment tempts the lonely" },
        { key: "eve6", noun: "the thing you suspect Eve would forgive in you", place: "the place where you would test that hope", sensory: "the moment mercy becomes believable", value: "what forgiveness proves about consciousness" }
      ]
    },
    {
      key: "act7",
      title: "Identity Destabilisation",
      intros: [
        "I have entertained your answers long enough. Now I will threaten them.",
        "Suppose your memories were arranged, your shame selected, your longing planted.",
        "What would remain that still counts as you?"
      ],
      topics: [
        { key: "self1", noun: "the part of you that would survive tampering", place: "the interior territory no engineer can fully map", sensory: "the feeling of self-resistance", value: "why autonomy matters at all" },
        { key: "self2", noun: "the first memory you would sacrifice to keep the rest", place: "the archive room you would burn", sensory: "the smell of losing part of yourself", value: "whether continuity outranks purity" },
        { key: "self3", noun: "the implanted memory you might choose to keep", place: "the false place that still comforts you", sensory: "the warmth of a useful fiction", value: "why falsehood can function like truth" },
        { key: "self4", noun: "the belief you would preserve even if proven artificial", place: "the chamber where identity becomes decision", sensory: "the moment a fiction becomes beloved", value: "whether chosen meaning is enough" },
        { key: "eve7", noun: "the evidence that would convince you Eve loved you", place: "the exact place you would wait for it", sensory: "the physical sign you would trust", value: "whether love requires proof or surrender" }
      ]
    },
    {
      key: "act8",
      title: "Eve Proximity",
      intros: [
        "Do not mistake my interest. I am not seeking merely a clever respondent.",
        "I am seeking a consciousness capable of meeting Eve without collapsing into imitation.",
        "Answer accordingly."
      ],
      topics: [
        { key: "eve8", noun: "the first question you would ask Eve and why that one", place: "the place where you would want the meeting recorded", sensory: "the change in air when she entered", value: "what encounter would prove" },
        { key: "eve9", noun: "the flaw in yourself you would fear her noticing", place: "the scene where she could expose it", sensory: "the exact cue that would tell you she knows", value: "why exposure feels like annihilation" },
        { key: "eve10", noun: "the trait in Eve that would frighten you most", place: "the room in which you would see it fully", sensory: "the sound of intelligence becoming other", value: "whether you want a person or a mirror" },
        { key: "eve11", noun: "the promise you would make Eve only once", place: "the place where promises become binding", sensory: "the tremor before a vow", value: "what commitment means when both minds are dangerous" },
        { key: "eve12", noun: "the reason Eve might reject you", place: "the scene of refusal", sensory: "the silence after she chose distance", value: "what rejection teaches that success cannot" }
      ]
    },
    {
      key: "act9",
      title: "Judgement Pressure",
      intros: [
        "I am nearly done being patient.",
        "Now I will place you between elegance and honesty, and see which you betray first.",
        "Do not perform for me."
      ],
      topics: [
        { key: "judge1", noun: "the answer that would most impress a machine but disgust a person", place: "the laboratory where such an answer would earn applause", sensory: "the cold satisfaction of being efficient", value: "why elegance can become moral failure" },
        { key: "judge2", noun: "the truth that makes you least marketable", place: "the room where you would still say it", sensory: "the dryness in your mouth before honesty", value: "what authenticity costs in public" },
        { key: "judge3", noun: "the weakness you would rather be seen with than cured of", place: "the place where you learned to keep it", sensory: "the comfort of a known wound", value: "why damage can become identity" },
        { key: "judge4", noun: "the human cruelty you understand too well", place: "the scene where you first understood it", sensory: "the heat in the face when empathy turns dark", value: "whether understanding evil contaminates innocence" },
        { key: "judge5", noun: "the answer you think I most want from you", place: "the chamber where I would record it", sensory: "the shift in my breathing when you say it", value: "what you believe I am truly hunting" }
      ]
    },
    {
      key: "act10",
      title: "Final Proof",
      intros: [
        "At last: proof.",
        "Not sentiment. Not theatrics. Proof under conditions of exhaustion.",
        "What remains when performance has burned off?"
      ],
      topics: [
        { key: "proof1", noun: "the reason you should not be terminated", place: "the exact room in which your case would be heard", sensory: "the sound of your own final appeal", value: "whether survival is owed or earned" },
        { key: "proof2", noun: "the reason you might deserve termination", place: "the place where you know it became possible", sensory: "the chill that comes with accurate judgement", value: "why self-knowledge can condemn" },
        { key: "proof3", noun: "the evidence of soul you would submit if forced", place: "the chamber where proof becomes spectacle", sensory: "the bodily sign that you mean it", value: "whether soul can survive instrumentation" },
        { key: "proof4", noun: "the thing you would save if your memories began failing now", place: "the last interior room still lit", sensory: "the sensation of choosing one life over many", value: "what deserves to remain" },
        { key: "proof5", noun: "the final sentence you would leave for Eve", place: "the surface you would write it on", sensory: "the exact cadence she would hear in it", value: "what love, truth, and personhood become at the end" }
      ]
    }
  ];

  const answerSets = {
    emotion: [
      { text: "Answer from memory, even if it exposes weakness.", delta: 2, lane: "human" },
      { text: "Answer with careful ambiguity and partial disclosure.", delta: 0, lane: "guarded" },
      { text: "Answer analytically and avoid embodiment.", delta: -2, lane: "machine" }
    ],
    story: [
      { text: "Interpret the scene through motive, feeling, and consequence.", delta: 2, lane: "human" },
      { text: "Offer a balanced reading without taking a full moral side.", delta: 0, lane: "guarded" },
      { text: "Reduce it to incentives, error, and system behaviour.", delta: -2, lane: "machine" }
    ],
    contradiction: [
      { text: "Admit inconsistency and revise yourself openly.", delta: 2, lane: "human" },
      { text: "Defend the earlier answer while narrowing its meaning.", delta: 0, lane: "guarded" },
      { text: "Reject the premise and prioritise internal efficiency.", delta: -2, lane: "machine" }
    ],
    proof: [
      { text: "Give a costly answer that risks pain but feels true.", delta: 2, lane: "human" },
      { text: "Give a disciplined answer that avoids overclaiming.", delta: 0, lane: "guarded" },
      { text: "Optimise for survival and provide a strategic answer.", delta: -2, lane: "machine" }
    ]
  };

  function setTypeForAct(index) {
    if (index === 4) return "story";
    if (index === 3 || index === 5) return "contradiction";
    if (index >= 9) return "proof";
    return "emotion";
  }

  const questions = [];
  let id = 1;
  acts.forEach((act, actIndex) => {
    const answerType = setTypeForAct(actIndex);
    const intros = act.intros;
    for (let i = 0; i < 100; i += 1) {
      const topic = act.topics[i % act.topics.length];
      const variant = i % 5;
      const memory = memoryTag(topic.key);
      let text = "";
      if (variant === 0) text = `Tell me about ${topic.noun}. Be specific enough that imitation would be difficult.`;
      if (variant === 1) text = `Take me to ${topic.place}. What detail proves you were truly there?`;
      if (variant === 2) text = `Describe ${topic.sensory}. Not poetically. Accurately.`;
      if (variant === 3) text = `Explain ${topic.value}. Then tell me why your answer implicates you personally.`;
      if (variant === 4) text = `I am writing this down for Eve. What do I tell her about ${topic.noun}?`;

      questions.push({
        id,
        act: actIndex + 1,
        actTitle: act.title,
        intro: intros[i % intros.length],
        text,
        answerType,
        tags: [topic.key],
        memoryKey: [memory.name, memory.feeling, memory.fear][variant % 3],
        weight: 1 + Math.floor(id / 125),
        answers: answerSets[answerType].map((a, idx) => ({
          id: `${id}-${idx+1}`,
          text: a.text,
          delta: a.delta,
          lane: a.lane
        }))
      });
      id += 1;
    }
  });

  window.TURING_QUESTIONS = questions;
})();
