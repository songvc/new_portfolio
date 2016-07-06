const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query:
      {
          presets:['es2015', 'react'],
          plugins: ["transform-object-rest-spread", "transform-class-properties", "transform-es2015-parameters"]
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
