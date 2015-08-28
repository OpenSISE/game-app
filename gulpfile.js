var gulp = require('gulp')
  , jade = require('gulp-jade')
  , webpack = require('webpack')
  , webpackConfig = require('./webpack.config.js')


var paths = {
  view: ['./index.jade']
}

gulp.task('default', function(){
  gulp.watch(paths.view, ['jade']);
})

gulp.task('jade', function(){
  gulp.src(paths.view)
    .pipe(jade())
    .pipe(gulp.dest('./'))
})

gulp.task('webpack', function(){
  webpack(webpackConfig, function(err,stats){
    if (err) {
      console.log('Webpack Err:',err)
    } else {
      // console.log(stats);
    }
  })
})

gulp.task('build', ['jade','webpack']);
