const pessoa = {
    nome: 'Rebeca',
    idade: 22,
    peso: 39
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chaves, valor]) =>{
    console.log(`${chaves}: ${valor}`)
})
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, 
    value: '01/01/2022'
})

pessoa.dataNascimento = '01/01/2021'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)