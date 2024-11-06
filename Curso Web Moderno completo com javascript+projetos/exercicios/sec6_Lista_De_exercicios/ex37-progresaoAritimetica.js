const progresaoAritimetica = (n,a1,r)=>{

  let valoresAritimeticos = [];

  
  for (let i = 0; i < n; i++) {
    
    valoresAritimeticos.push(a1 = a1+r)
    
    
  }

  return console.log(valoresAritimeticos)
}

progresaoAritimetica(5,2,2);

const progresaoGeometrica = (n,a1,r)=>{

  let valoresGeometricos = [];

  
  for (let i = 0; i < n; i++) {
    
    valoresGeometricos.push(a1 = a1*r)
    
    
  }

  return console.log(valoresGeometricos)
}

progresaoGeometrica(5,1,3);
