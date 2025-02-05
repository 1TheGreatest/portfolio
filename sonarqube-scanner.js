const scanner = require("sonarqube-scanner").default;

scanner(
  {
    serverUrl: "http://localhost:9000",
    token: "squ_1553dca4875d9faa92f96663378e276e1e76e721",
    options: {
      "sonar.sources": ".",
      "sonar.eslint.reportPaths": "eslint-report.json",
      "sonar.exclusions": "**/*.test.tsx",
      "sonar.tests": ".src", // can be ./tests
      "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts", // can be ./tests/**/*.test.tsx
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "test-report.xml",
    },
  },
  () => process.exit()
);
