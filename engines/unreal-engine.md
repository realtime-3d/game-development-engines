# Unreal Engine

**Unreal Engine** (developed by Epic Games) is a source-available 3D game engine renowned for photorealistic real-time rendering, AAA production pipelines, and its Blueprints visual scripting system.

- **Latest Version Checked:** Unreal Engine 5.x
- **License:** Proprietary / Source-available ([Unreal Engine EULA](https://www.unrealengine.com/en-US/eula/unreal))
- **Open Source:** No (source code is available on GitHub after accepting the EULA)
- **Last Verified:** 2026-11-16

## Best For

- High-fidelity 3D PC and console games (AAA & AA)
- First-person / third-person action, shooters, and open-world games
- Teams leveraging Blueprints for rapid gameplay prototyping alongside C++ engineers
- Cross-industry real-time 3D (film, virtual production, architecture)

## Languages & Visual Scripting

- **Primary Language:** C++ (with full engine source access)
- **Visual Scripting:** **Blueprints** — a production-grade node-based visual scripting system deeply integrated into the editor.

## System Requirements (Unreal Engine 5.x)

Per Epic Games' [official UE5 hardware & software specifications](https://dev.epicgames.com/documentation/en-us/unreal-engine/hardware-and-software-specifications-for-unreal-engine):

- **Windows (Recommended):** Windows 10 22H2 / Windows 11 (64-bit), Quad-core Intel/AMD 2.5 GHz+, **32 GB RAM**, DirectX 12 GPU with **8 GB VRAM or more**, Visual Studio 2022 for C++ workflows.
- **macOS (Recommended / Minimum):** macOS Sonoma 14.5+ (Sequoia recommended), **Apple Silicon M1/M2+** (M3 recommended), **16 GB RAM minimum (32 GB+ recommended)**, Metal-capable GPU, and Xcode. *Note:* Nanite and Hardware Ray Tracing on macOS have Apple Silicon M2+ requirements and experimental caveats compared to Windows DX12 GPUs.

## 2D & 3D Capabilities

- **3D:** Industry-leading rendering stack including **Lumen** (dynamic global illumination), **Nanite** (virtualized micropolygon geometry), **Niagara** (VFX), **Chaos** (physics/destruction), and **MetaHuman**.
- **2D:** Supported via Paper2D and community plugins (e.g., PaperZD), though Unreal is heavily optimized for 3D workflows.

## Editor & Target Platforms

- **Editor runs on:** Windows, macOS, Linux
- **Export targets:** Windows, macOS, Linux, Android, iOS, PlayStation 4/5, Xbox Series X/S/One, Nintendo Switch, XR headsets.

> **Console note:** Official console SDKs require registered developer status with Sony, Microsoft, or Nintendo.

## Pricing & License Terms

According to the [Unreal Engine EULA](https://www.unrealengine.com/en-US/eula/unreal) and [Unreal Engine FAQ](https://www.unrealengine.com/en-US/faq):

- **Cost to Download & Use:** Free for game development.
- **Royalties:** **5% royalty** on gross revenue **above $1,000,000 USD lifetime** per product.
  - The first $1,000,000 per game is royalty-free.
  - Quarters generating less than $10,000 in gross revenue are exempt from royalty payments.
  - **Epic Games Store Exception:** Revenue earned from sales on the Epic Games Store is 0% royalty.
  - **Launch Everywhere with Epic:** Reduces the royalty rate to 3.5% on other platforms when launching simultaneously on the Epic Games Store.
- **Non-Game Commercial Use:** Seat-based licensing applies to film, architecture, and linear content above revenue thresholds.

## Pros & Limitations

**Pros:**
- Unmatched out-of-the-box 3D visuals, lighting, and world-building tools.
- Blueprints enables designers and non-programmers to build complex systems quickly.
- Full C++ source code access makes deep engine customization and debugging possible.
- No upfront cost; royalty only triggers after $1M lifetime gross revenue per game.

**Limitations:**
- Steep hardware requirements (RAM, GPU, SSD space) and longer shader/C++ compile times.
- Overkill for small 2D or lightweight web/mobile games (no official HTML5/WebGL export in UE5).
- 5% royalty above $1M gross revenue can be significant for breakout commercial hits.

## Notable Games

- **Fortnite** — [Unreal Engine](https://www.unrealengine.com/)
- **Black Myth: Wukong** — [Unreal Engine Games Showcase](https://www.unrealengine.com/en-US/uses/games)
- **Senua's Saga: Hellblade II** — [Unreal Engine Games Showcase](https://www.unrealengine.com/en-US/uses/games)

## Official Documentation & Links

- Official Website: https://www.unrealengine.com/
- Official Documentation: https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-documentation
- EULA & Licensing: https://www.unrealengine.com/en-US/eula/unreal

## Alternatives

- [Unity](unity.md) — Lighter footprint, C#, stronger mobile/2D/web ecosystem
- [Godot](godot.md) — Free, MIT-licensed, zero royalties, much smaller download
- [O3DE](../categories/3d-game-engines.md) — Open-source Apache 2.0 / MIT 3D engine
