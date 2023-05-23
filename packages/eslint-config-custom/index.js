module.exports = {
  extends: ["turbo", "prettier"],
  plugins: ["prettier", "eslint-plugin-simple-import-sort"],
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\w"], ["^@"], ["^[./]"]],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
