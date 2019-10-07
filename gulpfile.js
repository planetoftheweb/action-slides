var gulp = require("gulp"),
  folderIndex = require("gulp-folder-index"),
  browserSync = require("browser-sync").create(),
  source = "./build/",
  dest = "./build/";

function html() {
  return gulp.src(dest + "**/*.html");
}

function js() {
  return gulp.src(dest + "**/*.js");
}

function styles() {
  return gulp.src(dest + "**/*.css");
}

function slides() {
  return gulp
    .src(source + "slides/**/*.md")
    .pipe(
      folderIndex({
        extension: ".md",
        filename: "index.json"
      })
    )
    .pipe(gulp.dest(source + "slides"));
}

function watch() {
  gulp.watch(source + "js/**/*.js", js).on("change", browserSync.reload);
  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
  gulp
    .watch(source + "slides/**/*.md", slides)
    .on("change", browserSync.reload);
}

function server() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: source
    }
  });

  gulp.watch(source + "css/**/*.css", styles).on("change", browserSync.reload);
  gulp.watch(source + "index.html", html).on("change", browserSync.reload);
  gulp
    .watch(source + "slides/**/*.md", slides)
    .on("change", browserSync.reload);
}

var build = gulp.series(gulp.parallel(slides, js, styles, html), server, watch);

gulp.task("default", build);
