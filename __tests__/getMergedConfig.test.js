const getMergedConfig = require("../src/utils/getMergedConfig");
const mergedConfigMock = require("../mocks/mergedConfig.mock");
const { defaultConfig, options, mergedConfig } = mergedConfigMock;

it("Should merge default config with custom config", () => {
  expect(getMergedConfig(defaultConfig, options)).toMatchObject(mergedConfig);
});

it("Should merge default config with no custom config", () => {
  expect(getMergedConfig(defaultConfig, null)).toMatchObject(defaultConfig);
});

it("Should throw Default config is not provided.", () => {
  expect(() => {
    getMergedConfig(null, options);
  }).toThrow("Default config is not provided.");
});
