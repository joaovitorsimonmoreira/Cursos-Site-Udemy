const jurosSimples = (capital,taxa,tempo)=>{
  let juros = (capital*taxa/100)*tempo;

  let montante = capital + juros

  return console.log(montante);
}


//para que o calculo de certo as grandezas devem estar no mesmo tipo(ano e ano)


const jurosComposto = (capital,taxa,tempo)=>{
  let juros = (capital*(1+taxa/100))**tempo

  

  return console.log(juros.toFixed(1));
}
jurosSimples(1000,12,5);
jurosComposto(600,12,20);