const capitalize = require('./capitalize')

test('Is first char of string capitalized',()=>{
    expect(capitalize('some string')).toMatch(/^[A-Z]/)
})

test("numbers as string", () => {
  expect(capitalize('1234')).toBe("1234");
});

test('numbers ignored', ()=>{
    expect(capitalize(1234)).toBe("This is not a string");
})