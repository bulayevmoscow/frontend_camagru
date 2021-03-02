const { src, dest, parallel, series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const { src_path, dest_path, paths } = require('./gulp/paths')
const debug = require('gulp-debug')
const gulp = require('gulp')
const clean = require('gulp-clean')

function createBrowser () {
  browserSync.init({
    server: {
      baseDir: 'dest/',
      notify: false,
      online: false,
    },
    open: false
  })
}

const liveReload = () => {
  watch(dest_path).on('change', browserSync.reload)
  // watch(dest_path).on('change', browserSync.reload)
}

function task_html () {
  return src(paths.src.html)
    // .pipe(debug({ title: 'HTML FROM: \t' }))
    .pipe(dest(paths.dest))
    .pipe(debug({ title: 'HTML TO: \t' , showCount: false}))
}

function task_css () {
  return src(paths.src.css, {base: '.'})
    // .pipe(debug({ title: 'CSS FROM: \t' }))
    .pipe(dest('../../' + paths.dest))
    .pipe(debug({ title: 'CSS TO: \t', showCount: false }))
}

function task_sass () {
  return src(paths.src.sass)
    // .pipe(debug({ title: 'SASS FROM: \t' }))
    .pipe(dest(paths.dest))
    .pipe(debug({ title: 'SASS TO: \t', showCount: false }))
}

function task_js () {
  return src(paths.src.js)
    // .pipe(debug({ title: 'JS FROM: \t' }))
    .pipe(dest(paths.dest))
    .pipe(debug({ title: 'JS TO: \t', showCount: false }))
}

function clear (end) {
  src(['dest/*'])
    .pipe(debug({title: 'Delete: \t', showCount: false}))
    .pipe(clean())
  end()
}

function build () {
  console.log('build')
  // return parallel([task_sass, task_html, task_css, task_js])
  return parallel([task_css])
}

exports.browsersync = createBrowser
exports.clean = clear
exports.build = parallel([task_css])
exports.default = parallel([task_css, task_html, task_js, task_sass], createBrowser, liveReload)