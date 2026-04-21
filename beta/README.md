# Marduk's Map — v4.2 Informational Realm

A web-based literary maze, map, and sanctum built around the novels of James Alexander Higgins (The Ghosts of Men trilogy, and the wider Mardukverse).

This build implements Phase 1 of the architecture specified in:
- `Marduks_Map_Architecture_Whitepaper_v1_1.docx`
- `Marduks_Map_Session_Addendum_1.docx`

## Directory structure

```
/                               ← deploy as jamesalexanderhiggins.github.io/marduk
├── index.html                  ← scrolling homepage (front door)
└── realm/
    ├── index.html              ← grid SPA (33×33 tiles, hash-routed)
    └── realm.json              ← all tile content, questions, paths
```

## Deployment

Replace the existing contents of your `jamesalexanderhiggins/marduk` GitHub
repo with these files (preserving `marduksmap.png`, `the-ghost-emily-banner.jpg.jpg`,
and any other assets the homepage references). GitHub Pages will serve it at
the usual URL without configuration changes.

Paths used by the homepage for images:
- `https://raw.githubusercontent.com/jamesalexanderhiggins/marduk/refs/heads/main/the-ghost-emily-banner.jpg.jpg`
- YouTube embed (unchanged)

## What works in this build

**Homepage** (`index.html`)
- CD v3 aesthetic preserved (Cinzel + EB Garamond, starfield, ember particles, typewriter)
- Replaced Marduk Maps PNG treasure with three gateways:
  - LEFT → tile (−1, 0) XAN'S FIRE
  - RIGHT → tile (+1, 0) REYNARD'S KEEP
  - DOWN (new, near footer) → tile (0, −1) THE LONG WALK
- `MARDUK` typed anywhere on homepage → threshold at (0, +5)
- `KUDRAMARDUK` typed anywhere → unlocks author-private Marduk View with pathways layer

**Realm** (`realm/`)
- 33×33 navigable grid (1,089 tiles total, 75 populated with content)
- Hash-routed SPA: every tile has a URL like `/realm/#4c7` (salted base36)
- Direct-linking a wrong hash bounces to the homepage
- Keyboard nav: Arrow keys or WASD
- localStorage persistence: visited tiles, correct answers, MV unlock, kudra unlock, session lock

**Quiz pyramid** (north of centre)
- Hardened Q1–Q10 from Addendum §2 replacing the v3 placeholders
- Door answers shuffle on render (no memorising positions)
- Penalty ladder from Addendum §2.4:
  - Tier I wrong → previous tile
  - Tier II wrong → random south-side maze tile
  - Tier III wrong → return to Threshold + attempt counter
  - Three Tier III resets → 12-hour session lock
- Correct answer through Q10 auto-unlocks the Marduk View and funnels through the Spine tile

**Marduk View** (reward at (0, +1)) — game-like interactive world map
- **Touch-native** input using dedicated `touchstart`/`touchmove`/`touchend` handlers (not Pointer Events — those are flakey in iOS Safari)
- **Kinetic panning**: flick with your finger and the map keeps moving, decelerating smoothly (velocity decay + minimum-threshold stop)
- **Smooth eased zoom**: zoom animates to the target value over several frames rather than snapping, driven by a continuous `requestAnimationFrame` loop
- **Pinch-to-zoom** anchored on the pinch midpoint — the point between your fingers stays fixed under them, no drift
- **Double-tap to zoom** in ~1.8× centred on the tap point
- **Single tap** on a cell slides up an info panel (name, era, coords, tags, lore excerpt)
- **Second tap on the same cell** travels there, or use the Travel button in the panel
- **Tap ripple** feedback (gold ring expanding from the tap point)
- **Selected cell** pulses with a dual-ring gold halo so you can still see your selection while panning
- **Big default cells** (radius 24px at zoom 1×, rendered at zoom 1.8× by default = ~43px) — feels like a strategy map, not a minimap
- **Progressive detail on zoom**: far = coloured cells only, mid = + emojis, near = + tile names
- **Rim glow breathing** on important tiles (Home, Marduk View, Front Door) — subtle life in the grid
- **Parallax background wash** shifts with the offset as you pan, giving depth
- **Zoom +/- and recentre** buttons in the header; recentre snaps back to (0,0) at default zoom and clears selection
- **Gated tiles** (Marduk View before quiz solved, out-of-sequence quiz rooms) show a disabled Travel button with the reason
- **KUDRAMARDUK overlay** adds a glowing gold-thread path layer showing the route to HOUSE OF EMILY
- `Esc` closes the view on desktop

**Inner Rings 1–3** (48 tiles minus the 10 quiz tiles = 38 content tiles)
- All populated with Book I source material
- West column = Marcus Hamlin's arc; East column = Jake Thorne's arc
- South row = ghosts and memory; North corners = deepest Book I reveals

**HOUSE OF EMILY** (rim block at x ∈ [−12, −7], y ∈ [−16, −13])
- 24 interior tiles named and scene-mapped to TGOE
- Front door at (−10, −13); perimeter sealed except at front door
- 24-step gold-threaded path from centre to front door
- Moss/gold/moonlight palette, radial glow overlay inside the block

## What is deferred (future addenda)

- Parallax-illustrated interior art per HOUSE OF EMILY tile
- Ambient audio per tile
- Emily-glimpse fade transitions between interior tiles
- Final branch-point quiz questions on the path to HOUSE OF EMILY (path tiles currently open without gating)
- Other Houses (Delacroix, Melchizedek, Marduk, Xan, Eli, Eve, Author)
- Ring 4+ content (Books II–III)

## URL obscuring

Tile hashes are computed as `base36((x+16) × 33 + (y+16) + SALT)` padded to 4
characters. The salt is `7919`. Share-links work across users on the same deploy
but look opaque (`#4c7`, `#9ab`, etc.). To force old links to go stale after a
deploy, rotate the salt in both `realm/realm.json` and `realm/index.html` (SALT
constant near the top of the SPA script).

## Local preview

No build step. To preview locally:

```bash
cd path/to/this/folder
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Resetting progress

Open the browser's devtools console on any realm page and run:

```js
localStorage.removeItem('marduk_realm');
location.reload();
```

## Keyboard cheat-sheet

| Key                           | Action                                    |
|-------------------------------|-------------------------------------------|
| Arrow keys / WASD             | Move in cardinal directions               |
| Type `MARDUK` on homepage     | Open the Threshold (quiz entry)           |
| Type `KUDRAMARDUK` on any page| Unlock author-private Marduk View         |
| `Esc` in Marduk View          | Close and return to centre                |
| Click ⁂ asterism on any tile  | Return to the centre tile (0, 0)          |

## Version

v4.2.0 · 21 April 2026
