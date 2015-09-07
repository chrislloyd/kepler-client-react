var path = require('path');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: './build', // This is where images AND js will go
    filename: 'keplerclient.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, "src")]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devtool: 'source-map'
};