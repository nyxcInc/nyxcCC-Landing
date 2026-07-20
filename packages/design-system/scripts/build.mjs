// Custom build script (in place of tsup) because tsup's built-in CSS
// handling resolves `*.module.css` imports to an empty object instead of a
// scoped class-name map. esbuild's own `local-css` loader does this
// correctly (verified directly against esbuild), so this script drives
// esbuild itself for JS+CSS and shells out to `tsc` for declaration files.
import { build } from "esbuild";
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

const shared = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  jsx: "automatic",
  sourcemap: true,
  loader: { ".module.css": "local-css" },
  logLevel: "info",
};

await build({ ...shared, format: "esm", outfile: "dist/index.js" });
await build({ ...shared, format: "cjs", outfile: "dist/index.cjs" });

execFileSync("npx", ["tsc", "-p", "tsconfig.build.json"], { stdio: "inherit" });

const copies = [
  ["src/tokens/index.css", "dist/tokens/index.css"],
  ["src/tokens/colors.css", "dist/tokens/colors.css"],
  ["src/tokens/typography.css", "dist/tokens/typography.css"],
  ["src/tokens/spacing.css", "dist/tokens/spacing.css"],
  ["src/fonts/fonts.css", "dist/fonts/fonts.css"],
  ["src/styles.css", "dist/styles.css"],
];
for (const [from, to] of copies) {
  mkdirSync(dirname(to), { recursive: true });
  cpSync(from, to);
}
mkdirSync("dist/fonts", { recursive: true });
cpSync("src/fonts", "dist/fonts", {
  recursive: true,
  filter: (src) => !src.endsWith(".css"),
});

console.log("Build complete.");
