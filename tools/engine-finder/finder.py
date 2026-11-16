#!/usr/bin/env python3
"""CLI Game Engine Finder backed by data/engines.json."""

import argparse
import json
from pathlib import Path
from typing import Optional


def load_engines() -> list[dict]:
    data_path = Path(__file__).resolve().parents[2] / "data" / "engines.json"
    with data_path.open("r", encoding="utf-8") as f:
        return json.load(f)["engines"]


def filter_engines(
    engines: list[dict],
    dim: Optional[str] = None,
    platform: Optional[str] = None,
    language: Optional[str] = None,
    skill: Optional[str] = None,
    free_only: bool = False,
    zero_royalty: bool = False,
    open_source: bool = False,
    no_code: bool = False,
) -> list[dict]:
    results = []
    for e in engines:
        if dim == "2d" and not e["dimensions"]["2d"]:
            continue
        if dim == "3d" and not e["dimensions"]["3d"]:
            continue
        if platform and platform.lower() not in [p.lower() for p in e["target_platforms"]]:
            continue
        if language and language.lower() not in [l.lower() for l in e["languages"]]:
            continue
        if skill and skill.lower() not in [s.lower() for s in e["skill_level"]]:
            continue
        if free_only and not e["free_tier"]:
            continue
        if zero_royalty and not e["zero_royalties"]:
            continue
        if open_source and not e["open_source"]:
            continue
        if no_code and not e["no_code_friendly"]:
            continue
        results.append(e)
    return results


def main() -> None:
    parser = argparse.ArgumentParser(description="Filter game development engines from data/engines.json")
    parser.add_argument("--dim", choices=["2d", "3d"], help="Filter by 2D or 3D support")
    parser.add_argument("--platform", help="Target platform (e.g. Web, Android, iOS, Consoles)")
    parser.add_argument("--language", help="Programming language (e.g. C#, GDScript, Lua, Rust)")
    parser.add_argument("--skill", choices=["beginner", "intermediate", "advanced"], help="Experience level")
    parser.add_argument("--free", action="store_true", help="Only engines with a free tier")
    parser.add_argument("--zero-royalty", action="store_true", help="Only 0%% royalty engines")
    parser.add_argument("--open-source", action="store_true", help="Only open-source engines")
    parser.add_argument("--no-code", action="store_true", help="Only no-code friendly engines")
    args = parser.parse_args()

    matches = filter_engines(
        load_engines(),
        dim=args.dim,
        platform=args.platform,
        language=args.language,
        skill=args.skill,
        free_only=args.free,
        zero_royalty=args.zero_royalty,
        open_source=args.open_source,
        no_code=args.no_code,
    )

    print(f"Found {len(matches)} matching engine(s):\n")
    for e in matches:
        print(f"- {e['name']} ({e['license']}): {e['pricing_summary']}")
        print(f"  Languages: {', '.join(e['languages'])} | Targets: {', '.join(e['target_platforms'])}")
        print(f"  URL: {e['website']}\n")


if __name__ == "__main__":
    main()
