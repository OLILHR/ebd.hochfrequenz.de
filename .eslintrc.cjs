module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:svelte/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2020,
      extraFileExtensions: [".svelte"],
    },
    overrides: [
      {
        files: ["*.svelte"],
        parser: "svelte-eslint-parser",
        parserOptions: {
          parser: {
            ts: "@typescript-eslint/parser",
            js: "espree",
            typescript: "@typescript-eslint/parser",
          },
        },
      },
    ],
    env: {
      browser: true,
      es2017: true,
      node: true,
    },
    rules: {
      "import/order": [ 
          "error", 
          { 
              "groups": ["builtin", "external", "internal"],
              "alphabetize": { "order": "asc", "caseInsensitive": true } 
          } 
      ]
    },
  }