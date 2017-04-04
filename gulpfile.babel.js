import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import replace from 'gulp-replace';
import rename from 'gulp-rename';

import del from 'del';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();
let options = {};



gulp.task('serve', () => {
  const config = require('./webpack.config');
  const bundler = webpack(config);
  let server = new WebpackDevServer(bundler, {
    contentBase: './src',
    publicPath: '/assets/',
    hot: true,
    stats: {
      colors: true
    }
  });
  server.listen(7777, 'localhost', (err) => {
    console.log('server listen at 7777');
  });
});
