const defaultConfig = {
  includePath: "",
  indentType: "space",
  indentWidth: 2,
  outputStyle: "nested",
  Precision: 5,
  relativeUrls: true,
  sourceMapRoot: "",
  sourceMap: false,
};

const options = { relativeUrls: false, sourceMap: true };

const mergedConfig = {
  includePath: "",
  indentType: "space",
  indentWidth: 2,
  outputStyle: "nested",
  Precision: 5,
  relativeUrls: false,
  sourceMapRoot: "",
  sourceMap: true,
};

module.exports = {
  defaultConfig,
  options,
  mergedConfig,
};
