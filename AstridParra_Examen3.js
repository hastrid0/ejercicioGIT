class Matriz{
    arreglo = [];
    size;
    constructor(arreglo){
        this.arreglo = arreglo;
        this.size = arreglo.length
    }
    operarMatriz(matriz2){
        for(let i= 0; i<=this.size; i++){
            console.log(this[i] +" + "+ matriz2[i] +" = %d", this[i]+matriz2[i]);
            console.log(this[i] +" * "+ matriz2[i] +" = %d", this[i]*matriz2[i]);
            console.log("-----------------------------------------------------");
        }
    }

}


let arr1 = new Matriz([3,2,1,1,2,3,2,3,1]);
let arr2 = new Matriz([1,1,2,2,1,1,1,2,1]);
arreglo1.operarMatriz(arreglo2);