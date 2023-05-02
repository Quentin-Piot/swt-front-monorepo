module.exports = {
  extends: ["turbo", "prettier"],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
