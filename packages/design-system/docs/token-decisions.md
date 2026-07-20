# Token & font reconciliation decisions

## Colors

Confirmed matching across both consumer apps (safe to treat as canonical brand colors):

| Value | nyxcCC-Landing source | nyxc source | Canonical token |
|---|---|---|---|
| `#eed7b3` | `--color-wheat-100` | 33 occurrences across `src/css/*.css` | `--nyxc-color-brand-cream` |
| `#d2ffe7` | `--color-honeydew-100` | 4 occurrences | `--nyxc-color-brand-mint` |
| `#d9d9d9` | `--color-gainsboro` | 1 occurrence | `--nyxc-color-neutral-100` |
| `#10031d` | not tokenized | 70 occurrences (dominant background) | `--nyxc-color-bg-base` |
| `#090012` | `--color-gray` (misnamed — it's near-black) | not found | `--nyxc-color-ink` |

**Not yet promoted to the shared token set** (found during a full-repo color audit of nyxc's `src/css/*.css`, not present in nyxcCC-Landing, and outside this package's v0.1.0 scope — tracked as v0.2.0+ candidates, not silently added):

- `#1e0536` (7 occurrences) — secondary dark purple
- `#ffe3e8` (4 occurrences) — pink, used in a gradient in `main.css`
- `#320f53` (2 occurrences) — another purple
- `#fa0909` (1 occurrence) — likely an error/danger red
- `#3498db` (1 occurrence) — likely an info/link blue
- `#10013d` (1 occurrence) — appears to be a typo of `#10031D`, worth flagging to whoever owns that file rather than tokenizing

## Fonts

Audited both repos' CSS for actual `font-family`/`font-weight` usage (not just files present on disk) before deciding what to ship:

- nyxcCC-Landing declares one `@font-face` (`ITC Avant Garde Gothic Std`, weight 400 → `ITCAvantGardeStdBk.otf`) but ships 20 unused `.otf` weight files in `public/fonts/`.
- nyxc declares 6 `@font-face` rules in `main.css`, but only 4 are referenced by an actual `font-family` elsewhere in its component CSS: Book (`ITCAvantGardeStdBk.otf`), Bold (`ITCAvantGardeStdBold.otf`), Bold Condensed, and (by declaration parity) Book Condensed. "Extra Light Condensed" and "Medium Condensed" are declared but never applied anywhere — excluded from the package.

**Decision**: ship exactly 4 weights, sourced from nyxcCC-Landing's `.otf` files (more complete than nyxc's condensed `.woff`s):

- `ITCAvantGardeGothicStd-Book.otf` (400)
- `ITCAvantGardeGothicStd-Bold.otf` (700)
- `ITCAvantGardeGothicStdCondensed-Book.otf` (400)
- `ITCAvantGardeGothicStdCondensed-Bold.otf` (700)

**Naming fix**: nyxc previously declared a separate `font-family` per weight (e.g. `"ITC Avant Garde Gothic Bold"`), which prevents the browser from doing correct weight matching/synthesis. The package instead declares two real families (`ITC Avant Garde Gothic Std`, `ITC Avant Garde Gothic Std Condensed`) each with proper `font-weight` variants — consumers should request weight via `font-weight`, not via a different family name per weight.

**Deferred**: `.woff2` versions of these 4 files (smaller, universally supported) — no font-conversion tooling was available in this environment. Tracked as a follow-up; shipping `.otf` today is correct (proven working format in both apps) even if not maximally optimized.

**License**: redistribution of ITC Avant Garde Gothic Std inside this internal npm package has been confirmed as covered.
