const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};