//Ejercicio bonus

let palabra = window.prompt();

let indice = palabra.indexOf('.')
let caracteres = palabra.slice(0,indice)
let nuevaPalabra = caracteres.toUpperCase() + palabra.slice(indice,);


console.log('Entrada: %s ',palabra)
console.log('Salida: %s', nuevaPalabra)