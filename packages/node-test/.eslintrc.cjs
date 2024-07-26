/* eslint-disable no-undef -- cjs */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["custom/node"],
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   project: "./tsconfig.lint.json",
  // },
  rules: {
    "no-console": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/require-await": "off",
    "import/extensions": [
      "error",
      "always",
      {
        pattern: {
          js: "never",
          ts: "always",
        },
      },
    ],
    // only for today, remove it
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
