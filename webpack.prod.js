const path = require("path");

// Styles
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const bourbon = require("bourbon");
const neat = require("bourbon-neat");
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.ts",
  mode: "production",
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
          {
            loader: MiniCssExtractPlugin.loader
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
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
