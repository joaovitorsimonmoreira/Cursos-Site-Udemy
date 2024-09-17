const verificarValor = (mes)=>{
  const mensalidade = 600;
  const taxa = 0.05;

  const calculalJuros = ()=>{
    
    return (1+ taxa)**mes;
  }
  
  
  if(mes >= 1 && mes <= 12){

    return console.log (`a mensalidade será ${mensalidade * calculalJuros() }`)
   
  }else{
    console.log("[ERRO] verifique os dados");
  }
}

verificarValor(12);

