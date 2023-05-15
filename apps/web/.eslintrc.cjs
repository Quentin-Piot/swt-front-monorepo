module.exports = {
    env: { browser: true, es2020: true },
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "custom",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh", "@tanstack/eslint-plugin-query", "react-hooks"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
}
