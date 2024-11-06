const verificarAno = (ano)=>{
  if(ano > 0){
    if(ano%4 === 0 || ano%400 === 0){
      return console.log(`o ano ${ano} é bissexto `);
    }else{
      return console.log("não é bissexto")
    }
  }else{
    return console.log("[ERRO] verifique os dados")
  }
}

verificarAno(404);