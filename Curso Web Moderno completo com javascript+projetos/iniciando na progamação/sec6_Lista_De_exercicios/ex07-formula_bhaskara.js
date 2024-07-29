const realizarBhaskara = (ax2,bx,c)=>{

  
  
  let resultados = []
  let delta = (bx ** 2) - (4 * ax2 * c);

  if(delta < 0){
    return "delta é negativo"
  }
  // 
  let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
  let x2 = (-bx - Math.sqrt(delta))/(2*ax2)

  resultados.push(x1)
  resultados.push(x2)
  return resultados;
}

console.log(realizarBhaskara(1, 3, 2))
console.log(realizarBhaskara(3, 1, 2))
