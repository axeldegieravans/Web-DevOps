module.exports = {
  env: {
    es2021: true,
    node: true,      // voor __dirname, require, module, etc.
    jest: true,      // voor describe/it/expect/beforeEach/afterAll
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script", // commonjs (node). Gebruik "module" als je echt ESM gebruikt.
  },
  plugins: ["jest"],
  overrides: [
    {
      files: ["**/__tests__/**/*.js", "**/*.test.js", "**/*.spec.js"],
      extends: ["plugin:jest/recommended"],
    },
  ],
};