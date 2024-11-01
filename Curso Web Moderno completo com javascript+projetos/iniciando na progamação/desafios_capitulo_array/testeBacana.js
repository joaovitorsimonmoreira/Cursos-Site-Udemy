const carrinho = [
    {nome: "borracha", preço: 12.90}
]

console.log(carrinho)

let resultado = carrinho.map((el)=>{
    return el.preço
})

console.log(resultado)