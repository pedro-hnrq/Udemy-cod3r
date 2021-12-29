const escola = "Cod3r"

console.log(escola.charAt(4))// Trás só a posição do caracterio. 
console.log(escola.charAt(1))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))//Localizar o número.

console.log(escola.substring(1))
console.log(escola.substring(0,3))//Selecionar apresentração da String

console.log('Escola '.concat(escola).concat(" !"))//
console.log('Escola '+escola + " !")

// Substituir = Localizar e alterar o valor da variável.
console.log(escola.replace(3,'e'))
console.log(escola.replace(/\d/, 'e'))

console.log('Ana,Maria,Pedro'.split(','))//.split(/,/)

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
//Com Crase
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado')}!`)

console.log(typeof up)
console.log(typeof escola)
console.log(typeof 'template');
