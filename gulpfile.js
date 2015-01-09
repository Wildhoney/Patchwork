(function main() {

    /**
     * @constant COMPONENT_FILES
     * @type {String[]}
     */
    const COMPONENT_FILES = ['components/Patchwork.scss'];

    // Gulp Dependencies...
    var gulp   = require('gulp'),
        sass   = require('gulp-sass');

    gulp.task('build-sass', function () {

        gulp.src(COMPONENT_FILES)
            .pipe(sass())
            .pipe(rename('patchwork.css'))
            .pipe(gulp.dest('dist'))
            .pipe(gulp.dest('example/vendor/patchwork'));

    });

    gulp.task('build', ['build-sass']);
    gulp.task('default', ['build']);
    gulp.task('watch', function watch() {
        gulp.watch(COMPONENT_FILES, ['build']);
    });

})();