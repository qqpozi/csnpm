import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import tenser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import path from "path";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "./dist/index.min.js",
      format: "iife",
      name: "KKAd",
    },
    // {
    //   file: "./dist/index.amd.js",
    //   format: "amd",
    // },
    {
      file: "./lib/index.js",
      format: "cjs",
      exports: "named"
    },
    // {
    //   file: "./dist/index.esm.js",
    //   format: "esm",
    // },
    // {
    //   file: "./dist/index.umd.js",
    //   format: "umd",
    //   name: "KKAd",
    // },
    // {
    //   file: './dist/index.system.js',
    //   format: 'system'
    // }
  ],
  plugins: [
    scss({
      fileName: "index.min.css",
      processor: () => postcss([autoprefixer()]),
      includePaths: [
        path.join(__dirname, "../../node_modules/"),
        "node_modules/",
      ],
      outputStyle: "compressed",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    typescript({
      target: "es2015",
    }),
    tenser(),
  ],
};
