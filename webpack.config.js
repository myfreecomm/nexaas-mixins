const path = require('path')

module.exports = {
  devtool: 'source-map',

  entry: path.resolve('src', 'index'),

  output: {
    path: path.resolve('dist'),
    filename: 'mixin.min.js'  
  },

  module: {
    rules: [
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
