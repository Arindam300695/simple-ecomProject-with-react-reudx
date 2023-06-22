module.exports = {
    env: { browser: true, es2021: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react-refresh", "react", "import", "react-hooks"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".jsx", ".tsx"] },
        ],
        "react/jsx-props-no-spreading": "off",
        "react/react-in-jsx-scope": "off",
    },
};
