const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PROD = !IS_DEV;

entryJsFiles = () => {
  const files = {
    main: "./index.jsx",
    statistic: "./statistic.ts",
  };
  return files;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new CssMinimizerWebpackPlugin(), new TerserWebpackPlugin()],
  };

  if (IS_PROD) {
    // code
  }

  if (IS_DEV) {
    // code
  }

  return config;
};

const filename = (path, ext) =>
  IS_DEV ? `${path ?? ""}[name]${ext}` : `${path ?? ""}[name].[fullhash]${ext}`;

const cssLoaders = (extra) => {
  const loaders = [{ loader: MiniCssExtractPlugin.loader }, "css-loader"];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const jsLoaders = (extra) => {
  const loaders = {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  };

  if (extra) {
    loaders.options.presets.push(extra);
  }

  if (IS_DEV) {
    // code
  }
  return loaders;
};

const setPlugins = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "favicon.png"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("assets/css/", ".css"), // "assets/css/[name].[fullhash].css"
    }),
    new EslintWebpackPlugin({
      extensions: ["js"],
      fix: true,
    }),
  ];

  if (IS_PROD) {
    // code
  }

  if (IS_DEV) {
    // code
  }

  return plugins;
};

module.exports = {
  context: path.resolve(__dirname, "src", "assets", "js"),
  mode: "development",
  entry: entryJsFiles(),
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename("assets/js/", ".js"), // "assets/js/[name].[fullhash].js"
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
      "@fonts": path.resolve(__dirname, "src", "assets", "fonts"),
      "@css": path.resolve(__dirname, "src", "assets", "css"),
      "@less": path.resolve(__dirname, "src", "assets", "less"),
      "@sass": path.resolve(__dirname, "src", "assets", "sass"),
      "@scss": path.resolve(__dirname, "src", "assets", "_scss"),
      "@img": path.resolve(__dirname, "src", "assets", "img"),
      "@js": path.resolve(__dirname, "src", "assets", "js"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: false,
  },
  devtool: IS_DEV ? "source-map" : false,
  plugins: setPlugins(),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: jsLoaders("@babel/preset-typescript"),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsLoaders("@babel/preset-react"),
      },
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.less$/i,
        use: cssLoaders("less-loader"),
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: filename("assets/img/", "[ext]"), // "assets/img/[name].[fullhash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: filename("assets/fonts/", "[ext]"), // "assets/fonts/[name].[fullhash][ext]",
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
