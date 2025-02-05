/** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
// };
module.exports = {
  roots: ["<rootDir>"], // Change from "<rootDir>/src" to "<rootDir>"
  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"], // Match test files properly
  coveragePathIgnorePatterns: ["/node_modules/", "/.next/", "/public/"]
};