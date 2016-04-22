nck = require('webpack');
var path = require('path');
var version = 'dev-en';

module.exports = {

  entry: [
    path.join(__dirname, 'src', 'main.js')
  ],

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, '../www/frontend/', version),
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
  }

};
