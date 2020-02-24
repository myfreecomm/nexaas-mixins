const path = require('path')

module.exports = {
  devtool: 'source-map',

  entry: path.resolve('mixin'),

  output: {
    path: path.resolve('dist'),
    filename: 'mixin.min.js',
    library: 'mixin',
    libraryExport: 'default',
    libraryTarget:  'var'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'standard-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
}
