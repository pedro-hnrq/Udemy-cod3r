const pessoa = {
    saudacao: 'Bom Dia',
    falar (){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pess(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}
new Pess
