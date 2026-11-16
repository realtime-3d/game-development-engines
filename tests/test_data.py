import json
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class TestGameEnginesRepo(unittest.TestCase):
    def test_engines_json_schema(self):
        data_path = ROOT / "data" / "engines.json"
        self.assertTrue(data_path.exists(), "data/engines.json is missing")

        payload = json.loads(data_path.read_text(encoding="utf-8"))
        engines = payload.get("engines", [])
        self.assertGreaterEqual(len(engines), 25, "Expected at least 25 engines")

        required_fields = {
            "id",
            "name",
            "tagline",
            "website",
            "docs_url",
            "license",
            "open_source",
            "dimensions",
            "languages",
            "visual_scripting",
            "no_code_friendly",
            "editor_platforms",
            "target_platforms",
            "pricing_summary",
            "free_tier",
            "zero_royalties",
            "royalties",
            "skill_level",
            "best_for",
            "latest_version_checked",
            "last_verified",
            "sources",
        }

        seen_ids = set()
        for engine in engines:
            missing = required_fields - set(engine.keys())
            self.assertFalse(missing, f"{engine.get('id')} missing fields: {missing}")
            self.assertNotIn(engine["id"], seen_ids, f"Duplicate id: {engine['id']}")
            seen_ids.add(engine["id"])
            self.assertRegex(engine["last_verified"], r"^\d{4}-\d{2}-\d{2}$")
            self.assertTrue(engine["sources"], f"{engine['id']} must have at least one source URL")

    def test_readme_relative_links_exist(self):
        readme = (ROOT / "README.md").read_text(encoding="utf-8")
        links = re.findall(r"\[[^\]]+\]\(([^)#]+)\)", readme)
        for target in links:
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            resolved = (ROOT / target).resolve()
            self.assertTrue(resolved.exists(), f"Broken relative link in README.md: {target}")

    def test_cli_finder(self):
        import sys
        sys.path.insert(0, str(ROOT / "tools" / "engine-finder"))
        from finder import filter_engines, load_engines

        engines = load_engines()
        oss_web_2d = filter_engines(engines, dim="2d", platform="Web", open_source=True, zero_royalty=True)
        ids = {e["id"] for e in oss_web_2d}
        self.assertIn("godot", ids)
        self.assertIn("gdevelop", ids)
        self.assertIn("phaser", ids)
        self.assertNotIn("unity", ids)


if __name__ == "__main__":
    unittest.main()
