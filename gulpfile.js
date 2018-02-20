const gulp = require("gulp");
const less = require("gulp-less");
const minifyCss = require("gulp-clean-css");

let lessDir = "src/assets/less/*.less";

// Step-1

gulp.task("less",function(){

    return gulp.src(lessDir)
        .pipe(less())
        .pipe(minifyCss())
        .pipe(gulp.dest("dist/assets/css"));
});

// Step-2 

gulp.watch(lessDir,['less']);
