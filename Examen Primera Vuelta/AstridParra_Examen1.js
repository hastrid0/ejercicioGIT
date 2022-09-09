let sueldoHora = 265;
let sueldoHoraExtra = 350;
let pagoNormal;
let pagoExtra;
let pago;

function calcularSalario(horasTrabajadas){
    if(horasTrabajadas<=40){
        pago = horasTrabajadas*265;
        console.log("El total a pagar por horas laborales normal (%d hrs) es de: %d", horasTrabajadas,pago);
    }
    else{
        horasExtra = horasTrabajadas - 40;
        pagoNormal = 40 * 265;
        pagoExtra = horasExtra * 350;
        pago = pagoNormal + pagoExtra;
        console.log("El total a pagar por horas laborales normal (%d hrs) es de: %d ", 40,pagoNormal);
        console.log("El total a pagar por horas laborales extra (%d hrs) es de: %d ", horasExtra,pagoExtra);
    }

}
console.log(calcularSalario(53));