import * as esbuild from "esbuild";
import path from "node:path";
import fsExtra from "fs-extra";

const pkgPath = path.join(process.cwd(), "package.json");
const pkg = fsExtra.readJSONSync(pkgPath);

await esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify: true,
    target: [`node${pkg.engines.node}`],
    platform: "node",
    format: "esm",
    sourcemap: true,
    outdir: "build",
    external: ["sqlite", "sqlite3"],
    logLevel: "info",
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
