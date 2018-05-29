const path = require("path");

// Styles
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const bourbon = require("bourbon");
const neat = require("bourbon-neat");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.ts",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          // fallback to style-loader in development
          {
            loader:
              process.env.NODE_ENV !== "production"
                ? "style-loader"
                : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              includePaths: [bourbon, neat]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "index.css",
      chunkFilename: "[id].css"
    }),
    new StyleLintPlugin(path.resolve(__filename, ".stylelintrc.json"))
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  performance: {
    hints: false
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./index.js"
  }
};
