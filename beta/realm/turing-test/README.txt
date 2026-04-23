THE TURING TEST

Build 2026.04.23.03

Files:
- index.html
- styles.css
- questions.js
- game.js

Parameters:
- ?target=120            positive threshold
- ?target=-120           negative threshold
- ?redirect=https://...  optional redirect when threshold crossed

Examples:
index.html?target=120
index.html?target=-120
index.html?target=150&redirect=https://example.com/next.html

Notes:
- Overshooting the threshold still wins.
- Without ?target, the game runs in endless mode.
- Answer positions shuffle every question.
