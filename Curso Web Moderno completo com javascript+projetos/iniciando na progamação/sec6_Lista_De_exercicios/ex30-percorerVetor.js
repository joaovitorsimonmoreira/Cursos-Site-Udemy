let vetor = ["agua",2,-1,1,2,3,4,5,101,6,7,8,9,100];

const percorerVetor = ()=>{
  let menorNumero = 0;
  let maiorNumero = 0;
  vetor.forEach(el =>{
    if(el > maiorNumero && el > menorNumero){
      maiorNumero = el
    }else if(el < menorNumero)[
      menorNumero = el
    ]
  })

  return console.log(maiorNumero,menorNumero)
}

percorerVetor();