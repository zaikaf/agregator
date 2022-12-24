import gulp from "gulp";

import { path } from "./gulp/config/path.js";

/*imports*/
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { css } from "./gulp/tasks/css.js";
import { scripts } from "./gulp/tasks/jscripts.js";
/*imports end*/

import { plugins } from "./gulp/config/plugins.js";

global.app ={
    path: path,
    gulp: gulp,
    plugins: plugins
};

const watcher = () => {
    gulp.watch(path.watch.html, copy);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.css, css);
    gulp.watch(path.watch.js, scripts);
};

const mainTask = gulp.parallel(copy,css,scss,scripts);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);
