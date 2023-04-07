const { log } = console;

// implementing rot13
function encode(char, shift) {
  //a - 97
  //z -122
  const regex = /[a-z]/i;
  if (char.match(regex)) {
    const index = char.charCodeAt() + shift;
    return String.fromCharCode(((index - 97) % 26) + 97);
  } else return char;
}

function rot13(str) {
  const shiftFactor = 13;
  return ([...str].map(char=>{
    if(char.match(/[A-Z]/)) return encode(char.toLowerCase(), shiftFactor).toUpperCase()
    else return (encode(char, shiftFactor))
  }).join(''))
}

module.exports = rot13
