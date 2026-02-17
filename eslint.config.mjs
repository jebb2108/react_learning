import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  // Global ignores
  {
    ignores: ["node_modules", ".next", "dist"],
  },

  // Base JavaScript rules (from ESLint's recommended set)
  js.configs.recommended,

  // React specific configuration
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: { react },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
      globals: {
        // Browser globals (optional – add if you need them)
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // Add any custom rules here
      "semi": ["error", "always"], // Example: enforce semicolons
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];