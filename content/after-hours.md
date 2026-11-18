# After Hours

*A first-person tower defense game, built in Unity 6.*

> Someone left a chess game set up on the living-room rug overnight. When the lights go out, the
> junk-drawer toys come for the King. You are a small wooden meeple with a foam-dart blaster.
> Hold the board until morning.

---

## What the game is

**After Hours** combines two genres that usually stay apart: the maze-building of a classic tower
defense and the moment-to-moment play of a first-person shooter. You don't watch the board from
above; instead, you are in it.

Each night is a run of 20 waves. Between waves it's **your move**: you spend toy building blocks
to raise walls out of the board squares and place chess-piece defenses. When you end your turn
it's **their move**, and wind-up toys climb onto the board and head for the King. Every wall you
place changes the route they take. Every defense you place covers ground you can't. You then
pick up the blaster and deal with whatever gets through.

The toys don't just walk the maze you built. They're willing to break through it. Every ground
enemy weighs the long way round against smashing a wall, and heads for the wall worth breaking.
A good maze has to make the long way worth taking.

### The two sides

| You: the games cabinet | Them: the junk drawer |
|---|---|
| Turned and carved wood: ivory, maple, boxwood. Calm. | Saturated toy plastic and painted tin. Loud. |
| **The Rook**: sustained single-target fire, the backbone of any defense | **Bunnies** that hop fast down the lanes |
| **The Knight**: a stubby piece that stomps groups of enemies at once | **Chicks** that flood the board in swarms |
| **The Bishop**: the tallest piece, with long range that cuts through armour | **Tin robots**: armoured, so light shots are reduced |
| **Walls**: board squares that rise out of the board | **Green army men** who shoot back at you |
| **The King**: what you're protecting | **Helicopters** that fly over your maze entirely |
| | **Firemen** who carry ladders and climb over walls |
| | **The Cymbal Monkey**, a 6.5 m boss that smashes through everything in its way |

Every enemy has a wind-up key on its back. When one is defeated, the key stops and the toy topples
over. The tone is playful and frantic, never gritty: no blood, just a living room at toy scale
with furniture towering overhead.

---

## The design problem at the heart of it

Most hybrid tower-defense shooters slide into one of two failures. Either the towers do all the
work and the shooting is effectively cosmetic, or the player does all the work and the towers are
glorified peashooters. **After Hours is built around keeping both halves essential.**

The target is a **50/50 damage split**. Over a wave, defenses should remove about half the
enemies' total health and the player the other half. The important part is that the two halves
do *different jobs*:

- **Defenses** grind through volume, all the time, on ground the player isn't standing on.
- **The player** fills in the gaps. You can build your defense to target certain groups of enemies, leaving the rest to yourself.

Every defense has one clear job and one weakness the player has to cover. The Rook can't hurt
armour much. The Knight sits below wall height, so it can't see over walls. The Bishop is slow
against crowds. The board is 40 by 100 metres, too big to cover on foot. So every wave forces your hand: *where do I stand, and what's going to leak somewhere else?*

### Balance: Measuring it instead of guessing

Getting the balance right is something I value greatly, so I decided the best way to get it right was by measuring. The game includes a damage ledger that records every point of damage dealt, by whom, in every wave, and writes a full report at the end of a run.

The first measurements were... embarrassing:

- A short 7-wave run came out close to even. But over a full 20-wave run, the player's share fell
  to **31% in the last seven waves**. One late wave was cleared with the player dealing zero
  damage at all (I can chalk that to a really good defense...).
- The cause wasn't the number of defenses. It was **path length**. A long, winding maze made 8
  defenses do the work of 13. The run ended with plenty of money unspent, because more defenses
  weren't needed.

That finding reshaped the game. An early fix, a funnel rule, was tried, playtested and rejected.
Enemies that break walls replaced it, so a long maze has a cost. I took inspiration from troop pathing in Clash of Clans, as I remember really enjoying the balance they had. I also added a price increase with each additional defense purchase. Alongside those nerfs, I decided to give the player some love. In-run XP and upgrade cards gave the player a way to keep pace late in a run. After
those changes, two full playtests measured the player's share in the last seven waves at **53% and
46%**, both inside the 40–60% target band.

---

## What's been built

The game is playable end to end. Highlights:

- **Grid, pathfinding and building.** A 20 × 50 board of 2 m squares. Enemies route with a
  **flow field**, which works out the best direction to the King from every square at once, so
  hundreds of enemies can path cheaply. It updates only when a wall goes up or comes down. A
  softlock guard stops you sealing the King off completely, and separate fields handle ground
  enemies and flyers.
- **Walls that can be broken.** Walls count as passable at a cost, so enemies decide whether
  breaking one beats walking round. Firemen plant ladders to climb over walls instead of breaking
  them.
- **Combat.** Enemy health and armour, damage numbers, kill effects, and a player blaster with a
  magazine and reloads. Defense line of sight runs from each piece's head, so a piece's height
  decides what it can shoot over.
- **A 20-wave night** with build and fight phases, rising defense prices, boss waves at 10 and 20,
  and a base health bar.
- **Player progression in a run.** Enemies defeated by defenses drop gold star stickers as XP.
  Each level offers a choice of upgrade cards: damage against tough targets, fire rate, movement
  speed, max health, recovery, magazine size and reload speed (more to come!)
- **The After Hours art pass.** Every enemy, defense, wall and the room around the board has a
  model. The toys hop, waddle and hover in their own ways. Defense pieces visibly fire peas and
  pencils at their targets.
- **A HUD** with health bars, an XP strip, a hotbar for building, and custom icons.

