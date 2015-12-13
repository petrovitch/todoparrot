var elixir = require('laravel-elixir');
var gulp = require('gulp');
var shell = require('gulp-shell');

var Task = elixir.Task;

var paths = {
    "assets": "./resources/assets/",
    "public": "./public/",
    "jquery": "./resources/assets/vendor/jquery/",
    "bootstrap": "./resources/assets/vendor/bootstrap/",
    "fontawesome": "./resources/assets/vendor/font-awesome/"
}

elixir.extend('speak', function(message){
    new Task('speak', function(){
        return gulp.src('').pipe(shell('say ' + message));
    });
});

gulp.task('hello', function(){
    console.log('First Gulp Task');
});

elixir(function(mix) {
    mix
        .copy(paths.fontawesome + 'fonts/**', paths.public + 'fonts')
        .copy(paths.bootstrap + 'fonts/**', paths.public + 'fonts/bootstrap/')
        .sass('app.scss')
        .scripts([
            paths.jquery + 'dist/jquery.min.js',
            paths.bootstrap + 'dist/js/bootstrap.js'
        ], 'public/js/app.js')
        .phpUnit()
        .speak('Compilation complete!');
});