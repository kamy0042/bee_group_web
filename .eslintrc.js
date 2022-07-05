module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    // すべての props をデフォルトにするのはやりすぎなので OFF
    "react/require-default-props": "off",
    // 処理に時間がかかるため OFF
    "import/no-cycle": "off",
    // eslint-plugin-react により不要となったため OFF
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // tsx 対応
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", "ts", "tsx"] }],
    // importの際に拡張子を不要にする
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
  settings: {
    // import/resolver エラー対応
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
