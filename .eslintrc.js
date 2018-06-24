module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module",
    },
    "rules": {
        "jsx-a11y/label-has-for": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "react/jsx-no-bind": "off",
        "array-callback-return": "off",
        "camelcase": "off",
        "class-methods-use-this": "warn",
        "comma-dangle": "warn",
        "consistent-return": "warn",
        "curly": "off",
        "import/no-extraneous-dependencies": "warn",
        "indent": "off",
        "function-paren-newline": "warn",
        "key-spacing": "warn",
        "keyword-spacing": "warn",
        "linebreak-style": "off",
        "no-eval": "off",
        "no-func-assign": "warn",
        "no-param-reassign": "off",
        "no-plusplus": "off",
        "no-return-assign" : "off",
        "no-trailing-spaces": "warn",
        "no-underscore-dangle": "off",
        "no-unused-vars": "warn",
        "object-curly-newline": "off",
        "object-curly-spacing": "warn",
        "object-shorthand": "warn",
        "prefer-rest-params": "warn",
        "react/jsx-indent-props": "off",
        "react/jsx-indent": "off",
        "react/jsx-filename-extension": "off",
        "react/no-array-index-key": "off",
        "react/prop-types": "off",
        "react/no-unused-state": "off",
        "react/jsx-wrap-multilines": "off",
        "react/sort-comp": "off",
        "require-jsdoc": "warn",
        "space-before-blocks": "warn",
        "spaced-comment": "warn",
        "prefer-destructuring": "off",
    }
};
