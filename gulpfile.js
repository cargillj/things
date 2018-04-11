const gulp = require('gulp')
const ts = require('gulp-typescript')
const server = require('gulp-express')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('scripts', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist'));
})

gulp.task('dev-server', () => {
    process.env.node_ENV = 'development'
    server.run(['./dist/server/server.js'])
    // gulp.watch('src/**/*.ts', ['scripts', server.run])
    gulp.watch('src/**/*.ts', (event) => {
        gulp.start('scripts')
        server.run()
        server.notify(event)
    })
})