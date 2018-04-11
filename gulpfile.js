const gulp = require('gulp')
const ts = require('gulp-typescript')
// const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('scripts', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
})

gulp.task('build', ['scripts'])

gulp.task('nodemon', () => {
    nodemon({
        script: './dist/server/server.js',
        watch: 'src',
        ext: 'ts',
        tasks: ['build']
    })
})

gulp.task('default', ['build', 'nodemon'])