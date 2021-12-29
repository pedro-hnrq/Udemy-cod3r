const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true },
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plático', preco: 7.50, fragil: false}

]
console.log(produtos.filter(function(p){
    return p.preco > 3400
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))