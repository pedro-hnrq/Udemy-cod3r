/** Tipos de Chamadas de Função */


dobro = (a) => { //ou  let dobro = function (a){return 2* a } 
    return 2 * a
}
//ou
dobro = a =>  2* a // return implícito 


let ola = function(){
    return 'Olá'
}
//ou
ola = () => 'Olá Mundo'
//ou
ola1 = _ => 'Olá'// possui um param
console.log(ola(),ola1())

let comparaComThis = (param) => {
    console.log (this == param)
}
comparaComThis(global)

const obj= {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)