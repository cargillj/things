const gulp = require('gulp')
const ts = require('gulp-typescript')
const livereload = require('gulp-livereload')
const nodemon = require('gulp-nodemon')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('markup', () => {
    gulp.src('src/app/**.html')
        .pipe(gulp.dest('dist/app'))
        .pipe(livereload())
})

gulp.task('scripts', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
})

gulp.task('build', ['markup','scripts'])

gulp.task('nodemon', () => {
    nodemon({
        script: './dist/server/server.js',
        watch: 'src/server',
        ext: 'ts',
        tasks: ['build']
    })
})

gulp.task('watch', () => {
    livereload.listen()
    gulp.watch('src/app/**.html', ['markup'])
})

gulp.task('default', ['build', 'nodemon'])