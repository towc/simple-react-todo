module.exports = {
  entry: './src/client/index.js',
  output: {
    path: './lib/client',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [ 'es2015', 'react' ]
      }
    }]
  }
}
