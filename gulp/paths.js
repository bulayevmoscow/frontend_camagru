const src_path = 'src/'
const dest_path = 'dest/'
const paths = {
  src: {
    html: src_path + '**/*.html',
    sass: src_path + 'styles/**/*.sass',
    css: src_path + 'styles/**/*.css',
    js: src_path + 'scripts/**/*.js'
  },
  dest: {
    html: dest_path + '**/*.html',
    sass: dest_path + 'styles/**/*.sass',
    css: dest_path + 'styles/**/*.css',
    js: dest_path + 'scripts/**/*.js'
  }
}

module.exports = {
  src_path,
  dest_path,
  paths
}