const webpack = require("webpack");
// const path = require('path')

module.exports = {
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
