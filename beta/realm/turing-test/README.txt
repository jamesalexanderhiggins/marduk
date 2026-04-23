THE TURING TEST

Files:
- index.html
- styles.css
- game.js
- engine.js
- questions.js

Embed example:
<iframe src="/path/to/index.html?target=120" width="100%" height="950" style="border:0"></iframe>

Parameters:
- ?target=120        Positive target. Game ends once score reaches or exceeds it.
- ?target=-250       Negative target. Game ends once score reaches or drops below it.
- ?redirect=https://example.com/next.html
- ?seed=abc123       Optional deterministic seed for a repeatable route.

Notes:
- Without target, the game continues forever.
- It uses 1000 unique question nodes before repeating.
- The conversation is structured in 10 escalating acts, each with 4 lanes:
  warm / balanced / suspicious / adversarial.
- Answers branch Eli's route by adjusting lane bias and score.
- Negative score ranges shift the screen green -> cyan -> purple and then chaotic near -1000.
