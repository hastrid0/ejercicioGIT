let cadena = window.prompt();
let caracter = window.prompt();
let contador =0;
for(let letra of cadena){
    if(letra === caracter){
        contador +=1;
    }
}
console.log('El caracter "%s" se repite: %d  veces en la frase: "%s" .',caracter,contador,cadena)

