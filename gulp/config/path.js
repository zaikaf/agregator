import * as nodePath from 'path';


const buildFolder = `./dist`,
    sourceFolder = `./source`,
    rootFolder = nodePath.basename(nodePath.resolve());

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
        img: `${buildFolder}/img/`
    },
    source: {
        js: `${sourceFolder}/js/main.js`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        css: `${sourceFolder}/css/**/*.css`,
        html: `${sourceFolder}/*.html`,
        files: `${sourceFolder}/files/**/*.*`,
        fonts: `${sourceFolder}/fonts/**/*.*`,
        img: `${sourceFolder}/img/**/*.*`
    },
    watch: {
        js: `${sourceFolder}/js/**/*.js`,
        css: `${sourceFolder}/css/**/*.css`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        html: `${sourceFolder}/**/*.html`,
        files: `${sourceFolder}/files/**/*.*`,
        fonts: `${sourceFolder}/fonts/**/*.*`,
        img: `${sourceFolder}/img/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    sourceFolder: sourceFolder,
    rootFolder: rootFolder
};