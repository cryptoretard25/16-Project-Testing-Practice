const { log } = console;

function containsOnlyNums(arr) {
  return arr.every((el) => typeof el === "number");
}

function analyze(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be array");
  if (!containsOnlyNums(arr))
    throw new Error("Array must contain only numbers");

  const average = arr.reduce((curr, prev) => { return curr + prev; }, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

module.exports = analyze;
