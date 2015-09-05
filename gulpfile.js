var gulp = require('gulp')
  , jade = require('gulp-jade')
  , webpack = require('webpack')
  , webpackConfig = require('./webpack.config.js')
  , rimraf = require('rimraf')
  , assets = require('./webpack-assets.json').main

var paths = {
  view: ['./index.jade']
}

gulp.task('default', function(){
  gulp.watch(paths.view, ['jade']);
})

gulp.task('jade', function(){
  gulp.src(paths.view)
    .pipe(jade({
      locals: {
        JS: '/build/app.js',
        CSS: '/build/app.css'
      }
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('build:jade', function(){
  gulp.src('./index.jade')
    .pipe(jade({
      locals: {
        JS: assets.js,
        CSS: assets.css
      }
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('clean', function(){
  rimraf('./build', function(){
    
  });
})
