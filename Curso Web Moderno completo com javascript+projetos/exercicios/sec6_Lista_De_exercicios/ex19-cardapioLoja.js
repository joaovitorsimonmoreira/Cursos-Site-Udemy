const selecionarItem = (codigo)=>{
  switch (codigo) {
    
    case 100:
      return console.log("você escolheu cachorro quente, valor = R$ 3,00");
      break;
    case 200:
      return console.log("você escolheu Hambúrguer Simples, valor = R$ 4,00");
      break;
    case 300:
      return console.log("você escolheu Cheeseburguer, valor = R$ 5,50");
      break;
    case 400:
      return console.log("você escolheu Bauru , valor = R$ 7,50");
      break;
    case 500:
      return console.log("você escolheu Refrigerante , valor = R$ 3,50");
      break;
    case 600:
      return console.log("você escolheu Suco, valor = R$ 2,80");
      break;          
    default:
      return console.log("produto inexistente");  
      break;
  }
}

selecionarItem(600);
selecionarItem(500);
selecionarItem(400);
selecionarItem(300);
selecionarItem(200);
selecionarItem(100);
selecionarItem(1000);