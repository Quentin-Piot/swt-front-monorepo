module.exports = {
    root: true,
    extends: [
        "next/core-web-vitals",
        "custom",
        "plugin:react-hooks/recommended",
    ],
    plugins: ["@tanstack/eslint-plugin-query", "react-hooks"],
};
