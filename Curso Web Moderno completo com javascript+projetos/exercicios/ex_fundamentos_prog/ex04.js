// function retornarMes(numero) {
//   if(numero >= 1 && numero <= 12){
//     switch (numero) {
//       case 1:
//         return console.log("janeiro")
//         break;
//       case 2:
//         return console.log("fevereiro")
//         break;
//       case 3:
//         return console.log("março")
//         break; 
//       case 4:
//         return console.log("abril")
//         break;
//       case 5:
//         return console.log("maio")
//         break;
//       case 6:
//         return console.log("junho")
//         break;
//       case 7:
//         return console.log("julho")
//         break;
//       case 8:
//         return console.log("agosto")
//         break;
//       case 9:
//         return console.log("setembro")
//         break;
//       case 10:
//         return console.log("outubro")
//         break;
//       case 11:
//         return console.log("novembro")
//         break;
//       case 12:
//         return console.log("dezemro")
//         break;                   
//       default:

//         break;
//     }
//   }else{
//     return console.log("verificar dados")
//   }
// }

// retornarMes(1); meu codigo é o de cima

// versao otimizada pelo chat gpt abaixo:

// function retornarMes(numero) {
//   const meses = [
//     "janeiro", "fevereiro", "março", "abril", "maio", "junho",
//     "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
//   ];

//   if (numero >= 1 && numero <= 12) {
//     console.log(meses[numero - 1]);
//   } else {
//     console.log("verificar dados");
//   }
// }

// retornarMes(1.1); // janeiro // codigo 1.0 do chat gpt

// pedi para que ele resolvese erros

function retornarMes(numero) {
  numero = Number(numero); // Converte o valor para número

  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  // Verifica se é um número inteiro entre 1 e 12
  if (Number.isInteger(numero) && numero >= 1 && numero <= 12) {
    return meses[numero - 1];
  } else {
    return "verificar dados";
  }
}

console.log(retornarMes(12.1)); // verificar dados
console.log(retornarMes(1));   // janeiro
console.log(retornarMes("2.9")); // fevereiro
console.log(retornarMes("abc")); // verificar dados

