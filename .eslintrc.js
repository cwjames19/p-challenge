module.exports = {
  root: true,
  ignorePatterns: [
    "**/*.test.tsx",
    "**/*.stories.tsx",
    "**/*.spec.tsx",
    "**/*.test.ts",
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    cy: true,
    it: true,
    describe: true,
    google: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-testing-library",
    "eslint-plugin-prefer-arrow",
    "@typescript-eslint",
    "eslint-plugin-prettier",
  ],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          object: {
            message:
              "Avoid using the `object` type. Record<string, any> is likely a better choice.",
          },
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message:
              "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@typescript-eslint/naming-convention": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        path: "always",
        types: "prefer-import",
        lib: "always",
      },
    ],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "arrow-body-style": ["warn", "as-needed"],
    "comma-dangle": "off",
    complexity: "off",
    "constructor-super": "error",
    eqeqeq: ["error", "smart"],
    "implicit-arrow-linebreak": "off",
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined",
    ],
    "id-match": "error",
    "import/order": [1, { groups: ["external", "internal"] }],
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/newline-after-description": "error",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "max-classes-per-file": ["error", 1],
    "max-len": ["warn", { code: 120, tabWidth: 2 }],
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-continue": "warn",
    "no-constant-condition": ["warn", { checkLoops: false }],
    "no-debugger": "error",
    "no-empty": "warn",
    "no-eval": "error",
    "no-extra-boolean-cast": "off",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": "off",
    "no-new-wrappers": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow/prefer-arrow-functions": "warn",
    "prefer-const": "error",
    radix: "error",
    "react/require-default-props": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],
      },
    ],
    "use-isnan": "error",
    "valid-typeof": "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "react/prop-types": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-no-duplicate-props": "off",
    "no-plusplus": "off",
    quotes: [2, "single", { avoidEscape: true }],
    "import/no-extraneous-dependencies": "off",
    "no-void": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",

    //forbids calling prototype methods, i.e. hasOwnProperty
    "no-prototype-builtins": "off",
    //turned on by an extension, forbids some standard js features like: ForOfStatement
    "no-restricted-syntax": ["off"],
    //forbids joining text and expressions in a single line, i.e. ticket: {cost} would be separated
    "react/jsx-one-expression-per-line": "off",
    //prettier removes these parentheses and conflicts with eslint multilines
    "react/jsx-wrap-multilines": "off",
    //disabled to allow async listeners
    "@typescript-eslint/no-misused-promises": "off",
    //allows early (inconsistent) returns from functions like useEffect
    "consistent-return": "off",
    // forbids importing of Theme from @material-ui/core
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@material-ui/core",
            importNames: ["Theme"],
            message: "Please use Theme from @flymachine/components instead.",
          },
        ],
        //   patterns: [{
        //     group: ['lodash', 'lodash/*'],
        //     message: 'Use lodash-es instead.',
        //   }]
      },
    ],
    // Not required since React v17
    "react/react-in-jsx-scope": "off",
  },
};
