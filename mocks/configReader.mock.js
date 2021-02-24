const filePath = "../foo/bar/compilerconfig.json.defaults";
const defaultConfig = `{
  "compilers": {
    "sass": {
      "includePath": "",
      "indentType": "space",
      "indentWidth": 2,
      "outputStyle": "nested",
      "Precision": 5,
      "relativeUrls": true,
      "sourceMapRoot": "",
      "sourceMap": false
    }
  }
}`;

const defaultConfigWithAutoPrefix = `{
  "compilers": {
    "sass": {
      "autoPrefix":"last 2 version,>5%",
      "includePath": "",
      "indentType": "space",
      "indentWidth": 2,
      "outputStyle": "nested",
      "Precision": 5,
      "relativeUrls": true,
      "sourceMapRoot": "",
      "sourceMap": false
    }
  }
}`;

const defaultConfigWithoutSass = `{
  "compilers": {}
}`;

const sassConfig = {
  includePath: "",
  indentType: "space",
  indentWidth: 2,
  outputStyle: "nested",
  Precision: 5,
  relativeUrls: true,
  sourceMapRoot: "",
  sourceMap: false,
};

const sassConfigWithAutoPrefix = {
  autoPrefix: ["last 2 version", ">5%"],
  includePath: "",
  indentType: "space",
  indentWidth: 2,
  outputStyle: "nested",
  Precision: 5,
  relativeUrls: true,
  sourceMapRoot: "",
  sourceMap: false,
};

module.exports = {
  filePath,
  defaultConfig,
  defaultConfigWithAutoPrefix,
  defaultConfigWithoutSass,
  sassConfig,
  sassConfigWithAutoPrefix,
};
