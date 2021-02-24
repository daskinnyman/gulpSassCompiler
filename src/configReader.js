const fs = require("fs");

/**
 * @function getDefaultConfig - Get Default compiler config from assigned path
 * @param {string} path - The path to compilerconfig.json.defaults
 * @returns {object} - Object contains fileName and OutputDir
 */
module.exports = function (path) {
  if (!path) {
    throw new Error("Default config path is not provided.");
  }

  const data = fs.readFileSync(path, "utf8");
  const json = JSON.parse(data);

  let sassDefaultConfig = json["compilers"]["sass"];

  if (!sassDefaultConfig) {
    throw new Error("Sass config is not provided.");
  }

  let autoPrefix = sassDefaultConfig["autoPrefix"];

  if (autoPrefix) {
    sassDefaultConfig["autoPrefix"] = autoPrefix.split(",");
  }

  return sassDefaultConfig;
};
