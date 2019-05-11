module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    },
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    coverageDirectory: 'coverage'
};
