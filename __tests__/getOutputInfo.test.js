const getOutputInfo = require("../src/utils/getOutputInfo");

it("Should get file name and outputDir", () => {
  expect(getOutputInfo("./wwwroot/css/foo.css")).toMatchObject({
    fileName: "foo",
    outputDir: "./wwwroot/css",
  });
});

it("Should throw Output path is not provided Error", () => {
  expect(() => {
    getOutputInfo(null);
  }).toThrow("Output path is not provided.");
});

it("Should throw Output file must be a css.", () => {
  expect(() => {
    getOutputInfo("./wwwroot/css/foo");
  }).toThrow("Output file must be a css.");
});
