// const escreverNumeroExtenso = (numero)=>{
//   switch (numero) {
//     case 0:
//       return console.log("zero");
//       break;
//     case 1:
//       return console.log("um");
//       break;
//     case 2:
//       return console.log("dois");
//       break;
//     case 3:
//       return console.log("três");
//       break;
//     case 4:
//       return console.log("quatro");
//       break;
//     case 5:
//       return console.log("cinco");
//       break;
//     case 6:
//       return console.log("seis");
//       break;
//     case 7:
//       return console.log("sete");
//       break;
//     case 8:
//       return console.log("oito");
//       break;
//     case 9:
//       return console.log("nove");
//       break;
//     case 10:
//       return console.log("dez");
//       break;                   
//     default:
//       return console.log("numero fora do escopo")
//       break;
//   }
// }

// escreverNumeroExtenso(11);

const numeroParaPalavra = (numero) => {
  const palavras = {
    0: "zero",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez"
  };

  return console.log(palavras[numero] || "numero fora do escopo");
};

numeroParaPalavra(3);
numeroParaPalavra(10);
numeroParaPalavra(11);
