import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

// Native ESLint flat config. eslint-config-next v16 exports flat-config arrays
// directly, so the previous @eslint/eslintrc FlatCompat wrapper is no longer
// appropriate — feeding a flat config through the legacy validator throws
// "Converting circular structure to JSON".
const eslintConfig = [
  // `next lint` handled build-output exclusion implicitly; running the ESLint
  // CLI directly (Next 16 removed `next lint`) means declaring it here.
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  // Config files legitimately use CommonJS `require()`: next.config.js is a
  // CommonJS module (`module.exports`), and Tailwind's plugin array is the
  // documented `require()` form. These were never linted under `next lint`,
  // which only scanned app/ — the ESLint CLI scans the repo root too.
  {
    files: ["*.config.js", "*.config.mjs", "*.config.ts"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
