const verificarIdade = (idade)=>{
  const valorPadrao = 100;
  
  if(idade > 0){
    if(idade < 10){
      return console.log(`o valor a ser pago será: ${valorPadrao + 80}`)
    }else if(idade >= 10 && idade <=30){
      return console.log(`o valor a ser pago será: ${valorPadrao + 50}`)
    }else if(idade > 30 && idade <= 60){
      return console.log(`o valor a ser pago será: ${valorPadrao + 95}`)
    }else if(idade > 60){
      return console.log(`o valor a ser pago será: ${valorPadrao + 130}`)
    }
  }else{
    console.log("[ERRO] verifique os dados");
  }
}

verificarIdade(9);
verificarIdade(10);
verificarIdade(31);
verificarIdade(61);
verificarIdade();