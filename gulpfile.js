var gulp = require('gulp')
  , jade = require('gulp-jade')
  , webpack = require('webpack')
  , webpackConfig = require('./webpack.config.js')


var paths = {
  view: ['./view/*.jade']
}

gulp.task('default', ['webpack'])

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
