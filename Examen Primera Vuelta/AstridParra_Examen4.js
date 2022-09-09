class Empleado extends Persona{
    tipo;
    diasLaborados = Math.round(Math.random() * (15 - 5) + 5);;
    salario;
    constructor(nombre,apellido){
        super(nombre,apellido)
        this.tipo = this.tipo;
    }

    getDetalles(){
        console.log("Nombre: %s, Apellido: %s, Edad: %d,Tipo: %s",this.nombre, this.apellido,tis.edad, this.tipo);
    }
    setSalario(monto){
        this.salario = monto;
    }

}
class Persona{
    nombre;
    apellido;
    edad;
    
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
      
    }
    getDetalles(){
        console.log("Nombre: %s, Apellido: %s, Edad: %d",this.nombre, this.apellido, this.edad)
    }
}

class Nomina{
    
    arregloEmpleados = [];
    constructor(arrEmpleado){
        this.arregloEmpleados = arrEmpleado;
    }
    //calcular el pago de un empleado
    calcularPago(empleado){
        if(empleado.tipo == 'S'){
            salario = (empleado.diasLaborados * 250) - (250 * 0.13);
            empleado.salario = salario;
        }
        else {
            salario = (empleado.diasLaborados * 500) - (500 * 0.1);
            empleado.salario = salario;
        }
        
    }
    //calcular el pago de todos los empleados a la vez
    calcularPagoTodos(){
        for(let empleado in this.arregloEmpleados){
            if(empleado.tipo == 'S'){
                salario = (empleado.diasLaborados * 250) - (250 * 0.13);
                empleado.salario = salario;
            }
            else {
                salario = (empleado.diasLaborados * 500) - (500 * 0.1);
                empleado.salario = salario;
            }
        }
        
        
    }

    calcularNomina(){
        for(let empleado in this.arregloEmpleados){
            if(empleado.tipo == 'S')
                console.log("%s de %d - %s pertenece a Empleado de Sindicato con un sueldo de: %d, por %d dias trabajados ",empleado.nombre, empleado.edad, empleado.tipo, empleado.salario, empleado.diasLaborados);
            else{
                console.log("%s de %d - %s pertenece a Empleado de confianza con un sueldo de: %d, por %d dias trabajados ",empleado.nombre, empleado.edad, empleado.tipo, empleado.salario, empleado.diasLaborados);
            }
        }

    }
}