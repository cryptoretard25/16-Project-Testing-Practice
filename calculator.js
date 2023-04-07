const calculator = {
  add(a, b) {
    if (typeof a == "number" || typeof b == "number") {
      return a + b;
    } else if (a === null && typeof b == "number") {
      return b;
    } else if (b === null && typeof a == "number") {
      return a;
    } else {
      throw new Error("Not a number");
    }
  },
  sub(a, b) {
    if (!a && !b) throw new Error("Input is empty");
    if (!a && typeof b == "number") return b;
    if (!b && typeof a == "number") return a;
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Not a number");
    return a - b;
  },
  div(a, b) {
    if (b === 0) throw new Error("Cant divide by 0");
    if (!a && !b) throw new Error("Input is empty");
    if (!a && typeof b == "number") return b;
    if (!b && typeof a == "number") return a;
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Not a number");
    return a / b;
  },
  mul(a, b) {
    if (b === 0) throw new Error("Cant divide by 0");
    if (!a && !b) throw new Error("Input is empty");
    if (!a && typeof b == "number") return b;
    if (!b && typeof a == "number") return a;
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Not a number");
    return a * b;
  },
};

module.exports = calculator;
