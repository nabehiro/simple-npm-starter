module.exports = {
    "rules": {
        "no-console":0,     // allow console.log
        "indent": [
            2,
            4
        ],
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "windows"
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "modules": true,
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};