
(function(){
  const app = document.getElementById("app");
  const transcriptEl = document.getElementById("transcript");
  const promptEl = document.getElementById("prompt");
  const answersEl = document.getElementById("answers");
  const actLabel = document.getElementById("actLabel");
  const positionLabel = document.getElementById("positionLabel");
  const targetLabel = document.getElementById("targetLabel");
  const scoreLabel = document.getElementById("scoreLabel");
  const footerLine = document.getElementById("footerLine");

  const params = new URLSearchParams(window.location.search);
  const rawTarget = params.get("target");
  const target = rawTarget === null ? null : Number(rawTarget);
  const redirect = params.get("redirect");
  targetLabel.textContent = target === null ? "TARGET: ENDLESS" : `TARGET: ${target}`;

  const byId = new Map(QUESTIONS.map(q => [q.id, q]));
  const state = {
    currentId: 0,
    score: 0,
    steps: 0,
    cycle: 0,
    visited: new Set(),
    history: [],
    answerHistory: [],
    memory: {}
  };

  function shuffle(array){
    const arr = array.slice();
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function laneFromScore(score){
    if(score <= -450) return "adversarial";
    if(score <= -120) return "suspicious";
    if(score >= 180) return "warm";
    return "balanced";
  }

  function addEntry(role, text){
    const div = document.createElement("div");
    div.className = `entry ${role}`;
    div.textContent = text;
    transcriptEl.prepend(div);

    while(transcriptEl.children.length > 18){
      transcriptEl.removeChild(transcriptEl.lastChild);
    }
    updateTranscriptStyles();
  }

  function updateTranscriptStyles(){
    Array.from(transcriptEl.children).forEach((node, i) => {
      const opacity = Math.max(0, 1 - i * 0.11);
      const blur = Math.min(7, i * 0.5);
      const shift = Math.min(12, i * 1.1);
      node.style.opacity = opacity.toFixed(2);
      node.style.filter = `blur(${blur}px)`;
      node.style.transform = `translateY(-${shift}px)`;
    });
  }

  function updateTheme(){
    app.classList.remove("theme-green","theme-blue","theme-purple","theme-abyss","glitch-light","glitch-hard");
    const s = state.score;
    if(s <= -700){
      app.classList.add("theme-abyss","glitch-hard");
    }else if(s <= -260){
      app.classList.add("theme-purple","glitch-light");
    }else if(s <= -90){
      app.classList.add("theme-blue");
    }else{
      app.classList.add("theme-green");
    }
  }

  function scoreMultiplier(question){
    return 1 + ((question.act - 1) * 0.25) + ((question.position - 1) / 25) * 0.35;
  }

  function updateStatus(question){
    actLabel.textContent = `ACT ${question.act} // ${question.actName}`;
    positionLabel.textContent = `POSITION ${state.steps + 1}/1000 // CYCLE ${state.cycle + 1}`;
    scoreLabel.textContent = `HUMAN FACTOR ${state.score}`;
    updateTheme();
  }

  function memoryPrefix(question){
    const snippets = [];
    const lastUser = state.answerHistory[state.answerHistory.length - 1];
    const firstUser = state.answerHistory[0];
    if(state.steps > 4 && state.steps % 7 === 0 && lastUser){
      snippets.push(`A moment ago you said: "${lastUser.text}"`);
    }
    if(state.steps > 12 && state.steps % 11 === 0 && firstUser){
      snippets.push(`Early on you leaned toward: "${firstUser.text}"`);
    }
    if(question.act >= 8){
      snippets.push("I am not asking for performance now. I am asking whether there is anyone in there I might be mistaking for Eve.");
    } else if(question.act >= 6){
      snippets.push("Do not answer for elegance alone. I am listening for continuity under pressure.");
    }
    return snippets.length ? snippets.join("\n\n") + "\n\n" : "";
  }

  function renderQuestion(){
    const question = byId.get(state.currentId);
    if(!question) return;

    updateStatus(question);
    promptEl.textContent = memoryPrefix(question) + question.prompt;
    answersEl.innerHTML = "";

    const options = shuffle(question.answers);
    options.forEach((answer) => {
      const btn = document.createElement("button");
      btn.className = "answer";
      btn.textContent = answer.text;
      btn.addEventListener("click", () => chooseAnswer(question, answer));
      answersEl.appendChild(btn);
    });

    footerLine.textContent = "Eli is waiting.";
  }

  function findNextUnvisited(startId){
    for(let offset = 0; offset < QUESTIONS.length; offset++){
      const candidate = (startId + offset) % QUESTIONS.length;
      if(!state.visited.has(candidate)) return candidate;
    }
    return null;
  }

  function selectNextId(question, branch){
    const preferred = question.next[branch];
    if(!state.visited.has(preferred)) return preferred;

    const fallback = findNextUnvisited(preferred);
    if(fallback !== null) return fallback;

    state.visited.clear();
    state.cycle += 1;
    return preferred;
  }

  function endingLine(){
    if(state.score >= 0){
      return "I still do not have certainty. But I have enough to open the next door.";
    }
    return "You crossed the threshold by subtraction. That is an answer too, though not the one I hoped for.";
  }

  function maybeFinish(){
    if(target === null) return false;
    if(target >= 0 && state.score >= target) return true;
    if(target < 0 && state.score <= target) return true;
    return false;
  }

  function chooseAnswer(question, answer){
    const mult = scoreMultiplier(question);
    const delta = Math.round(answer.delta * mult);
    state.score += delta;
    state.steps += 1;
    state.visited.add(question.id);
    state.answerHistory.push({id: question.id, text: answer.text, branch: answer.branch});

    addEntry("user", "> " + answer.text);

    let eliLine = question.eli[answer.branch];
    if(question.act >= 8 && answer.branch === "human"){
      eliLine += " And yet wanting that answer to be true is not the same thing as proving it.";
    }
    if(question.act >= 7 && answer.branch === "machine"){
      eliLine += " If Eve sounded like that, I would lock the room and start again.";
    }

    addEntry("eli", "ELI: " + eliLine);
    footerLine.textContent = `Δ ${delta >= 0 ? "+" : ""}${delta} // lane pressure: ${laneFromScore(state.score)}`;

    if(maybeFinish()){
      addEntry("system", endingLine());
      if(redirect){
        footerLine.textContent = "Threshold attained. Redirecting...";
        setTimeout(() => { window.location.href = redirect; }, 1800);
      } else {
        footerLine.textContent = "Threshold attained.";
      }
      updateStatus(question);
      updateTheme();
      promptEl.textContent = "Threshold attained.\n\n" + endingLine();
      answersEl.innerHTML = "";
      return;
    }

    state.currentId = selectNextId(question, answer.branch);
    renderQuestion();
  }

  addEntry("system", "ELI: I am the examiner. You are the intelligence under test. Begin.");
  renderQuestion();
})();
