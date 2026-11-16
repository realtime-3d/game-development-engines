# Practical Benchmark: Same 2D Platformer Prototype Across 5 Engines

Marketing feature checklists rarely show what day-to-day development actually feels like. To compare developer ergonomics objectively, we define a **reproducible 2D platformer micro-benchmark** across five representative engines: **Godot**, **Unity**, **GameMaker**, **GDevelop**, and **Phaser**.

- **Last Verified:** 2026-11-16

## Benchmark Specification (Identical Scope)

Every implementation builds the exact same minimal playable slice:

1. **Player Character:** 2D sprite with horizontal movement, gravity, jump, coyote time, and ground collision.
2. **Level Geometry:** Tilemap with solid ground, one-way platforms, and camera follow.
3. **Gameplay Loop:** Collectible coins (score counter UI), hazard spike (respawn), and goal flag (win state).
4. **Target Exports:** Desktop (Windows/macOS/Linux) and Web (HTML5).

## Comparison Summary

| Metric | Godot 4.7.x | Unity 6 | GameMaker | GDevelop 5 | Phaser 3/4 |
| --- | --- | --- | --- | --- | --- |
| **Install / Setup Size** | ~100 MB (no account) | ~5–10+ GB (Unity Hub + Modules) | ~500 MB | ~200 MB (or 0 MB in browser) | `npm install phaser` (~1.5 MB) |
| **Cold Editor Launch** | ~2–4 seconds | ~15–40 seconds | ~4–8 seconds | ~2–5 seconds | Instant (VS Code + Vite) |
| **Built-in Platformer Physics** | `CharacterBody2D` (`move_and_slide`) | `Rigidbody2D` + custom controller | Custom collision / `place_meeting` | Built-in **Platformer Behavior** | Arcade Physics (`setCollideWorldBounds`) |
| **Web Export Footprint** | ~15–30 MB (Wasm) | ~15–35 MB (WebGL/Wasm) | ~3–6 MB (JS/HTML5) | ~2–5 MB (JS/HTML5) | **< 1.5 MB** (JS/HTML5) |
| **Main Friction Point** | Web C# / SharedArrayBuffer caveats | Heavy project creation & domain reloads | Free tier lacks commercial export | Event sheets get verbose at scale | No built-in visual level editor |

## Key Observations

- **Fastest to first playable prototype (no code):** **GDevelop**: attaching the built-in *Platformer* behavior to a sprite takes under 2 minutes.
- **Cleanest 2D code + editor balance:** **Godot**: `CharacterBody2D` and `TileMapLayer` work natively in pixel coordinates with minimal boilerplate.
- **Smallest & fastest Web build:** **Phaser**: ideal when instant browser loading is critical.
- **Best if scaling to complex 3D/VR/consoles later:** **Unity**: heavier upfront setup, but large third-party SDK and console ecosystem.
