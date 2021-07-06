// Desafio 10
function techList(tech, name) {
  let listTech = tech.sort();
  let techName = [];

  if (listTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; listTech.length > index; index += 1){
    let obj = {
      tech: listTech[index],
      name: name      
      }
    techName.push(obj);
  }
  return techName;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
