const compararLados = (l1,l2,l3)=>{
  if(l1 === l2 || l1 === l3 || l2 === l1 || l2 === l3 && l1 === l2 || l1 === l3 || l2 === l1 || l2 === l3){
    //isosceles 2lados iguais
    console.log(`o quadrado com os lados ${l1},${l2},${l3} é ISOSCELES pois contem 2 lados iguais`)
  }else if(l1 !== l2 & l1 !== l3 & l2 !== l3 & l2 !== l1 & l3 !== l1 & l3 !== l2){
    //escaleno todos os lados diferentes
    console.log(`o quadrado com os lados ${l1},${l2},${l3} é ESCALENO pois todos os lados são diferentes`)
  }else{
    // equilatero tres lados iguais
    console.log(`o quadrado com os lados ${l1},${l2},${l3}} é equilatero`)
  }
}

compararLados(1,1,1);