const verificarDia = (dia)=>{
  if(dia >31 || dia < 1){
    return console.log('[ERRO] verifique os dados');
  }else{
    switch (dia) {
     case 1:
      if(dia%7 === 1){
        return console.log("é domingo")
      }
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    default:
      return console.log('ola')
    
      
    break;
    }

    return dia
  }
}


verificarDia(1);