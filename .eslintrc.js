// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        // allow async-await
        "generator-star-spacing": "off",
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        semi: 0,
        quotes: 0,
        "space-before-function-paren": 0,
        "no-multiple-empty-lines": 0,
        "comma-style": 0,
        "no-useless-return": 0,
        indent: 0,
        "no-unused-vars": 0,
        "o-undef": 0,
        "eol-last": 0,
        "comma-dangle": 0,
        eqeqeq: 0,
        "no-throw-literal": 0,
        "prefer-promise-reject-errors": 0,
        "no-trailing-spaces": 0,
        "no-new": 0,
        "operator-linebreak": 0,
        'space-in-parens': 0,
    }
};
