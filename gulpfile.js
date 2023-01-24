// modules
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

const autoprefixerList = [
	'Chrome >= 45',
	'Firefox ESR',
	'Edge >= 12',
	'Explorer >= 10',
	'iOS >= 9',
	'Safari >= 9',
	'Android >= 4.4',
	'Opera >= 30'
];

// pug to html
const buildTemplate = () => {
	return gulp.src(['src/*.pug'])
		.pipe(sourcemap.init())
		.pipe(pug({
			pretty: true
		}))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('build/'))
		.pipe(sync.stream());
}
exports.buildTemplate = buildTemplate;

const buildLoad = () => {
	return gulp.src(['src/load/*.pug'])
		.pipe(sourcemap.init())
		.pipe(pug({
			pretty: true
		}))
		.pipe(sourcemap.write())
		.pipe(gulp.dest('build/load/'))
		.pipe(sync.stream());
}
exports.buildLoad = buildLoad;

// scss to css
const createCss = () => {
	return gulp.src("src/scss/**/*.+(sass|scss)")
		.pipe(plumber(function (err) {
			console.log("Styles Task Error");
			console.log(err);
			this.emit("end");
		}))
		.pipe(sourcemap.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
				overrideBrowserslist: autoprefixerList,
				cascade: false,
				grid: true
		}))
		.pipe(sourcemap.write("."))
		.pipe(gulp.dest("build/css/"))
		.pipe(sync.stream());
}
exports.createCss = createCss;

// css libs
const moveCss = () => {
	return gulp.src("src/scss/libs/*.css")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/css/"));
}
exports.moveCss = moveCss;

// img
const images = () => {
	return gulp.src("src/images/**")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/images/"))
		.pipe(sync.stream());
}
exports.images = images;

// media  
const media = () => {
	return gulp.src("src/media/*")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/media/"))
		.pipe(sync.stream());
}
exports.media = media;

// JS 
const scripts = () => {
	return gulp.src("src/js/*")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/js/"))
		.pipe(sync.stream());
}
exports.scripts = scripts;

// fonts  
const fonts = () => {
	return gulp.src("src/fonts/*")
		.pipe(sourcemap.init())
		.pipe(gulp.dest("build/fonts/"))
		.pipe(sync.stream());
}
exports.fonts = fonts;

// server
const server = (done) => {
	sync.init({
		server: {
			baseDir: 'build'
		},
		cors: true,
		notify: false,
		ui: false,
	});
	done();
}
exports.server = server;

// watcher
const watch = () => {
	gulp.watch('src/js/*', gulp.series("scripts"));
	gulp.watch('src/images/*', gulp.series("images"));
	gulp.watch('src/fonts/*', gulp.series("fonts"));
	gulp.watch('src/media/**', gulp.series("media"));
	gulp.watch('src/scss/**/*.+(sass|scss)', gulp.series("createCss"));
	gulp.watch('src/scss/libs/*.css)', gulp.series("moveCss"));
	gulp.watch('src/**/*.pug', gulp.series("buildTemplate"));
	gulp.watch('src/load/*.pug', gulp.series("buildLoad"));
}

// gulp watch
exports.watch = watch;

// gulp build/default
exports.default = gulp.series(
	buildTemplate, buildLoad, createCss, moveCss, media, scripts, images, fonts, server, watch
);
// gulp develop
exports.dev = gulp.series(
	server, watch
);