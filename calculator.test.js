const calculator = require("./calculator");

// it("Sub works");
// it("Div works");
// it("Mul works");
// it("Error when passing not a number");
// it('Error when input is empty')
// it('Return b when a is empty')
// it("Return a when b is empty");

describe("testing add", () => {
  it("Should return sum of 1 + 1", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  it("Should throw an error when passing not a number", () => {
    expect(() => calculator.add("1", 1).toThrow(Error));
  });

  it("Should return b when a missed", () => {
    expect(calculator.add(null, 1)).toBe(1);
  });

  it("Should return a when b missed", () => {
    expect(calculator.add(1, null)).toBe(1);
  });

  it("Should throw an error when no arguments passed", () => {
    expect(() => calculator.add().toThrow(Error));
  });
});

describe("testing sub", () => {
  it("Should return 1 - 1 to be 0", () => {
    expect(calculator.sub(1, 1)).toBe(0);
  });
  it("Should throw an error when passing not a number", () => {
    expect(() => calculator.sub("1", 1).toThrow(Error));
  });
  it("Should return b when a missed", () => {
    expect(calculator.sub(null, 1)).toBe(1);
  });
  it("Should return a when b missed", () => {
    expect(calculator.add(1, null)).toBe(1);
  });
  it("Should throw an error when no arguments passed", () => {
    expect(() => calculator.add().toThrow(Error));
  });
});

describe("testing div", () => {
  it("Should return 1 / 1 to be 1", () => {
    expect(calculator.div(1, 1)).toBe(1);
  });

  it('Should return error when trying to divide by 0',()=>{
    expect(()=> calculator.div(1,0).toThrow(Error))
  })

  it("Should throw an error when passing not a number", () => {
    expect(() => calculator.div("1", 1).toThrow(Error));
  });

  it("Should return b when a missed", () => {
    expect(calculator.div(null, 1)).toBe(1);
  });

  it("Should return a when b missed", () => {
    expect(calculator.div(1, null)).toBe(1);
  });

  it("Should throw an error when no arguments passed", () => {
    expect(() => calculator.div().toThrow(Error));
  });
});

describe("testing mul", () => {
  it("Should return 1 * 1 to be 1", () => {
    expect(calculator.mul(1, 1)).toBe(1);
  });

  it("Should return error when trying to divide by 0", () => {
    expect(() => calculator.mul(1, 0).toThrow(Error));
  });

  it("Should throw an error when passing not a number", () => {
    expect(() => calculator.mul("1", 1).toThrow(Error));
  });

  it("Should return b when a missed", () => {
    expect(calculator.mul(null, 1)).toBe(1);
  });

  it("Should return a when b missed", () => {
    expect(calculator.mul(1, null)).toBe(1);
  });

  it("Should throw an error when no arguments passed", () => {
    expect(() => calculator.mul().toThrow(Error));
  });
});
