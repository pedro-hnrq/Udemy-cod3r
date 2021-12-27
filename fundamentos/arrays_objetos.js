/* 
    ARRAYS
*/
const val = [7.7, 8.9, 6.3, 9.2]//inicia no 0 
console.log(val[0], val[3])
console.log(val[4])

val [6] = 10
console.log(val)
console.log(val.length)//length = retornar a quantidade no array

val.push({id: 3}, false, null, 'teste')
console.log(val)

console.log(val.pop())
delete val[0]
console.log(val)

console.log(typeof val)

/* 
    OBJETOS
*/

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90
prod1['Desconto Legal'] = 0.40 //Evitar atribuitos com espaço

console.log(prod1)

const pord2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
console.log(pord2)