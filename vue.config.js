const webpack = require("webpack");
// const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  parallel: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        cash: "cash-dom",
        Popper: "@popperjs/core",
      }),
    ],
  },
};
