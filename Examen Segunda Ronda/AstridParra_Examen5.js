class Persona{
    nombre;
    apellido;
    edad;

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getDetalles(){
        console.log('Nombre: %s , Apellido: %s , Edad: %d', this.nombre,this.apellido,this.edad)
    }
}

class Jugador extends Persona {
    posicion;

    constructor(nombre,apellido,edad,posicion){
        super(nombre,apellido,edad);
        this.posicion = posicion;
    }
    getDetalles(){
        console.log(super.getDetalles()+ ' Posicion: %s', this.posicion)
    }
}

class Entrenador extends Persona{
    aniosExperiencia;
    idFederacion;

    constructor(nombre,apellido,edad,experiencia, id=Math.floor( Math.random()*100000)){
        super(nombre,apellido,edad);
        this.aniosExperiencia = experiencia;
        this.idFederacion = id
    }
    getDetalles(){
        console.log(super.getDetalles())
        console.log('Años de experiencia: %d, id de Federación: %d', this.aniosExperiencia,this.idFederacion)
    }
}
class Equipo {
    
    entrenador;
    jugadores;

    constructor(entrenador,jugadoresArr){
        this.entrenador = entrenador;
        this.jugadores = jugadoresArr;
    }

    getDetalles(){
        console.log('Entrenador: ', entrenador.getDetalles());
        console.log('Jugadores: ', this.jugadores);
    }   
}
let jugador1 = new Jugador('Giovanny','Romero',22,'Delantero')
let jugador2 = new Jugador('Cristhian','Franco',22,'Defensa')
let jugador3 = new Jugador('Anthony','Sarmiento',23,'Medio')
let jugador4 = new Jugador('Julio','Parra',25,'Portero')

let jugadores = [ jugador1,jugador2,jugador3,jugador4]

let entrenador = new Entrenador('Astrid', 'Parra',22,3);
let equipo = new Equipo(entrenador,jugadores)

equipo.getDetalles();