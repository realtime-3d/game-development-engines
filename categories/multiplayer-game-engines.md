# Multiplayer Game Engines & Networking Stacks

Building a multiplayer game involves two separate decisions: the **game engine** (client rendering, physics, prediction) and the **networking / server architecture** (authoritative game server, matchmaking, relays, and voice/presence).

- **Last Verified:** 2026-11-16

## Built-In Multiplayer Support by Engine

| Engine | Built-In Networking | Common Third-Party Stacks | Best Fit |
| --- | --- | --- | --- |
| **[Unreal Engine](../engines/unreal-engine.md)** | **Built-in Replication & Dedicated Server** | Epic Online Services (EOS), Steamworks | Competitive shooters, co-op 3D, large-scale PC/console multiplayer |
| **[Unity](../engines/unity.md)** | **Netcode for GameObjects** / Netcode for Entities | Mirror, FishNet, Photon Fusion/Quantum | Indie/AA co-op, mobile multiplayer, cross-platform PC/console |
| **[Godot](../engines/godot.md)** | **High-Level Multiplayer API** (`MultiplayerSpawner`, `MultiplayerSynchronizer`, ENet) | Nakama, Steamworks (`GodotSteam`), WebRTC | Co-op indie games, turn-based & real-time 2D/3D |
| **[Phaser](../engines/phaser.md) / Web Engines** | Browser WebSockets / WebRTC | **Colyseus**, Socket.IO, PartyKit | Real-time `.io` browser games, card/board games |
| **[GDevelop](../engines/gdevelop.md)** | Built-in **Multiplayer Extension** (peer-to-peer / lobby) | THNK framework | Fast no-code 2D co-op & party prototypes |

## Dedicated Game Servers & Backend Services

- **Peer-to-Peer / Listen Server (with Relay):** Best for 2–8 player co-op games where one player hosts and a relay (Steam Networking Sockets, Epic Online Services, Unity Relay) handles NAT traversal without renting dedicated servers.
- **Authoritative Dedicated Servers:** Required for competitive PvP or persistent worlds to prevent cheating. Common backend frameworks include **Nakama** (open-source, Go/Lua/TS), **Colyseus** (open-source, Node.js/TS), **Agones** (Kubernetes game server orchestration), and managed services like **PlayFab** or **Photon**.
