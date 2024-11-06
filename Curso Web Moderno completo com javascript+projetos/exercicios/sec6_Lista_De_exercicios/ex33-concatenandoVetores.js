let vetorInteiro = [1,2,3,4,5];
let vetorString = ["agua","cafe"];
let vetorDecimal = [0.1,0.2,0.3];

const concatenarVetor = ()=>{
  return vetorInteiro.concat(vetorString)

  
}

const concatenarVetor2 = ()=>{
  return vetorInteiro.concat(vetorDecimal)
}

console.log(concatenarVetor2());
console.log(concatenarVetor());