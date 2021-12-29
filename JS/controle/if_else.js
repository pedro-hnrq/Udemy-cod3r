function soBoaNoticia (not){
    if (not >= 7) {// Poderá usar sem as chaves
        console.log('Aprovado com ', not)
    }
}
soBoaNoticia(8.7)
soBoaNoticia(6.3)

function seForVerdadeEuFalo (valor){
    if (valor) {
        console.log('Aprovado com ', valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})

Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado = function(nota){
    if (nota.entre(9,10)){
        console.log('1) Qadro de Honra')
    }else if(nota.entre(7, 8.99)){
        console.log('2) Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('3) Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('4) Reprovado')
    }else{
        console.log ('5) Nota inválida')
    }
    
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)


