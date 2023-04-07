const { log } = console;

function reverse(str) {
  if (typeof str != "string") throw new Error("Must be a string");
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

module.exports = reverse;
