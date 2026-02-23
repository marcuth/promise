import type { Config } from "jest"

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/__tests__/**/*.spec.ts", "**/__tests__/**/*.test.ts"],
    moduleFileExtensions: ["ts", "js", "json", "node"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    verbose: true,
}

export default config
