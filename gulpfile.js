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
     * @constant DESTINATION_FILENAME_CUSTOM
     * @type {String}
     */
    const DESTINATION_FILENAME_CUSTOM = 'patchwork.custom.css';

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
        cssmin       = require('gulp-cssmin'),
        argv         = require('yargs').argv;

    gulp.task('build-sass', function() {

        var filename             = !argv.custom ? DESTINATION_FILENAME    : DESTINATION_FILENAME_CUSTOM,
            directoryRelease     = !argv.custom ? DESTINATION_RELEASE     : DESTINATION_RELEASE + '/custom',
            directoryDevelopment = !argv.custom ? DESTINATION_DEVELOPMENT : DESTINATION_DEVELOPMENT + '/custom';

        var minify = gulp.src(COMPONENT_FILES)
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'expanded' }))
            .pipe(autoprefixer({
                browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
            }))
            .pipe(rename(filename))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(directoryRelease));

        if (!argv.custom) {

            // Only non-custom builds must reside in the vendor directory for the example.
            minify.pipe(gulp.dest(directoryDevelopment));

        }

        return minify;

    });

    gulp.task('minify-css', ['build-sass'], function() {

        var directory = !argv.custom ? DESTINATION_RELEASE  : DESTINATION_RELEASE + '/custom',
            filename  = !argv.custom ? DESTINATION_FILENAME : DESTINATION_FILENAME_CUSTOM;

        return gulp.src(directory + '/' + filename)
                    .pipe(cssmin())
                    .pipe(rename({ suffix: '.min' }))
                    .pipe(gulp.dest(directory));

    });

    gulp.task('test', []);
    gulp.task('build', ['build-sass', 'minify-css']);
    gulp.task('default', ['build']);
    gulp.task('watch', function watch() {
        gulp.watch(COMPONENT_FILES, ['build']);
    });

})();