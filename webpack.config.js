var path = require('path');

module.exports = {
  entry: ["./js/main.js"],
  output: {
    path: './build', // This is where images AND js will go
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, "js")]
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devtool: 'source-map'
};