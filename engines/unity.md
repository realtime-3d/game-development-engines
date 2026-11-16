# Unity

**Unity** is a cross-platform 2D and 3D game engine developed by Unity Technologies. It powers a large share of indie, mobile, VR/XR, and AA PC/console games.

- **Latest Version Checked:** Unity 6
- **License:** Proprietary ([Unity Software License](https://unity.com/legal/terms-of-service))
- **Open Source:** No
- **Last Verified:** 2026-11-16

## Best For

- 2D and 3D indie games
- Mobile games (iOS and Android)
- VR / AR / Spatial computing (Meta Quest, Apple Vision Pro, SteamVR)
- Mid-sized AA PC and console releases

## Languages & Visual Scripting

- **Primary Language:** **C#** (.NET / IL2CPP). Legacy UnityScript and Boo were retired; C# is Unity's sole text programming language.
- **Visual Scripting:** Built-in **Unity Visual Scripting** (formerly Bolt), included with the editor.

## System Requirements & Unity on macOS (Apple Silicon)

Per [Unity 6 official system requirements](https://docs.unity3d.com/Manual/system-requirements.html):

- **Windows:** Windows 10 (21H1+ X64) or Windows 11 (X64/Arm64), DX10/11/12 or Vulkan GPU, minimum **8 GB RAM** (16–32 GB recommended for URP/HDRP projects).
- **macOS & Apple Silicon:** macOS Big Sur (11) or newer on **Apple Silicon (M1 or above)** or Intel X64 with Metal-capable GPUs. Apple visionOS builds require a native Apple Silicon macOS Unity Editor and Xcode 15+.

## 2D & 3D Capabilities

- **2D:** Dedicated 2D physics (Box2D), Tilemap editor, 2D skeletal animation, 2D lights/URP 2D renderer.
- **3D:** Universal Render Pipeline (URP) for mobile/cross-platform and High Definition Render Pipeline (HDRP) for high-end PC/console visuals, plus mature terrain, animation (Mecanim), and particle (VFX Graph) systems.

## Editor & Target Platforms

- **Editor runs on:** Windows, macOS, Linux
- **Export targets:** Windows, macOS, Linux, Android, iOS, Web (WebGL / WebGPU), PlayStation, Xbox, Nintendo Switch, Apple Vision Pro, Meta Quest.

> **Console note:** Exporting to PlayStation, Xbox, Nintendo Switch, or Apple Vision Pro requires an active **Unity Pro** or **Unity Enterprise** subscription and formal developer approval from the respective platform holder.

## Pricing & License Terms

Unity canceled the 2023 per-install Runtime Fee and uses a seat-based subscription model ([Unity Pricing](https://unity.com/pricing)):

| Plan | Revenue / Funding Threshold | Price | Key Notes |
| --- | --- | --- | --- |
| **Unity Personal** | Up to **$200,000** trailing 12-month revenue/funding | **Free** | "Made with Unity" splash screen is optional starting in Unity 6 |
| **Unity Pro** | Over **$200,000** trailing 12-month revenue/funding | **$2,310/seat/year** (or $210/mo) | Required for console & Vision Pro publishing |
| **Unity Enterprise** | Over **$25M** annual revenue | Custom | Extended LTS, read-only source access, cloud build automation |

- **Royalties:** 0% (no revenue share).

## Pros & Limitations

**Pros:**
- Large ecosystem of Asset Store packages, tutorials, and third-party SDKs (ads, analytics, multiplayer).
- Strong mobile, 2D, 3D, and XR support in a single toolset.
- C# combines fast iteration with native performance via IL2CPP.

**Limitations:**
- Proprietary license; source code is not open.
- Mandatory upgrade to paid Pro seats once revenue/funding crosses $200,000/year.
- Heavier editor footprint and slower iteration startup than lightweight 2D engines like Godot or Love2D.

## Notable Games

- **Hollow Knight**: [Unity Showcase](https://unity.com/madewith/hollow-knight)
- **Cuphead**: [Unity Made With](https://unity.com/madewith)
- **Cities: Skylines**: [Unity Made With](https://unity.com/madewith)

## Official Documentation & Links

- Official Website: https://unity.com/
- Official Documentation: https://docs.unity3d.com/
- Pricing & Plans: https://unity.com/pricing

## Alternatives

- [Godot](godot.md): MIT-licensed open-source 2D/3D engine with zero fees
- [Unreal Engine](unreal-engine.md): Better suited for photorealistic AAA 3D
- [Stride](stride.md): Open-source C# 3D/2D alternative
