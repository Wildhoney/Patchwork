(function main() {

    /**
     * @constant COMPONENT_FILES
     * @type {String[]}
     */
    const COMPONENT_FILES = ['components/Patchwork.scss'];

    /**
     * @constant DESTINATION_RELEASE
     * @type {String}
     */
    const DESTINATION_RELEASE = 'dist';

    /**
     * @constant DESTINATION_FILENAME
     * @type {String}
     */
    const DESTINATION_FILENAME = 'patchwork.css';

    /**
     * @constant DESTINATION_DEVELOPMENT
     * @type {String}
     */
    const DESTINATION_DEVELOPMENT = 'example/vendor/patchwork';

    // Gulp Dependencies...
    var gulp         = require('gulp'),
        sass         = require('gulp-sass'),
        rename       = require('gulp-rename'),
        sourcemaps   = require('gulp-sourcemaps'),
        autoprefixer = require('gulp-autoprefixer'),
        cssmin       = require('gulp-cssmin');

    gulp.task('build-sass', function() {

        gulp.src(COMPONENT_FILES)
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'expanded' }))
            .pipe(autoprefixer({
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            }))
            .pipe(rename(DESTINATION_FILENAME))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(DESTINATION_RELEASE))
            .pipe(gulp.dest(DESTINATION_DEVELOPMENT))

    });

    gulp.task('minify-css', function() {

        gulp.src(DESTINATION_RELEASE + '/' + DESTINATION_FILENAME)
            .pipe(cssmin())
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest(DESTINATION_RELEASE));

    });

    gulp.task('test', []);
    gulp.task('build', ['build-sass', 'minify-css']);
    gulp.task('default', ['build']);
    gulp.task('watch', function watch() {
        gulp.watch(COMPONENT_FILES, ['build']);
    });

})();