const verificarNota = (nota)=>{

  if(nota >= 0 && nota <= 100){
    const arredondarNota = (nota)=>{
      if(nota < 40 && nota%5 >2){
        return nota +(5- (nota%5));
      }else{
        return nota
      }

    }
    let notaArredondada = arredondarNota(nota);

    if(notaArredondada < 40){
      return console.log(`nota do aluno = ${notaArredondada} reprovado`);

    }else if(notaArredondada >=40){
      return console.log(`nota do aluno = ${notaArredondada} aprovado`);
    }
  }else{
    return console.log("[ERRO] verifique os dados");
  }
}

verificarNota(39);



