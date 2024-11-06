let vetor = [1,2,3,4,5,12345];

const calcularMedia = ()=>{
  let soma = 0;
  vetor.forEach(el =>{
    if(el >= 0){
      soma+=el
    }
  })
  return console.log(soma/vetor.length)
}

calcularMedia();