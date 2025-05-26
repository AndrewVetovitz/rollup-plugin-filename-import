import buble from "@rollup/plugin-buble";

import pkg from "./package.json" with { type: "json" };
const external = Object.keys(pkg.dependencies);

export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true, exports: "auto" },
    { file: pkg.module, format: "es", sourcemap: true },
  ],
  plugins: [buble()],
  external,
};
