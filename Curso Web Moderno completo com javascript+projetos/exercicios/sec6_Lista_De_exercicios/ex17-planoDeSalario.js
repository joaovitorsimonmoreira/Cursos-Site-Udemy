const calcularNovoSalario = (plano,salario)=>{
  // o switch deve possuir apenas uma propriedade ! (no caso abaixo apenas o "plano")
  switch (plano) {
    case "a":
      return console.log(salario + (salario*0.10));
      break;
    case "b":
      return console.log(salario + (salario*0.15));
      break;
    case "c":
      return console.log(salario + (salario*0.20));
      break  
    default:
      return console.log("Verifique os dados");
      break;
  }
}

calcularNovoSalario("a",1500); // 10%
calcularNovoSalario("b",1500); // 15%
calcularNovoSalario("c",1500); // 20%
calcularNovoSalario("algo",1500); // ERRO