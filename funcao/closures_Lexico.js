// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variávesi externas à função

// Contexto léxico em Ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFucao = fora()
console.log(minhaFucao())