module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [ "leankit", "leankit/es6", "plugin:vue/essential" ],
    "parserOptions": {
        "ecmaVersion": 2017
    },
    "rules": {
        "strict": 0,
        "indent": ["error", 4]
    }
};