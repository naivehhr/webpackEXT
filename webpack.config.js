const path = require("path");
const HelloWorldPlugin = require("./src/plugins/HelloWorldPlugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolveLoader: {
    modules: [path.join(__dirname, "./src/loaders"), "node_modules"]
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      // {
      //   test: /\.js$/,
      //   loader: "myLoader",
      //   exclude: /node_modules/,
      //   options: {
      //     replaceMap: {
      //       loaded: "yeah"
      //     }
      //   }
      // }
    ]
  },
  plugins: [new HelloWorldPlugin({ options: true })]
};
