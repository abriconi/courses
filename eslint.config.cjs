module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: true,
        assignment: true,
      },
    ],
    "no-implicit-coercion": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "max-depth": ["error", 4],
    "no-empty-pattern": "error",
    "comma-spacing": ["error", { before: false, after: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
