// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
};

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase
};

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
    return (lastName + ", " + firstName);
};

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}

// Desafio 6
function highestCount() {
  // seu código aqui
  //math.max.apply
  //usar for in ou for of
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
  // usar mais de uma função
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
