let contador = 1
while(contador < 10){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.9, 8.1, 7.7]
for(let i=0; i<notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

//  FOR/IN

const valr = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in valr){
    console.log(i, valr[i])
}
const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Silva',
    idade: 29, 
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
