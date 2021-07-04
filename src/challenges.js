// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];
  return (lastName + ', ' + firstName);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouse = Math.abs(mouse);
  let distCat1 = Math.abs(cat1 - distMouse);
  let distCat2 = Math.abs(cat2 - distMouse);

  if (distCat2 < distCat1) {
    return 'cat2';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let number in numbers) {
    if (numbers[number] % 3 !== 0 && numbers[number] % 5 !== 0) {
      numbers[number] = 'bug!';
    } else if (numbers[number] % 3 === 0 && numbers[number] % 5 === 0) {
      numbers[number] = 'fizzBuzz';
    } else if (numbers[number] % 3 === 0) {
      numbers[number] = 'fizz';
    } else if (numbers[number] % 5 === 0) {
      numbers[number] = 'buzz';
    }
  }
  return numbers;
}

// Desafio 9
function encode(word) {
  let encoder = '';
  for (let index of word) {
    switch(index){
      case 'a': encoder += '1';
      break;
      case 'e': encoder += '2';
      break;
      case 'i': encoder += '3';
      break;
      case 'o': encoder += '4';
      break;
      case 'u': encoder += '5';
      break;
    }
  }
  return encoder;
}

function decode(number) {
  let decoder = '';
  for (let index of number) {
    switch(index){
      case '1': encoder += 'a';
      break;
      case '2': encoder += 'e';
      break;
      case '3': encoder += 'i';
      break;
      case '4': encoder += 'o';
      break;
      case '5': encoder += 'u';
      break;
    }
  }
  return decoder;
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
