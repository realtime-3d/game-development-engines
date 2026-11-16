# Game Development Engines: Compare the Best Game Engines

Compare game engines for 2D, 3D, mobile, PC, web and consoles. Find out which engines are free, open source, beginner-friendly, or suitable for professional game development.

> **Quick Answer:** Game development engines provide the tools and systems used to create video games. Popular options include **Unity**, **Unreal Engine**, **Godot**, **GameMaker**, **GDevelop**, and **Phaser**. The best choice depends on your game (2D vs 3D), target platforms, programming experience, and budget.

## Quick Navigation

- [Compare all game engines](#compare-all-game-engines)
- [Find the best engine for your game](tools/engine-finder/index.html) (Interactive Web Finder & [CLI](tools/engine-finder/finder.py))
- [Best engines for beginners](categories/beginners.md) | [No-code engines](categories/no-code.md)
- [2D game engines](categories/2d-game-engines.md) | [3D game engines](categories/3d-game-engines.md)
- [Free game engines](categories/free-game-engines.md) | [Open-source engines](categories/open-source-game-engines.md)
- [Unity vs Unreal vs Godot](comparisons/unity-vs-unreal-engine.md)
- [Game engine pricing and royalties](categories/pricing-and-royalties.md)

---

## Compare All Game Engines

*All entries below are verified against official documentation and license pages as of **2026-11-16**. Machine-readable dataset: [`data/engines.json`](data/engines.json).*

| Engine | 2D | 3D | Languages | Visual Scripting | Open Source | Pricing / Royalties | Target Platforms |
| --- | :---: | :---: | --- | :---: | :---: | --- | --- |
| **[Unity](engines/unity.md)** | ✓ | ✓ | C# | ✓ | No | Free <$200k/yr; Pro $2,310/seat/yr; 0% royalty | PC, Mobile, Web, Consoles* |
| **[Unreal Engine](engines/unreal-engine.md)** | ✓ | ✓ | C++, Blueprints | ✓ (Blueprints) | Source-available | Free; 5% royalty >$1M lifetime (0% on EGS) | PC, Mobile, Consoles* |
| **[Godot](engines/godot.md)** | ✓ | ✓ | GDScript, C#, C++ | Plugin (Orchestrator) | **✓ (MIT)** | **$0, 0% royalty** | PC, Mobile, Web, Consoles** |
| **[GameMaker](engines/gamemaker.md)** | ✓ | Limited | GML, GML Visual | ✓ (GML Visual) | No | Free (non-comm); $99.99 once; $79.99/mo consoles | PC, Mobile, Web, Consoles* |
| **[GDevelop](engines/gdevelop.md)** | ✓ | ✓ (Light) | Visual Events, JS | ✓ (Event Sheets) | **✓ (MIT)** | **$0** local exports; optional cloud plans | PC, Mobile, Web |
| **[Phaser](engines/phaser.md)** | ✓ | No | JavaScript, TypeScript | Optional paid editor | **✓ (MIT)** | **$0, 0% royalty** | Web, PC/Mobile (wrapped) |
| **[Construct 3](engines/construct-3.md)** | ✓ | Limited | Event Sheets, JS, TS | ✓ (Event Sheets) | No | Free (25 events); ~$15.99/mo or ~$119/yr | Web, PC, Mobile, Xbox |
| **[Defold](engines/defold.md)** | ✓ | ✓ | Lua, C/C++ | No | Source-available | **$0 forever, 0% royalty** | PC, Mobile, Web, Consoles* |
| **[RPG Maker MZ](categories/rpg-and-visual-novels.md)** | ✓ | No | Event Commands, JS | ✓ | No | $69.99–$79.99 once; 0% royalty | PC, Web, Mobile (wrapped) |
| **[Ren'Py](engines/renpy.md)** | ✓ | No | Ren'Py Script, Python | Script-based | **✓ (MIT)** | **$0, 0% royalty** | PC, Mobile, Web |
| **LÖVE (Love2D)** | ✓ | No | Lua | No | **✓ (zlib)** | **$0, 0% royalty** | PC, Mobile, Web |
| **[Bevy](engines/bevy.md)** | ✓ | ✓ | Rust | No | **✓ (MIT/Apache 2.0)** | **$0, 0% royalty** | PC, Web, Mobile |
| **Cocos Creator** | ✓ | ✓ | TypeScript, JS, C++ | No | **✓ (Open core)** | **$0, 0% royalty** | PC, Mobile, Web |
| **MonoGame** | ✓ | ✓ | C# | No | **✓ (Ms-PL)** | **$0, 0% royalty** | PC, Mobile, Consoles* |
| **Three.js** | ✓ | ✓ | JavaScript, TypeScript | No | **✓ (MIT)** | **$0, 0% royalty** | Web, PC/Mobile (wrapped) |
| **Babylon.js** | ✓ | ✓ | TypeScript, JS | Material/GUI nodes | **✓ (Apache 2.0)** | **$0, 0% royalty** | Web, PC/Mobile (wrapped) |
| **PlayCanvas** | ✓ | ✓ | JavaScript, TypeScript | No | **✓ (MIT runtime)** | Free public; $15/mo private cloud | Web, Mobile |
| **PixiJS** | ✓ | No | TypeScript, JS | No | **✓ (MIT)** | **$0, 0% royalty** | Web, PC/Mobile (wrapped) |
| **CRYENGINE** | No | ✓ | C++, C#, Schematyc | ✓ | Source-available | Free; 5% royalty >$5k/yr | Windows, Linux, Consoles* |
| **O3DE** | No | ✓ | C++, Lua, Script Canvas | ✓ | **✓ (Apache 2.0/MIT)** | **$0, 0% royalty** | Windows, Linux, macOS, Mobile |
| **Stride** | ✓ | ✓ | C# | No | **✓ (MIT)** | **$0, 0% royalty** | Windows, Linux, macOS, Mobile |
| **Solar2D** | ✓ | No | Lua | No | **✓ (MIT)** | **$0, 0% royalty** | Mobile, PC, Web |
| **libGDX** | ✓ | ✓ | Java, Kotlin | No | **✓ (Apache 2.0)** | **$0, 0% royalty** | PC, Mobile, Web |
| **HaxeFlixel** | ✓ | No | Haxe | No | **✓ (MIT)** | **$0, 0% royalty** | PC, Web, Mobile |
| **PICO-8** | ✓ | No | Lua | No | No | $14.99 once; 0% royalty | PC, Web |

*\*Console support (PlayStation, Xbox, Nintendo Switch) requires formal developer approval from the platform holder and may require paid engine tiers.*  
*\*\*Godot console exports require third-party porting middleware (such as W4 Games) due to MIT licensing vs. console NDAs.*

---

## Which Engine Should You Choose?

- **Best for complete beginners (no coding):** [GDevelop](engines/gdevelop.md) (free/MIT) or [Construct 3](engines/construct-3.md) (browser-based).
- **Best for 2D indie & pixel-art games:** [Godot](engines/godot.md) (free/MIT) or [GameMaker](engines/gamemaker.md) ($99.99 once).
- **Best for photorealistic 3D & AAA PC/console games:** [Unreal Engine](engines/unreal-engine.md).
- **Best for cross-platform mobile, XR, and commercial 3D/2D teams:** [Unity](engines/unity.md).
- **Best for browser / HTML5 games:** [Phaser](engines/phaser.md) (2D) or **Three.js / PlayCanvas / Babylon.js** (3D).
- **Best for visual novels:** [Ren'Py](engines/renpy.md).
- **Best for Rust developers:** [Bevy](engines/bevy.md).

---

## Detailed Guides & Resources

### Engine Cards (Verified Specs, Pricing & Sources)
- [Unity](engines/unity.md) | [Unreal Engine](engines/unreal-engine.md) | [Godot](engines/godot.md) | [GameMaker](engines/gamemaker.md) | [GDevelop](engines/gdevelop.md)
- [Phaser](engines/phaser.md) | [Construct 3](engines/construct-3.md) | [Defold](engines/defold.md) | [Bevy](engines/bevy.md) | [Ren'Py](engines/renpy.md)

### Head-to-Head Comparisons
- [Unity vs Unreal Engine](comparisons/unity-vs-unreal-engine.md)
- [Unity vs Godot](comparisons/unity-vs-godot.md)
- [Unreal Engine vs Godot](comparisons/unreal-engine-vs-godot.md)
- [Godot vs GameMaker](comparisons/godot-vs-gamemaker.md)
- [GDevelop vs GameMaker](comparisons/gdevelop-vs-gamemaker.md)

### Guides by Intent, Platform & Genre
- **Fundamentals & Architecture:** [What Is a Game Engine?](categories/what-is-a-game-engine.md) | [Programming Languages (C#, C++, GDScript, Lua)](categories/programming-languages.md) | [Build Your Own Game Engine](categories/build-your-own-game-engine.md)
- **Skill Level:** [Beginners](categories/beginners.md) | [No-Code & Visual Scripting](categories/no-code.md)
- **Dimensions:** [2D Game Engines](categories/2d-game-engines.md) | [3D Game Engines](categories/3d-game-engines.md)
- **Licensing & Cost:** [Free Game Engines](categories/free-game-engines.md) | [Open-Source Game Engines](categories/open-source-game-engines.md) | [Pricing & Royalties](categories/pricing-and-royalties.md)
- **Platforms & Networking:** [Mobile (iOS & Android)](categories/mobile-game-engines.md) | [Web & HTML5](categories/web-html5-game-engines.md) | [PC & Consoles](categories/console-and-pc.md) | [Multiplayer & Game Servers](categories/multiplayer-game-engines.md)
- **Genres:** [RPGs, Visual Novels, Pixel Art & Platformers](categories/rpg-and-visual-novels.md)

### Practical Benchmark & Interactive Finder
- **[2D Platformer Micro-Benchmark](benchmarks/2d-platformer-prototype.md)**: Same 2D platformer prototype compared across Godot, Unity, GameMaker, GDevelop, and Phaser.
- **[Interactive Engine Finder](tools/engine-finder/index.html)**: Filter all 25 engines in the browser or run the Python CLI:
  ```bash
  python3 tools/engine-finder/finder.py --dim 2d --platform Web --free --open-source
  ```

---

## Contributing & License

Contributions with official source links are welcome, see [CONTRIBUTING.md](CONTRIBUTING.md).  
This repository is licensed under the [MIT License](LICENSE).
