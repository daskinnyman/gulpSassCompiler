
/**
* @function getMergedConfig - Merge default config with custome config from compilerconfig.json
* @param {object} defaultConfig - Default Compiler config in compilerconfig.json.defaults. 
* @param {object} options - Custom config in compilerconfig.json. 
* @returns {object} options - Merged config. 
*/
module.exports = function (defaultConfig, options) {
    let gulpSassConfig = defaultConfig;

    if (options) {
      gulpSassConfig = { ...gulpSassConfig, ...options };
    }

    return gulpSassConfig
  };
  