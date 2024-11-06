


const calcularMedia = (nota1,nota2,nota3)=>{
  let peso1= 1;
  let peso2= 2;
  let peso3= 3;

const mediaPonderada = ()=>{
  return (nota1*peso1+nota2*peso2+nota3*peso3)/(peso1+peso2+peso3)
}
mediaPonderada();

if(mediaPonderada() >=5){
  return console.log(`sua nota final foi: ${mediaPonderada()} você foi aprovado`);
}else{
  return console.log(`sua nota final foi: ${mediaPonderada()} você foi reprovado`);
}


}

calcularMedia(5,6,7);