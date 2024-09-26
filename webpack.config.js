const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // або 'production'
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: path.resolve(__dirname, './src/pages/index.html'),  // шлях до шаблону
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'About Page',
      template: path.resolve(__dirname, './src/pages/about.html'),  // шлях до сторінки about
      filename: 'about.html',
    }),
  ],
};
