const PI = 3.141592;
const raio = 10;
let areaCirc = PI * raio * raio;

console.log("O valor da área é " + areaCirc + "m2.");

areaCirc = Math.PI * raio * raio;//Math.PI traz o núnero do PI
console.log("O valor da área é " + areaCirc + "m2.")

//Enverte as variários, dois modos.
    
let a = 7;
let b = 94;
    // 1º Modo
//let temp = a; a = b; b = temp;
    // 2º Modo
[a,b] = [b,a]

console.log(a);
console.log(b);