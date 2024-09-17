let vetor = [2,25,10,5,11,19,13,12,12,15,16,17];
let vetorSeparado = [];

const identificarNumeros = ()=>{
  vetor.forEach(el =>{
    if(el >=10 && el <=20){
      vetorSeparado.push(el)
    }
  })

  return console.log(vetorSeparado);
}

identificarNumeros();