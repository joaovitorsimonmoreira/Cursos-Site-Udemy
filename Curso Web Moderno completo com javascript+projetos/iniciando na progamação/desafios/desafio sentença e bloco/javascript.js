
// //bloco 1
// {
//   console.log("numeros impares entre 1 e 10");
//   console.log("passo 1"); //sentenças
//   console.log("passo 3");
//   console.log("passo 5");
//   console.log("passo 7");
//   console.log("passo 9");
// }

// // bloco 2
// {
//   console.log("numeros pares entre 1 e 10");
//   console.log("passo 2"); //sentenças
//   console.log("passo 4");
//   console.log("passo 6");
//   console.log("passo 8");
//   console.log("passo 10");
}


// const numeros = [1,2,3,4,5,6,7,8,9,10];



//   numeros.forEach(e,()=>{
//     if(e%2=== 0){
//       console.log(`${e} é um numero par`)
//     }
//   })

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = () => {
  numeros.forEach(e => {
    if (e % 2 === 0) {
      console.log(`${e} é um numero par`);
    }
  });
}

numerosPares();


    
 
    
  
