const HtmlPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const context = resolve(__dirname, "src");

module.exports = {
  output: {
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: context,
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic",
              },
            ],
          ],
        },
      },

      {
        test: /\.svg$/,
        loader: "@svgr/webpack",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

  plugins: [
    new HtmlPlugin({
      template: "./index.html",
      // title: "LucraDuct - Developers Point",
      // favicon: "./src/assets/img/logo/favicon.png",
    }),
  ],
};
