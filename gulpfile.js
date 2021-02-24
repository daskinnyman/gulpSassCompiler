require("dotenv").config();

const CUSTOM_PATH = process.env.CUSTOM_CONFIG_PATH;
const DEFAULT_PATH = process.env.DEFAULT_CONFIG_PATH;
const WATCH_PATH = process.env.WATCH_PATH;

const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const getDefaultConfig = require("./src/configReader");
const getOutputInfo = require("./src/utils/getOutputInfo");
const getMergedConfig = require("./src/utils/getMergedConfig");
const sassConfigs = require(CUSTOM_PATH);

gulp.task("sass", function (done) {
  const defaultConfig = getDefaultConfig(DEFAULT_PATH);

  let browserListConfig = {};

  if (defaultConfig && defaultConfig.autoPrefix) {
    browserListConfig["overrideBrowserslist"] = defaultConfig.autoPrefix;
  }

  delete defaultConfig.autoPrefix;

  sassConfigs.map((config) => {
    const gulpSassConfig = getMergedConfig(defaultConfig, config.options);
    const { outputDir, fileName } = getOutputInfo(config.outputFile);

    return (
      gulp
        .src(config.inputFile)
        .pipe(sass(gulpSassConfig).on("error", sass.logError))
        .pipe(postcss([autoprefixer(browserListConfig)]))
        // Rename the output file with file name in sassConfig file.
        .pipe(
          rename(function (path) {
            path.basename = fileName;
            path.extname = ".css";
          })
        )
        .pipe(gulp.dest(outputDir))
        // Compress css with cssnano
        .pipe(postcss([cssnano()]))
        // Rename the output file with file name in sassConfig file and append .min.
        .pipe(
          rename(function (path) {
            path.basename = fileName + ".min";
            path.extname = ".css";
          })
        )
        .pipe(gulp.dest(outputDir))
    );
  });

  done(); // <-- to avoid async problems using gulp 4
});

gulp.task("sass:watch", function () {
  // Watch changes in SCSSResource folder
  gulp.watch(WATCH_PATH, gulp.series("sass"));
});
