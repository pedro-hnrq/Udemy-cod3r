// Coleação Dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto ['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro ={
    modelo: 'A4',
    valor: 8900.00,

    propriedade:{    
        nome :'Jose',
        idade : 55,
        endereco:{
            lagradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Hugo',
        idade: 25

    },{
        nome:'Ana',
        idade: 29
    }]
}
carro.propriedade.endereco.numero = 1000
carro ['propriedade']['endereco']['lagradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.propriedade.endereco
delete carro.calcularValorSeguro
console.log(carro)
