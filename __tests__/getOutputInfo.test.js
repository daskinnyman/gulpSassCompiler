const getOutputInfo = require("../src/utils/getOutputInfo");

it("Should get file name and outputDir", () => {
  const filePath = "./wwwroot/css/foo.css";
  const { fileName, outputDir } = getOutputInfo(filePath);

  expect(fileName).toBe('foo');
  expect(outputDir).toBe('./wwwroot/css');
});
