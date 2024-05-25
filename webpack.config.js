const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src/assets/js"),
  mode: "development",
  entry: {
    main: "./index.js",
    statistic: "./statistic.js",
    post: "./post.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].[hash].js",
  },
  resolve: {
    extensions: [
      ".js",
      ".json",
      ".png",
      ".xml",
      ".csv",
      ".css",
      ".svg",
      ".jpg",
      ".jpeg",
      ".gif",
      ".webp",
      ".ico",
    ],
    alias: {
      "@css": path.resolve(__dirname, "src", "assets", "css"),
      "@img": path.resolve(__dirname, "src", "assets", "img"),
      "@js": path.resolve(__dirname, "src", "assets", "js"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[hash][ext]",
        },
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};
