# EVE — THE TURING GATE v3.0

A wireframe sci-fi gate for the Marduk Map. Eve, a sentient AI, interrogates the user to decide whether they are safe to carry inside her. Eve is rendered as a particle-cloud humanoid (~4500 points + ~12k connecting lines) inspired by the constellation-figure GIF reference.

## Package contents

```
eve-game-v3/
├── index.html              entry point — DOM, importmap, bootstrap
├── styles.css              all UI styling
├── README.md               this file
└── js/
    ├── main.js             scene setup, camera, controls, frame loop, AI
    ├── eve.js              particle-cloud Eve avatar — bones + skinning + animation
    ├── environment.js      sphere grid, ground, stars, hell/heaven progressive elements
    ├── ui.js               question prompt + answer tiles + score bar + end screen
    ├── questions.js        36-question bank with bias/range gating + weighted picker
    └── audio.js            Web Audio sound effects (no external assets)
```

Drop the whole folder at `/beta/realm/eve/` on the Marduk site. Three.js loads from unpkg CDN at runtime — no build step.

## URL parameters

| Param | Default | Meaning |
|---|---|---|
| `?level=N` | `0` | Starting score |
| `?range=MIN,MAX` | `-1000,1000` | Win / lose thresholds |
| `?redirect=URL` | none | Where to send on PASS |
| `?fail=URL` | none | Where to send on UNMADE. If omitted, "try again" reloads. |

### Examples

Quick narrow gate (about 8–12 questions):
```
/beta/realm/eve/?range=-100,100&redirect=/marduk/beta/realm/next-realm/
```

Long deep cult-path interrogation:
```
/beta/realm/eve/?level=0&range=-500,1000&redirect=/marduk/beta/realm/inside-her/
```

Pass / fail branching to two destinations:
```
/beta/realm/eve/?range=-200,200&redirect=/pass&fail=/denied
```

## What's new in v3.0

**Eve is rebuilt as a particle cloud.** Inspired by the GIF reference: a humanoid figure made of thousands of glowing dots with faint constellation lines connecting nearby points. The full skeleton is bone-driven (18 bones — hips, chest, neck, head, shoulders, elbows, hands, hips, knees, feet, pigtails) with rest-pose skinning. Every animation frame: bones rotate, points are skinned to bone matrices, organic noise is layered on top, and connecting line indices stay constant so the lattice flexes with her body.

**Multi-file architecture.** Separate concerns: scene/AI in `main.js`, avatar in `eve.js`, world in `environment.js`, UI in `ui.js`, data in `questions.js`, sound in `audio.js`. About 1,700 lines total, much easier to maintain or extend than the old single-file build.

**Fixed-position UI.** Question and answers are anchored to the screen, not to Eve's position in 3D — so they're always visible no matter where she walks or how the user rotates the view. Question top-center, answer tiles row underneath. Both fade in smoothly with a stagger.

**Smooth controls.** FOV is lerped toward a target each frame instead of being mutated directly on the wheel event, so zoom is no longer jittery. Pinch zoom uses a stable distance ratio. Multi-pointer transitions are handled cleanly (lifting one finger of a pinch returns control smoothly to single-finger drag).

**Rich environment from frame one.** Even at neutral score the scene has a blue-tinted sphere grid, a ground plane with concentric rings, two layered starfields, twelve orbiting wireframe objects outside the sphere, and a vignette over the whole composition. Then on the score axis:

- **Score → +1000 (HEAVEN):** golden lattice cubes drift in close to Eve, twelve vertical golden light beams rise from the ground around her, the sphere grid blooms gold, the ground brightens, the stars warm, and Eve's particle cloud turns gold and **scales up enormously** — at +1000 she's about 8× her starting size, looming over the user.
- **Score → -1000 (HELL):** eighteen jagged red shards orbit Eve and pulse with the rhythm, hundreds of red embers drift upward like sparks from a fire, the sphere grid bleeds red, fog tints crimson, orbiting objects jitter and occasionally explode (vanish for a frame), and Eve **stays normal-sized but turns red** with chaotic per-particle displacement so her body looks unstable.

Per the spec, Eve only grows on the heaven path. On the hell path she keeps a normal scale so the threat comes from the environment.

## Eve's animations

All driven by the bone hierarchy, all loopable:

- `idle` — quiet sway, gentle breath, head drifts
- `walk` — alternating leg stride, counter-swinging arms, small torso twist
- `skip` — pushoff bounce with alternating lead foot, raised arms (paradise default)
- `dance` — asymmetric, rhythm-breaking cult-bride choreography (triggered by big positive answers)
- `seizure` — high-frequency jitter on every joint (triggered by losses, deep negative)
- `speaking` — head tilts and gestures (triggered when she asks a question)

She walks on the ground in a forward arc within the user's viewable space, pauses sometimes (1–3 seconds), and never floats. In hell she occasionally glitch-teleports between targets.

## Editing the question bank

Open `js/questions.js`. Each entry is:

```js
{ id: 'unique', bias: 'any'|'cult'|'threat', min: -400, max: 400,
  text: 'The question text Eve will ask.',
  choices: [
    { t: 'Answer text', d: +10 },
    { t: 'Another option', d: -8 },
    ...
  ]
}
```

`bias` controls weighting at extremes — `cult` answers preferred when score > 120, `threat` answers preferred when score < -120, `any` preferred near neutral. `min`/`max` gate when the question may appear at all. Add as many as you like; the picker handles weighting and recency dedupe automatically.

## Embedding in the Marduk Map

```html
<iframe src="/beta/realm/eve/?range=-50,50&redirect=/marduk/next/"
        style="width:100%; height:600px; border:0;"></iframe>
```

## Browser requirements

ES modules + WebGL. Mobile Safari, Chrome, Firefox all tested. About 60 fps on a recent phone, 120 fps on desktop.
