let vetor = [1,2,3,-15,4,-6,-8,-9,12,-12]

const verificarNumeros = ()=>{

  let numerosNegativos = [];
  let numerosPositivos = [];

  vetor.forEach(el =>{
    if(el < 0){
      numerosNegativos.push(el)
    }else if(el > 0){
      numerosPositivos.push(el)
    }
  })
  return console.log(numerosNegativos.sort,numerosPositivos)
}

verificarNumeros();