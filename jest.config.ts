import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/*.d.ts",
    "!<rootDir>/src/**/types.ts",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/types/**",
    "!**/jest.config.ts",
    "!**/next-env.d.ts",
    "!**/next.config.js",
    "!**/next-i18next.config.js",
    "!**/babel.config.js",
    "!**/postcss.config.js",
    "!**/webpack.config.js",
    "!**/tsconfig.json",
    "!<rootDir>/src/middlewares/**",
  ],

  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
