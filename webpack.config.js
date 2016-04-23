var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: [
    path.join(__dirname, 'src', 'main.js')
  ],

  devtool: 'source-map',

  output: {
    path: __dirname,
    filename: 'dame-matiku.js'
  },

  resolve: {
    extensions: [ '', '.js' ]
  },

  module: {
    loaders: [
      {
      	test: /\.js$/,
      	loaders: [ 'babel' ],
      	include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]

};
