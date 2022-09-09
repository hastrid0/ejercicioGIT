for(let i=0; i<5; i++){
    var numero = Math.floor( Math.random()*100);
    console.log('Numero generado: %d', numero)
    if (numero % 2 == 0){
        console.log('El numero es par')
    }
    else {
        console.log('El numero es impar')
    }
}