const reverse = require("./reverse");

it("Hello should be olleH", () => {
  expect(reverse("Hello")).toBe("olleH");
});

it("Empty string", () => {
  expect(reverse("")).toBe("");
});

it("A bunch of words", () => {
  expect(reverse("hello world!")).toBe("!dlrow olleh");
});

it("Throws error when passed a number", () => {
  expect(() => reverse(123)).toThrow(Error);
});

it("Error when passed not a string value", () => {
  expect(() => reverse([1, 2, 3, 4])).toThrow(Error);
});

it('Mixed words string', ()=>{
    expect(reverse('12@(-04fdi')).toBe('idf40-(@21')
})