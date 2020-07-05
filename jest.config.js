module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "<rootDir>/src/**/**/*.{js,jsx}",
    "!<rootDir>/src/*.js"
  ],
  coverageReporters: ["html"],
}