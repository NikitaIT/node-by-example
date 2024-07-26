#! /usr/bin/env -S node --import tsx/esm --conditions=@nikitait/runtypes

import { run } from "node:test";
import { spec } from "node:test/reporters";
import process from "node:process";
import { parseArgs } from "node:util";
import { globSync } from "glob";

const { values, positionals } = parseArgs({
  options: {
    src: {
      type: "string",
      default: "./src/**/*.test.ts",
    },
    watch: {
      type: "boolean",
      default: false,
    },
  },
  allowPositionals: true,
});

run({
  concurrency: true,
  timeout: 10_000, // whatever
  files: positionals.length
    ? positionals
    : globSync(values.src || "./src/**/*.test.ts", {
        cwd: process.cwd(),
      }),
  watch: Boolean(values.watch), // process.argv.includes(`--${"watch"}`),
})
  .on("test:fail", () => {
    process.exitCode = 1;
  })
  // @ts-ignore
  .compose(spec)
  .pipe(process.stdout);