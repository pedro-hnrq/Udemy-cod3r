const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

Array.prototype.forEach2 = function (calbalk) {
    for (let i = 0; i < this.length; i++){
        calbalk(this[i], i, this)
    }
}

const aprovados2 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados2.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
