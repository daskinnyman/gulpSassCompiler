const fs = require("fs");

module.exports = {
  /**
   * @function getDefaultConfig - Get Default compiler config from assigned path
   * @param {string} path - The path to compilerconfig.json.defaults
   * @returns {object} - Object contains fileName and OutputDir
   */
  getDefaultConfig: function (path) {
    try {
      const data = fs.readFileSync(path, "utf8");
      const json = JSON.parse(data);
      let sassDefaultConfig = json["compilers"]["sass"];

      if (!sassDefaultConfig) {
        return {};
      }

      let autoPrefix = sassDefaultConfig["autoPrefix"];

      if (autoPrefix) {
        autoPrefix = autoPrefix.split(",");
        sassDefaultConfig["autoPrefix"] = autoPrefix;
      }

      return sassDefaultConfig;
    } catch (error) {
      console.error(error);
    }
  },
};
