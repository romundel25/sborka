let project_folder = "dist";
let source_folder = "src";

let path = {
    build:{
        html:project_folder + "/",
        css:project_folder + "/css",
        js:project_folder + "/js",
        img:project_folder + "/img",
        fonts:project_folder + "/fonts",
    },
    src:{
        html:source_folder + "/",
        css:source_folder + "/scss/styles.scss",
        js:source_folder + "/js/scrirts.js",
        img:source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts:source_folder + "/fonts",
    },
    watch:{
        html:source_folder + "/**/*.html",
        css:source_folder + "/scss/**/*.scss",
        js:source_folder + "/js/**/*.js",
        img:source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },

}

    let { src, dest} = require('gulp'),
    gulp = require('gulp'),







