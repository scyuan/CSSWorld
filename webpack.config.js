const path = require('path');

// 自动生成html文件，并且自动引入js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包前清空上次打包的文件

// 拆分css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", path.resolve(__dirname, './src/index.js')],
  // entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: [require('autoprefixer')]
        }
      }] // 从右向左依次解析
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: [require('autoprefixer')]
        }
      }, "sass-loader"]
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/inedx.html')
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css"
    })
  ]
}