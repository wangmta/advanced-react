const path = require('path');

const config = {
  resolve: {
    modules: [path.resolve('./lib'), path.resolve('./node_modules')]
  },
  entry: ['babel-polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader'] }
    ]
  }
};

module.exports = config;
