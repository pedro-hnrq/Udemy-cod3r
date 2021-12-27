// Maneira que poderá replete 
const prod1 = {
    nome :'...',
    preco : 444.00
}

//Factory Simples
function criarPesso(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}console.log(criarPesso())

function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2990.90))
console.log(criarProduto('Ipad', 11199.49))