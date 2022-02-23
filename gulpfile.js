
var gulp = require("gulp");
var sass = require("gulp-sass");
var brosync = require('browser-sync').create();

function  Default(){

    brosync.init({
       
        server: {
            baseDir:"./"
        }
    });

 
    gulp.watch('js/*.js',Js);
    gulp.watch('sass/*.scss', Sass);
    gulp.watch("sass/*.scss").on('change', brosync.reload);
    gulp.watch("*.html").on('change',brosync.reload);
}


function Sass(){

    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(brosync.stream());
}
 function Js() {
    return gulp.src("js/restaurant.js")
    .pipe(brosync.stream());
 }

exports.default = Default;