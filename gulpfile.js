var gulp = require('gulp'),
   sass = require('gulp-sass'),
   minifycss = require('gulp-minify-css'),
//    uglify = require('gulp-uglify'),
   rename = require('gulp-rename'),
   //livereload = require('gulp-livereload'),
//    clean = require('gulp-clean'),
//    pixrem = require('gulp-pixrem'),
   autoprefixer = require('gulp-autoprefixer');
//    concat = require('gulp-concat');

var SRC_DIR = './',
   DEST_DIR = './';

gulp.task('styles', function() {
 return gulp.src([
   SRC_DIR + 'css/style.scss',
   ])
   .pipe(sass())
   .pipe(autoprefixer({
	   browsers: [
		  "Android 2.3",
		  "Android >= 4",
		  "Chrome >= 20",
		  "Firefox >= 24",
		  "Explorer >= 8",
		  "iOS >= 6",
		  "Opera >= 12",
		  "Safari >= 6"
		],
	   safe: true
   }))
   .pipe(gulp.dest( DEST_DIR + 'css/compiled/' ))
   .pipe(rename({suffix: '.min'}))
   .pipe(minifycss())
   .pipe(gulp.dest( DEST_DIR + 'css/compiled'))
  // .pipe(livereload());
});


// gulp.task('clean', function() {
//  return gulp.src([DEST_DIR + 'css'], {read: false})
//    .pipe(clean());
// });


gulp.task('watch', function() {
 gulp.watch(SRC_DIR + 'css/*.scss', ['styles']);
 
 //livereload.listen();
 
 
});

gulp.task('default', function() {
 gulp.start('styles', 'watch');
});


