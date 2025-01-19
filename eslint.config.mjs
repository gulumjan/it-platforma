import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^PRODUCT$" }, // Ignore warnings for variables matching "PRODUCT"
      ],
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
