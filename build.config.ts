import { defineBuildConfig } from "unbuild";
import fg from "fast-glob";

const globTs = () => fg.globSync(["src/*.ts", "!src/*.d.ts"]);

export default defineBuildConfig({
  entries: globTs().map((input) => ({
    builder: "rollup",
    input: input,
    outDir: "dist",
  })),
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
  clean: true,
  declaration: true,
});

globTs();
