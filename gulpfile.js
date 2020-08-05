const gulp = require("gulp");
const replace = require("gulp-replace");

// index.htmlに改行を挿入する（GASエディターが重くなる為）
gulp.task("replaceNewLine", function () {
    return gulp
        .src(["./build/index.html"])
        .pipe(replace(";", ";\n"))
        .pipe(gulp.dest("./build/"));
});