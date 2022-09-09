let num = window.prompt();

function generarMultiplos(numero){
    console.log('Numero dado %d ', numero)
    console.log('Multiplos:')
    for (let i = 1; i<=100; i++){
        console.log(numero*i);
    }

}

generarMultiplos(num)