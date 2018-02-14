// un hombre mojado no teme a la lluvia
// inverted cuotes, gundamea, antes el +
// llamar funcion de un objeto padre
// variable + string
class Persona {
    constructor(name='anonimo',edad=8){
        this.name = name;
        this.edad = edad; }
    
    unSaludo(){ return `hola, tu nombre es ${this.name}` }
    obtenerDescripcion(){ return `${this.name} tiene ${this.edad} de edad `;} 
    
}

class Estudiante extends Persona { 
    constructor(name, edad, grado){
        super(name, edad);
        this.grado = grado; } 
    obtenerNombre() {return !!this.name;}
    elGrado() {return !!this.grado;}
    obtenerDescripcion() {let descrip = super.obtenerDescripcion();
        if(this.elGrado) {descrip += `con un grado en ${this.grado}`} 
    return descrip;}
    }

class Viajero extends Estudiante {
    constructor(name, edad, locacion) {
        super(name, edad); this.locacion = locacion; }
    unSaludo() { let saludo = super.unSaludo();
    if(this.locacion) {
        saludo += ` y nos visitas desde ${this.locacion}`
        return saludo;
    } }
}
const me = new Persona('Jerry', 27);
//console.log(me.unSaludo());
console.log(me.obtenerDescripcion());
const otro = new Persona();
console.log(otro.obtenerDescripcion());

 const student = new Estudiante('Pablo', 29, 'Ingeniería');
// console.log(student.unSaludo()); // hola, soy anonimo
 console.log(student.obtenerDescripcion()); // return 'testing';

 const traveler = new Viajero('Jerry', 27, 'Distrito Federal');
 console.log(traveler.unSaludo());
 const me2 = new Viajero();
 console.log(me2.obtenerDescripcion());


let visible = false;
const mostrar = () => {visible = !visible; render(); }
const render = () => {
    const JSX = (
        <div><h1>Visible?</h1>
        <button onClick={mostrar}>{visible ? 'mostrar detalles':'cerrar detalles'}</button>
        {visible && (
            <div><p>oyeme</p></div>
        )}
        </div>
    );
    ReactDOM.render(JSX, document.getElementById('app'));
};
render();
