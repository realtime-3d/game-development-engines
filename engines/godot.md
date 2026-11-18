# Godot

**Godot** is a free, open-source 2D and 3D game engine under the MIT License. It uses a node-and-scene architecture, ships in a ~100 MB editor, and charges zero royalties.

- **Latest Version Checked:** Godot 4.7.2 (with 3.6.x LTS branch)
- **License:** [MIT License](https://godotengine.org/license/)
- **Open Source:** Yes
- **Last Verified:** 2026-11-16

## Best For

- 2D indie games, pixel art, platformers, and roguelikes
- Lightweight to mid-scale 3D games
- Solo developers, game jams, and teams who want full ownership without license lock-in
- Desktop, mobile, and WebAssembly games

## Languages & Visual Scripting

- **GDScript:** Python-like, tightly integrated scripting language designed specifically for Godot.
- **C# (.NET):** Officially supported in the Godot .NET build for desktop/mobile (Web C# support varies by version).
- **C++ / Other Languages:** Via **GDExtension** (C, C++, Rust, Swift, etc. without recompiling the engine).
- **Visual Scripting:** Built-in VisualScript was removed in Godot 4.0; third-party plugins such as **Orchestrator** restore node-based visual scripting.

## 2D & 3D Capabilities

- **2D:** Dedicated pixel-coordinate 2D engine (not 2D faked inside 3D), with TileMapLayer, 2D lights/shadows, skeletal animation, and crisp pixel-art scaling.
- **3D:** Three rendering backends in Godot 4, **Forward+** (desktop Vulkan/D3D12/Metal), **Mobile** (mobile-optimized), and **Compatibility** (OpenGL ES 3 / WebGL 2).

## Editor & Target Platforms

- **Editor runs on:** Windows, macOS, Linux, Android, Web
- **Export targets:** Windows, macOS, Linux, Android, iOS, Web (HTML5/WebAssembly)

> **Console note:** Because Godot is MIT-licensed and console SDKs are governed by strict NDAs, official console export templates are not shipped in the open-source repository. Console porting is available via third-party middleware and porting partners (such as W4 Games or Lone Wolf Technology).

## Pricing & License Terms

Per the official [Godot License page](https://godotengine.org/license/):

- **Price:** $0, 100% free forever.
- **Royalties:** 0%.
- **License:** MIT License. You own your games completely, can modify the engine source code, and never owe fees or revenue shares.

## Pros & Limitations

**Pros:**
- Completely free, open-source (MIT), no subscriptions, no royalties, no account required.
- Fast startup, tiny download size, and clean scene/node composition model.
- Dedicated pixel-coordinate 2D workflow among general-purpose 2D/3D engines.

**Limitations:**
- Console publishing requires third-party porting middleware or custom NDA builds.
- 3D ecosystem, terrain tools, and AAA asset store are smaller than Unreal Engine or Unity.
- Web exports using C# or multi-threaded SharedArrayBuffer have browser compatibility caveats compared to GDScript single-threaded Web exports.

## Notable Games

- **Brotato**: [Godot Showcase](https://godotengine.org/showcase/)
- **Cassette Beasts**: [Godot Showcase](https://godotengine.org/showcase/)
- **Dome Keeper**: [Godot Showcase](https://godotengine.org/showcase/)

## Official Documentation & Links

- Official Website: https://godotengine.org/
- Official Documentation: https://docs.godotengine.org/
- Official License: https://godotengine.org/license/

## Alternatives

- [Unity](unity.md): Larger 3D/mobile ecosystem and built-in console export (paid Pro tier)
- [GameMaker](gamemaker.md): Dedicated 2D workflow with GML Visual
- [Defold](defold.md): Lightweight Lua engine with built-in console support
