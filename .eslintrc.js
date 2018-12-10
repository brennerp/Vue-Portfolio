module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/prettier"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-inline-comments": "off",
    "spaced-comment": "always",
    "prettier/prettier": [
      "warn",
      {
        "singleQuote": true,
        "bracketSpacing": true,
        "printWidth": 80,
        "semi": false,
        "trailingComma": "none",
        "arrowParens": "avoid"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
