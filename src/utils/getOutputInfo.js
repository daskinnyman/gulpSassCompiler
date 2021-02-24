/**
 * @function getOutputInfo - Get output info such as file name and output directory from file path.
 * @param {string} path - The out file path.
 * @returns {object} - Object contains fileName and OutputDir.
 */
module.exports = function (path) {
  if (!path) {
    throw new Error("Output path is not provided.");
  }
  // Split the output path into array
  const outputFilePathArray = path.split("/");
  const regex = /.\.css$/;
  // Get file name without css extension
  let fileName = outputFilePathArray.pop();

  if (!regex.test(fileName)) {
    throw new Error("Output file must be a css.");
  }

  fileName = fileName.replace(".css", "");
  // Get directory path
  const outputDir = outputFilePathArray.join("/");

  return { fileName, outputDir };
};
