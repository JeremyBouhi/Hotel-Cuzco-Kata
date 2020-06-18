module.exports = {
    rootDir: './',
    resetMocks: true,
    moduleFileExtensions: [
        'ts',
        'js',
        'json',
        'vue'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest'
    },
    testMatch: [
        '<rootDir>/test/**/*.test.ts'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(date-fns)/)'
    ],
    setupFilesAfterEnv: [
        'jest-extended',
    ],
    coverageDirectory: '<rootDir>/test/coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,vue}',
        '!**/node_modules/**'
    ]
}
