# @nyxcinc/design-system

Shared design tokens, UI primitives, and layout shells for nyxc frontends
(nyxcCC-Landing, nyxc/NyxCarbon-ui). Supports React 18.2+ and 19.x.

Ships plain CSS custom properties (not Tailwind, not CSS-in-JS) so both a
Next.js app and a Vite app can consume the same brand foundation identically.

## What's in here

- **Tokens** — colors, typography, spacing/radius, reconciled from both
  consumer apps' real values. See [`docs/token-decisions.md`](./docs/token-decisions.md)
  for the full old-name → new-name mapping and rationale.
- **Fonts** — ITC Avant Garde Gothic Std (Book/Bold, regular + condensed),
  the weights actually used by either app today.
- **Primitives** — `Button`, `Link`, `Card`, `Container`, `Section`, `Badge`.
- **Layout shells** — `Header`, `Footer`. These are intentionally unopinionated
  skeletons (slots/props only) — they don't know whether "navigation" means
  an in-page scroll or a route change, since the two consumer apps differ here.

## Install

Not yet published to the registry. Until then, consume it via a local `file:`
dependency from a sibling app in this repo:

```jsonc
// some-app/package.json
"dependencies": {
  "@nyxcinc/design-system": "file:../../packages/design-system"
}
```

Once published (`npm run release` — see **Publishing** below), switch this to
a real version range, e.g. `"^0.1.0"`, and consumers need registry auth:

```ini
# .npmrc, in the consuming app
@nyxcinc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_READ_TOKEN}
```

- **Local dev**: each developer needs a personal GitHub PAT with `read:packages`
  scope in their own `~/.npmrc` (not the repo one above), or exported as
  `NPM_READ_TOKEN` in their shell.
- **Vercel** (nyxcCC-Landing): set `NPM_READ_TOKEN` as an environment variable
  in the Vercel project settings (Production + Preview + Development). Vercel
  substitutes `${VAR}` in `.npmrc` at install time — this is a manual dashboard
  step, not something committed to the repo.
- **CI**: deferred for now — publishing is manual (see below). When CI is
  added later, it'll need the same `read:packages` PAT as a repo secret for
  any consumer whose build isn't Vercel-managed.

## Usage

Import the CSS once, near your app's root, then import components as needed.

```tsx
// Next.js: src/app/layout.tsx
import "@nyxcinc/design-system/tokens.css";
import "@nyxcinc/design-system/fonts.css";
import "@nyxcinc/design-system/primitives.css"; // only needed if you use the React components
```

```jsx
// Vite: src/main.jsx
import "@nyxcinc/design-system/tokens.css";
import "@nyxcinc/design-system/fonts.css";
import "@nyxcinc/design-system/primitives.css";
```

`tokens.css` + `fonts.css` together are also available as a single
`@nyxcinc/design-system/styles.css` import if you only want the brand
foundation (no components).

```tsx
import { Button, Link, Card } from "@nyxcinc/design-system";

<Button variant="primary" size="md" href="https://calendly.com/...">
  Get Started
</Button>

<Link href="https://www.linkedin.com/company/nyxcc/">LinkedIn</Link>
```

CSS is never auto-injected by importing a component — you always import the
CSS explicitly, once, per app. This keeps global CSS side effects out of
component imports and lets each app control load order.

## Development

```sh
npm install
npm run build         # tsc for types + a custom esbuild script for JS/CSS
npm run typecheck
npm run storybook      # dev server at localhost:6006
npm run build-storybook
```

`npm run build` does **not** use `tsup` — tsup's built-in CSS-Modules
handling resolves `*.module.css` imports to an empty object instead of a
real scoped class-name map (verified directly against esbuild, which handles
this correctly via its `local-css` loader). `scripts/build.mjs` drives
esbuild directly for JS+CSS and shells out to `tsc` for declaration files.

## Publishing

CI-driven publishing is deferred for now — releases are manual:

```sh
npm run changeset   # record what changed, picks a semver bump
npm run release      # changeset publish — requires a GitHub Packages token
                      # with write:packages, e.g. via `npm login --registry=https://npm.pkg.github.com`
```

## Contributing

- New components/tokens need a Storybook story, a changeset
  (`npm run changeset`), and a note in the PR description of which existing
  bespoke markup (in either consumer app) it's meant to replace — this keeps
  the library pattern-mined from real usage rather than speculative.
- When a consumer app migrates a section onto a primitive, delete the
  now-redundant local CSS in the same PR — don't leave dead styles alongside
  the shared package.
- Token renames or primitive prop-shape changes are breaking (major version)
  changes — coordinate with both consumer apps before publishing one.
