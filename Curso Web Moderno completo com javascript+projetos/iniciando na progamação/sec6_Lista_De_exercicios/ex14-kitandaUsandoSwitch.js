const vendaAutomatica = (fruta)=>{
  switch (fruta) {
    case 'maçã':
        console.log('Não vendemos esta fruta aqui.')
        break
    case 'kiwi':
        console.log('Estamos com escassez de kiwi.')
        break
    case 'melancia':
        console.log('Aqui está, custa R$ 3,00 o quilo.')
        break
    default:
        console.log('Erro, fruta inválida.')
}

  
}

vendaAutomatica("maçã");