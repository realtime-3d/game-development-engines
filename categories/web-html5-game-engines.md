# Web & HTML5 Game Engines (WebGL / WebGPU / WebAssembly)

Browser games demand fast initial load times, low memory usage, and reliable performance across desktop and mobile browsers.

- **Last Verified:** 2026-11-16

## Best Web & HTML5 Game Engines

| Engine | 2D / 3D | Tech Stack | Typical Initial Load | Pricing |
| --- | --- | --- | --- | --- |
| **[Phaser](../engines/phaser.md)** | 2D | JS / TS (WebGL & Canvas) | Very fast (JS bundle) | Free (MIT) |
| **PixiJS** | 2D | JS / TS (WebGL & WebGPU) | Very fast (JS bundle) | Free (MIT) |
| **Three.js** | 3D | JS / TS (WebGL & WebGPU) | Fast (JS bundle) | Free (MIT) |
| **Babylon.js** | 3D | TS / JS (WebGL & WebGPU) | Fast-Medium | Free (Apache 2.0) |
| **PlayCanvas** | 3D | JS / TS (WebGL & WebGPU) | Very fast (instant-load 3D) | Free public / $15/mo private |
| **[Defold](../engines/defold.md)** | 2D & 3D | Lua → WebAssembly | Very small Wasm (~1-3 MB) | Free forever |
| **[GDevelop](../engines/gdevelop.md)** | 2D & light 3D | Event Sheets / JS | Fast (HTML5/JS) | Free (MIT) |
| **[Construct 3](../engines/construct-3.md)** | 2D | Event Sheets / JS | Fast (HTML5/JS) | Free (25 events) / ~$15.99/mo |
| **[Godot](../engines/godot.md)** | 2D & 3D | GDScript → WebAssembly | Larger Wasm (~15-30 MB) | Free (MIT) |
| **[Unity](../engines/unity.md)** | 2D & 3D | C# → WebGL/Wasm | Larger Wasm | Free <$200k/yr |

> **Tip:** For portals like Poki, CrazyGames, or Discord Activities where every megabyte of initial download impacts conversion, native JS/TS engines (**Phaser**, **PlayCanvas**, **Three.js**, **Construct 3**, **GDevelop**) or ultra-compact Wasm engines (**Defold**) load significantly faster than full-runtime C++/C# Wasm exports.
