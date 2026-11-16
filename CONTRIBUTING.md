# Contributing to Game Development Engines

Contributions are welcome! This project aims to be an accurate, verifiable, and practical open reference for choosing a game development engine.

## Guidelines for Updates & Additions

1. **Source every factual claim**: Licensing terms, revenue thresholds, royalties, supported platforms, and version numbers must cite an official documentation page or license URL.
2. **Include a verification date**: Update `last_verified` (`YYYY-MM-DD`) in `data/engines.json` and the corresponding markdown card when updating engine details.
3. **Keep comparisons neutral**: Present strengths, trade-offs, and limitations objectively without marketing hype.
4. **Run validation tests** before opening a pull request:
   ```bash
   python3 -m unittest discover -s tests
   ```

## Adding a New Engine

1. Add the engine entry to `data/engines.json` following the existing schema.
2. Create an engine card in `engines/<engine-id>.md` if it is a major engine.
3. Update `README.md` if appropriate and run `python3 -m unittest discover -s tests`.
