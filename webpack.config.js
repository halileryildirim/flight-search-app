const path = require("path");

module.exports = {
  mode: "development",
  entry: "./flight-search.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
