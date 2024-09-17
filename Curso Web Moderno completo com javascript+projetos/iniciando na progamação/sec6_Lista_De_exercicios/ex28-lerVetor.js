let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let vetorImpar = []
let vetorPar = []

const verificarNumeros = () => {
  vetor.forEach(el => {
    if (el % 2 === 0) {
      vetorPar.push(el);
      
    }else {
      vetorImpar.push(el);
    }
  });

  return console.log(`numeros pares: ${vetorPar} ,numeros impares: ${vetorImpar}`);
};

verificarNumeros();
console.log(vetor)
