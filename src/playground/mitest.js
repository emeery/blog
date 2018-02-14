// es6 , unSaludo, obtenerDescripcion
class Persona {
    constructor(nombre='anonimo',edad=8,) {
        this.nombre = nombre;
        this.edad = edad;}
    unSaludo () { return `tu nombre es: ${this.nombre}` }
    obtenerDescripcion  () { return `tu nombre es ${this.name} tu edad es de ${this.edad}`}
}
class Estudiante {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }
    nivelGrado() {return !!this.grado; }
    obtenerDescripcion() { let descrip = super.obtenerDescripcion();
    return descrip += `con el grado especializado en ${this.grado}` }
}
const me = new Estudiante('Semione', 38, 'Director de Fùtbol');
consoloe.log(me.obtenerDescripcion());

const other = new Estudiante('Jerry', 27, 'Ingeniero en Sistemas')
console.log(other.obtenerDescripcion());