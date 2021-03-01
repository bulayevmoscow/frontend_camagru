const gulp = require('gulp')
const debug = require('gulp-debug')
const { series, parallel } = gulp

// exports.dev = series()

exports.log = (end) => {
  gulp.src('src/styles/**/*.css')
    .pipe(debug());
  end()
}