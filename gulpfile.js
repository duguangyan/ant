var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint=require('gulp-jshint');
    //语法检查
    gulp.task('jshint', function () {
        return gulp.src('js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
    //压缩css
    gulp.task('minifycss',function() {
        return gulp.src('css/*.css')    //需要操作的文件
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(minifycss())   //执行压缩
            .pipe(gulp.dest('Css'));   //输出文件夹
    });
	//压缩，合并 js
    gulp.task('minifyjs', function() {
        return gulp.src('js/controller/*.js')      //需要操作的文件
            .pipe(concat('main.js'))    //合并所有js到main.js
            .pipe(gulp.dest('js/controller'))       //输出到文件夹
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(uglify())    //压缩
            .pipe(gulp.dest('js/controller')); //输出
    });


	gulp.task('default',['jshint'],function(){
		gulp.start('minifycss','minifyjs');
	});


