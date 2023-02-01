module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  plugins: ["jsx-a11y", "prefer-arrow-functions", "unicorn", "import"],
  parserOptions: {
    project: "tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["**/lighthouse/**/*.js", "**/tooling/**/*.js"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: "off",
    "no-empty": "error",
    "max-lines": ["error", { max: 600 }],
    complexity: ["error", { max: 8 }],
    "no-extra-boolean-cast": "off",
    "no-undef": "error",
    "prefer-destructuring": "error",
    "prefer-template": "error",
    "no-use-before-define": "off",
    "no-unused-expressions": "off", // see https://github.com/typescript-eslint/typescript-eslint/issues/1241
    "@typescript-eslint/no-unused-expressions": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-prop-types": "off", // produces a lot of false positives in our code
    "react/require-default-props": "off",
    "react/sort-comp": "error",
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "react/no-unescaped-entities": "error",
    "import/prefer-default-export": "off",
    "import/order": "error",
    "import/no-extraneous-dependencies": [
      "off",
      {
        devDependencies: ["**/*webpack.config.js", "**/*.test.tsx"],
        peerDependencies: true,
      },
    ],
    "import/extensions": "off",
    "jsx-a11y/anchor-is-valid": ["error", { components: [] }],
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
    "jsx-a11y/click-events-have-key-events": "off", // 7 issues, 0 autofixable, business decision
    "jsx-a11y/no-static-element-interactions": "off", // only a few issues, but in the commons code
    "jsx-a11y/no-noninteractive-element-interactions": "off", // only a few issues, but in the commons code
    "@typescript-eslint/no-explicit-any": "warn",
    "react/destructuring-assignment": "error",
    "react/prop-types": "off",
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ], // 412 issues, 65 autofixable
    "emotion/jsx-import": "off",
    "@typescript-eslint/indent": "off",
    "react/jsx-indent": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/quotes": "off",
    "react/jsx-wrap-multilines": ["warn", { declaration: false, assignment: false }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["strictCamelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
        filter: {
          regex: "((s|S)tatsD|GPT|YPosition|sanitizeHTML)",
          match: false,
        },
      },
      {
        selector: "function",
        format: ["strictCamelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
        filter: {
          regex: "((s|S)tatsD|GPT|YPosition|sanitizeHTML)",
          match: false,
        },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
    ],
    "multiline-comment-style": ["error", "starred-block"],
    curly: ["error", "all"],
    "no-implicit-coercion": ["error", { boolean: true, number: true, string: true }],
    "prefer-arrow-functions/prefer-arrow-functions": ["error"],
    "unicorn/catch-error-name": [
      "error",
      {
        name: "err",
      },
    ],
    "unicorn/no-new-array": "error",
    "unicorn/throw-new-error": "error",
    "prefer-spread": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration[const=true]",
        message: "Don't declare const enums",
      },
    ],
    "no-debugger": "error",
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-default-export": "error",
    "default-param-last": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "jest/prefer-to-be": "off",
    "react/display-name": "error",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};

