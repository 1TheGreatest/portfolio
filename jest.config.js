/** @type {import('ts-jest').JestConfigWithTsJest} **/

module.exports = {
  // Enable coverage collection:
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"], // lcov is used by SonarQube
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  reporters: ["default"],
  outputDirectory: "reports", // directory where the report will be saved
  outputName: "sonar-report.xml", // the filename that SonarQube expects

  testResultsProcessor: "jest-sonar-reporter",
};
// module.exports = {
//   roots: ["<rootDir>"], // Change from "<rootDir>/src" to "<rootDir>"
//   testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"], // Match test files properly
//   coveragePathIgnorePatterns: ["/node_modules/", "/.next/", "/public/"]
// };
