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
// Utilizei a função split pois já tinha conhecimento dela anteriormente
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

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
function highestCount(array) {
  let maxNumber = 0; 
  let repeatNumber = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (maxNumber < Math.abs(array[index])) {
      maxNumber = array[index];
    } 
  }
// Utilizei a função Math.abs que pesquisei no site da Documentação
// Referência: https://www.w3schools.com/jsref/jsref_abs.asp

  for (let index2 = 0; index2 < array.length; index2 += 1){
    if (maxNumber === array[index2]) {
      repeatNumber += 1;
    }
  }
  return repeatNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouse = Math.abs(mouse);
  let distCat1 = Math.abs(cat1 - distMouse);
  let distCat2 = Math.abs(cat2 - distMouse);
// Utilizei a função Math.abs que pesquisei no site da Documentação
// Referência: https://www.w3schools.com/jsref/jsref_abs.asp
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
      default: encoder += index;
    }
  }
  return encoder;
}

function decode(number) {
  let decoder = '';
  for (let index of number) {
    switch(index){
      case '1': decoder += 'a';
      break;
      case '2': decoder += 'e';
      break;
      case '3': decoder += 'i';
      break;
      case '4': decoder += 'o';
      break;
      case '5': decoder += 'u';
      break;
      default: decoder += index;
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
