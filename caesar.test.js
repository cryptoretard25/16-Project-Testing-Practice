const rot13 = require('./caesar')

it('a should return n', ()=>{
  expect(rot13('a')).toMatch('n')
})

it('z should return m', ()=>{
  expect(rot13('z')).toMatch('m')
})

it("Hello WORLD! returns Urryb JBEYQ!", () => {
  expect(rot13("Hello WORLD!")).toMatch("Uryyb JBEYQ!");
});

it('Punctuation and symbols test', ()=>{
  expect(rot13("!,./*-")).toMatch("!,./*-");
})

it('Should be the same string', ()=>{
  expect(rot13(rot13('Hello WORLD!'))).toMatch('Hello WORLD!')
})