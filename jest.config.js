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
  setupFiles: [`<rootDir>/loadershim.js`],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transform: {
    "^.+\\.jsx?$": "<rootDir>jest-preprocess.js",
  },
  testURL: "http://localhost",
  // Ignore Gatsby as some modules are not transpiled
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
}
