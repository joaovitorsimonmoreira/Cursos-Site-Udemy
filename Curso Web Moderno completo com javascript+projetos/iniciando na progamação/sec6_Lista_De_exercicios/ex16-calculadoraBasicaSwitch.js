const calculadoraBasica = (x,y,operação)=>{
  switch (x,y,operação) {
    case "soma":
      return console.log(x+y);
      break;
    case "subtração":
      return console.log(x-y);
      break;
    case "multiplicação":
      return console.log(x*y);
      break;
    case "divisão":
      return console.log(x/y);
      break;      
    default:
      return console.log("verifique os dados");
      break;
  }
}

calculadoraBasica(3,5,"multiplicação");
calculadoraBasica(10,5,"divisão");
calculadoraBasica(3,5,"soma");
calculadoraBasica(5,3,"subtração");