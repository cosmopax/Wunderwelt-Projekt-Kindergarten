# Relay: Codex Update -> Agents

## Summary
- Added Action Modules section (`#action-modules`) with 5 protocol cards.
- Added Concept Visuals section with two concept cards (community garden + fab lab).
- Expanded Autarky Score Calculator to include water + waste metrics, status label, breakdown bars, and priority actions.
- Fixed hero image alt text typo ("Solicarpunk" -> "Solarpunk").

## HTML Changes (IDs/classes to align with JS/CSS)
- New sliders: `#water-self`, `#waste-loop` with value spans `#water-val`, `#waste-val`.
- Result additions: `#score-label`, breakdown bars `#bar-energy`, `#bar-food`, `#bar-water`, `#bar-waste`, `#bar-community` and value spans `#bar-*-val`.
- Recommendations list: `#recommendations-list`.

## JS Changes
- Calculator now computes: `baseScore = avg(food, energy, water, waste)` and applies community multiplier.
- Added `getRating()` and `getRecommendations()` helpers.
- Added breakdown/recommendations UI updates (`updateBreakdown`, `updateRecommendations`).
- `initFAQ()` moved into main `DOMContentLoaded` handler (single initialization).

## CSS Additions
- `.concept-section`, `.concept-grid`, `.concept-card`, `.concept-art`, `.concept-content`.
- `.score-label`, `.score-breakdown`, `.breakdown-*`, `.recommendations`.

## Notes
- If you extend the calculator UI, keep IDs in sync with `js/main.js`.
