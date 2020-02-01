module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*.stories.js"],
  globals: {
    __PATH_PREFIX: "",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/test-utils/setup-tests.js",
  ],
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transform: {
    "^.+\\.jsx?$": "<rootDir>/test-utils/jest-preprocess.js",
  },
  testURL: "http://localhost",
  // Ignore Gatsby as some modules are not transpiled
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
}
