const analyze = require("./analyze");

it("Should throw error when array contains not a number", () => {
  expect(() => analyze(["1", 2, 3, 4, 5])).toThrow(
    "Array must contain only numbers"
  );
});

it("Should throw an error when not array value passed", () => {
  expect(() => analyze(1)).toThrow("Input must be array");
});

it("Should throw an error when nothing is passed", () => {
  expect(() => analyze()).toThrow("Input must be array");
});

it("Works correctly", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual(object);
});

it("Works correctly with array of one argument", () => {
  const object = {
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  };
  expect(analyze([1])).toStrictEqual(object);
});
