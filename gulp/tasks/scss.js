import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import groupMediaQueries from 'gulp-group-css-media-queries';
import csso from 'gulp-csso';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.source.scss, { sourcemap: true })
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(groupMediaQueries())
        .pipe(csso())
        .pipe(rename({
           extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
};