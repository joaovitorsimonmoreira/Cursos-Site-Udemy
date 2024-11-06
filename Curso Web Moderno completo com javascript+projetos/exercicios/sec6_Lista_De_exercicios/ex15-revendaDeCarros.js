const verificarCarros = (carro)=>{
  switch (carro) {
    case "hatch":
      return console.log("Compra efetuada com sucesso");
      break;
    case "sedans":
    case "motocicletas":
    case "caminhonetes":    
      return console.log("tem certeza que prefere esse modelo?"); 
      break;
    default:
      return console.log("modelo não disponivel");
      break;
  }
}

verificarCarros("sedans");