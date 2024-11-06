const calcularTroco = (valor)=>{
  const cedulas = [100,50,20,10,5,1];

  if(valor > 0){
    let resultado;
    switch (valor) {
      case (valor >= 100):
        resultado = valor/100
        break;
    
      default:
        break;
    }
  }else{
    console.log("[ERRO] verifique os dados");
  }
}