let pontuações = "2, 2, 3, 4, 5, 0, 7, 8, ,9 ,10";

const verificarPontuação = (pontuacoes)=>{

  pontuações.split(', ');

  let maiorNumero = pontuações[0];
  let menorNumero = pontuações[0];
  let quebraRecorde = 0;

  for(let i = 0; i < pontuações.length; i++){
    if(maiorNumero < pontuações[i]){
      maiorNumero = pontuações[i]

      quebraRecorde++
    }else if(menorNumero < pontuações[i]){
      menorNumero = pontuações[i];
    }
  }

  return console.log(`${quebraRecorde} e ${menorNumero}`);
}

verificarPontuação();