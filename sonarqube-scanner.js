// Load environment variables from .env file
require("dotenv").config();

const scanner = require("sonarqube-scanner").default;

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: process.env.SONAR_TOKEN || "",
    options: {
      "sonar.sources": ".",
      "sonar.eslint.reportPaths": "eslint-report.json",
      "sonar.exclusions": "node_modules/**,coverage/**,reports/**",
      "sonar.tests": ".", // can be ./tests
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts", // can be ./tests/**/*.test.tsx
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
    },
  },
  () => process.exit()
);
