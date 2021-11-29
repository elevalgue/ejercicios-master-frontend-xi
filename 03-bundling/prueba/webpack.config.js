const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/students.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      scriptLoading: "blocking",
      hash: true, 
    }),
  ],
  devServer: {
    port: "8081",
  }
};
