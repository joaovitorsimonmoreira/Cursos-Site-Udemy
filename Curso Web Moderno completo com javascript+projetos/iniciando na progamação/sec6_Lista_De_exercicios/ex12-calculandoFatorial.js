const calcularFatorial = (numero)=>{
  if(numero === 0 || numero === 1){
    return console.log(1);
  }else{
    for(i = numero - 1; i>1; i--){
      numero *= i
    }

    return console.log(numero);
  }
}

calcularFatorial(10);