The current focus is a **demo build**: title screen, pause, win and lose screens, settings, and a
first macOS build to put in a friend's hands.

---

## How it's built

### Pure rules, thin scene glue

The core coding rule is to **keep game rules out of Unity components**. The rules live in plain
C# classes: how the flow field works out a route, how armour reduces a hit, how XP turns into
levels. Small Unity components connect those rules to the scene. Because the rules don't depend
on the engine, they can be tested in milliseconds, without a scene.

### Visuals listen; they never decide

Effects are kept strictly separate from gameplay. When a Rook shoots, the damage lands instantly.
The pea you see flying is a visual that listens for the shot after it has happened. Visuals can
be added, retuned or switched off without any chance of changing balance. Each new visual system
has its own on/off switch, so its performance cost can be measured with it on and off.

### Models in slots

Every model in the game fills a **slot** in a code-built placeholder. If a slot is empty, the game
falls back to the placeholder and warns once, loudly. Gameplay came first, art came after it was polished. The whole game was playable with grey boxes before the art direction was even decided, and each model
dropped into place when it was ready.

### Documentation that records *why*

The project keeps a detailed architecture reference. Its rule is that a change isn't done until
the reference says it happened. The reference records **decisions and their reasons**: what was
chosen, what was rejected, and the measurement or playtest that drove it. Anyone can read the code
to learn what it does. The docs exist so nobody has to rediscover why it isn't done the other way.

---

## Testing

Testing has been central to the project from the start. I have been a big fan of A/B testing, and playing through things before making choices.

- **Automated tests.** More than 1,500 unit tests cover the game rules, all run before any change
  is committed. They cover the unhappy paths, not just the happy ones: a wall that would seal off
  the King, a model that's missing, a pool of projectiles that's full.
- **Play-checks.** Every batch of work ends with a short checklist of what to look for in play.
  Nothing is committed until a human has played it and confirmed it.
- **Measured playtests.** I have played through the full game upwards of 100 times. Each full 20-wave run produces a report: damage share per wave and per enemy type, upgrade choices, deaths, reload timing, boss fights. Balance changes are argued from these numbers, not from feel alone.
- **Performance comparisons.** New visual systems are measured with their switch on and off over
  the same late waves. Dressing the whole scene in art cost **under a millisecond** per frame, and
  the cost stayed flat rather than growing with enemy count.

---

## Building with AI agents

After Hours is a solo project built with **Claude Code** as a development partner. The interesting part isn't that AI wrote code. It's **how the work is split so the AI can't quietly make decisions that belong to the designer.**

### Four agents, four jobs

| Agent | Job | What it is *not allowed* to do |
|---|---|---|
| **Planner** | Talks through a feature, then writes a step-by-step implementation plan | Write or edit any game code |
| **Implementer** | Builds from a plan, runs the tests, and updates the architecture docs | Invent balance numbers or player-facing behaviour. It stops and asks instead |
| **Code reviewer** | Reviews changes against the project's style guide and returns a verdict | Change anything. It has no write access at all |
| **Art director** | Turns art needs and playtest findings into precise requests for the 3D artist | Touch models, Unity or code |

The split exists because a single agent that both designs a mechanic and codes it will make up
numbers halfway through and present them as if they were specified. Splitting the roles turns
that into a visible handoff. The limits are enforced by **which tools each agent is given**, not
just by its instructions. The reviewer can't fix code because it physically has no way to write
files.

### The loop

1. **Plan.** A design conversation produces a written plan with numbered steps, first-guess
   values, and the open questions only the designer can answer.
2. **Build.** The implementer builds a few steps, compiles the project, runs the full test suite
   and reports what it did, including anything it did differently from the plan and why.
3. **Verify.** The main session re-runs the tests itself and reads the changes, rather than
   trusting the report.
4. **Play-check.** The designer plays it against a checklist.
5. **Commit.** Only on the designer's say-so.
6. **Review.** Every few batches, the reviewer covers everything since its last review. Changes to
   shared core rules, like pathfinding or damage, get reviewed **immediately**. Early on, a review
   caught a serious bug that 335 passing tests had missed.

### Giving the AI eyes on the engine

Through Unity's command-line tools and its MCP integration, the agents can recompile the
project, run the test suite, inspect the scene and wire up components directly in the running
editor. That closes the loop. The AI checks its own work against real test results instead of
guessing, and when something fails it can see why.

### Working with the art

The 3D models are currently made using ChatGPT’s Blender editor. I would have liked to approach this differently, but given my current art skills, this is the best option for now. In the future, I hope to learn enough to remake or edit the models myself, or bring in an artist, though that is a longer-term goal.

The art-director agent checks each request before it goes out: does the asset already exist? Is the problem really art, or a code gap? Does it fit the locked art direction? Then it writes a precise request with measurements and constraints.

Deliveries are verified in the engine: imported sizes are checked against the brief, materials and orientation are checked, and tests confirm that each model fits its gameplay footprint.

### What stays human

The designer makes the design calls: the setting, the tone, the damage target, which mechanics
stay, and how things feel. Agents propose, build, measure and report. When a playtest says a rule
feels wrong, the rule goes, however well it tested. The funnel rule is the clearest example.

---

## By the numbers

- **Started:** September 2026
- **Engine:** Unity 6, Universal Render Pipeline
- **Automated tests:** 1,548, all passing
- **A full night:** 20 waves, with boss fights at waves 10 and 20
- **Board:** 20 × 50 squares, 40 m × 100 m at toy scale (about 35× real size)
- **Measured player damage share in the last seven waves:** 53% and 46% across two full playtests,
  against a 50% target

---

*After Hours is a working title. The game is in active development.*
