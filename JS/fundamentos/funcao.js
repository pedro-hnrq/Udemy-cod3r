//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(4)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(7))
console.log(soma())

//Armazenando uma funcao em uma variavel
const imprimirSom = function (a, b){
    console.log(a+b)
} 
imprimirSom(5,6)

// Armazenando uma funcao arrow em uma variavel
const som = (a, b) => {
    return a + b
}
console.log(som(7,8))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4,7))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')