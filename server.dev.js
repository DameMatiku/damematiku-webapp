const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const port = 8080;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler);
server.listen(port);

