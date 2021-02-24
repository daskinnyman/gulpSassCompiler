const getDefaultConfig = require("../src/configReader");
const fs = require("fs");
const configReaderMocks = require("../mocks/configReader.mock");

const {
  filePath,
  defaultConfig,
  defaultConfigWithAutoPrefix,
  defaultConfigWithoutSass,
  sassConfig,
  sassConfigWithAutoPrefix,
} = configReaderMocks;

it("Should get default config file", () => {
  jest.spyOn(fs, "readFileSync").mockReturnValueOnce(defaultConfig);

  expect(getDefaultConfig(filePath)).toMatchObject(sassConfig);
});

it("Should get default config file with autoprefix", () => {
  jest
    .spyOn(fs, "readFileSync")
    .mockReturnValueOnce(defaultConfigWithAutoPrefix);

  expect(getDefaultConfig(filePath)).toMatchObject(sassConfigWithAutoPrefix);
});

it("Default config path is not provided.", () => {
  jest.spyOn(fs, "readFileSync").mockReturnValueOnce(defaultConfig);

  expect(() => {
    getDefaultConfig(null);
  }).toThrow("Default config path is not provided.");
});

it("Should throw Sass config is not provided.", () => {
  jest.spyOn(fs, "readFileSync").mockReturnValueOnce(defaultConfigWithoutSass);
  expect(() => {
    getDefaultConfig(filePath);
  }).toThrow("Sass config is not provided.");
});
