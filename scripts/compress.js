const path = require('path');
const gulp = require('gulp');
const gzip = require('gulp-gzip');

const ROOT = path.join(__dirname, '..');

// Compress in-place
gulp.task('gzip', function() {
    return gulp
        .src(ROOT + '/out/**/*.{html,js,css}')
        .pipe(gzip({ append: false }))
        .pipe(gulp.dest(ROOT + '/out'));
});

gulp.task('gzip')(err => {
    if (err) {
        console.log('err', err);
    } else {
        console.log('Completed!');
    }
});
