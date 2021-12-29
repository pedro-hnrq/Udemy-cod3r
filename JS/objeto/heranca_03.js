const pai = {nome: 'Henrique', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome:{ value: 'Bie', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(`Por herança: ${key}`)
}


//Heranca_06
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula ('Bem Vindo', 123)
const aula2 = new Aula ('Até Breve', 456)
console.log(aula1, aula2)

/// simulando o new
function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj

}

const aula3 = novo (Aula, "Bem Vindo", 123)
const aula4 = novo (Aula, 'Até Breve', 456)
console.log(aula3, aula4)
