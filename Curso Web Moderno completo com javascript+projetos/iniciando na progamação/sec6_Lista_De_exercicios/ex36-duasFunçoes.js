let vetor = [0.1,0.2,0.3,0.4,0.5];
let novoVetor = [];

const multiplicarVetor = (vetor,numInteiro)=>{
  let numeroMultiplicado = 0;
  if(numInteiro > 0){
    for (let i = 0; i < vetor.length; i++) {
      numeroMultiplicado = vetor[i]*numInteiro
      
      novoVetor.push(numeroMultiplicado)
    }

  return console.log(`vetor antigo = ${vetor}, novo vetor = ${novoVetor}`)  
  }else{
    return console.log("ERRO")
  }
}

multiplicarVetor(vetor,3);