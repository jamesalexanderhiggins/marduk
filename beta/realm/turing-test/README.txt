THE TURING TEST
Build 2026.04.23.0558

Files:
- index.html
- styles.css
- questions.js
- game.js

Parameters:
- ?target=120
  Ends the game when the score crosses that threshold.
- ?target=-250
  Ends the game when the score crosses that negative threshold.
- ?redirect=https://example.com/next.html
  Redirects after threshold attainment.

Notes:
- No question repeats until the game has exhausted all 1000 question nodes.
- Answer positions are shuffled every question.
- Transcript shows the exact answer selected by the player.
- If no target is supplied, the game continues indefinitely.
