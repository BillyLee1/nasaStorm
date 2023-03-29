const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js', // change this line
    marsRover: './src/marsData/marsData.js', // add this line
    earth: './src/earthData/earthData.js'
  },
  output: {
    filename: '[name].bundle.js', // change this line
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    static: './dist',
  },
  devtool: 'eval-source-map',
  plugins: [
    new ESLintPlugin(),
    new Dotenv(),
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      title: '',
      template: './src/index.html',
      inject: 'body',
      chunks: ['main'], // add this line
    }),
    new HtmlWebpackPlugin({
      filename: 'mars-rover.html',
      template: './src/mars-rover.html',
      chunks: ['marsRover'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'earth.html',
      template: './src/earth.html',
      chunks: ['earth'],
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
