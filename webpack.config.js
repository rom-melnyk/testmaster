const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = {
  entry: './client/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]s(x)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.ts', '.jsx', '.tsx'] },
  output: {
    path: path.resolve(__dirname, 'client-compiled/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:9000/dist/',
    hotOnly: true
  },
  plugins: [
    new CleanWebpackPlugin('./client-compiled/'),
    new CopyWebpackPlugin([
      './client/index.html',
      { from: './client/assets', to: 'assets' }
    ]),
  ]
};

module.exports = [
  Object.assign({}, baseConfig, {
    name: 'dev',
    watch: true,
    devtool: 'eval-source-map',
  }),
  Object.assign({}, baseConfig, {
    name: 'prod',
  }),
];
