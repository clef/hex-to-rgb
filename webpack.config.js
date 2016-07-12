module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'lib/index.js',
    library: 'hex-to-rgb',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
};
