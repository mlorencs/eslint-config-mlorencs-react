module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    rules: {
        // Configure Prettier
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                printWidth: 100,
            },
        ],

        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
            },
        ],

        // View link below for React rules documentation
        // https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
        // Not working: https://github.com/jsx-eslint/eslint-plugin-react/issues/3285
        "react/boolean-prop-naming": [
            "error",
            {
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
                validateNested: true,
            },
        ],
        "react/hook-use-state": [
            "error",
            {
                allowDestructuredState: true,
            },
        ],
        "react/jsx-boolean-value": ["warn", "never"],
        "react/jsx-curly-brace-presence": [
            "warn",
            {
                props: "never",
            },
        ],
        "react/jsx-fragments": ["warn"],
        "react/jsx-handler-names": [
            "error",
            {
                eventHandlerPropPrefix: "on",
            },
        ],
        "react/jsx-no-leaked-render": ["warn"],
        "react/jsx-no-useless-fragment": ["warn"],
        "react/jsx-pascal-case": ["error"],
        "react/no-array-index-key": ["warn"],
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],

        // View link below for jsx-a11y rules documentation
        // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
        "jsx-a11y/no-aria-hidden-on-focusable": ["warn"],
        "jsx-a11y/prefer-tag-over-role": ["warn"],
    },
};
