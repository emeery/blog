console.log('utils ');
export const square = (x) => x * x;
export const suma = (a) => a + a;
const sustraccion = (a,b) => a - b; // export default (a, b) =>
export default sustraccion;

//export {square, suma , sustraccion as default};



// class Contador extends React.Component {
//     constructor(props) {super(props);
//     this.state= {mensaje:'msje inicial'}}
//     componentDidMount() {
//         this.setState((prevState, props) => {return({mensaje: prevState.mensaje + '!'})})
//     }
//     render(){
//         console.log(this.state.mensaje);
//         return(<div>
//         {this.state.mensaje}
//         </div>); } 
// }


// class ViejaForma {
//     constructor(){this.nombre = 'Pedro';
//     this.unSaludo = this.unSaludo.bind(this);}
//     unSaludo(){ return `Hi, mi nombre es ${this.nombre}`;} }
// const viejaForma = new ViejaForma();
// const unSaludo = viejaForma.unSaludo;
// console.log(unSaludo());
// //console.log(viejaForma);

// class NuevaForma {
//     nombre = 'Leonardo';
//     unSaludo = () => { return `Hi, mi nombre es ${this.nombre}.`;}
// }
// const nuevaForma = new NuevaForma();
// const unSaludote = nuevaForma.unSaludo;
// console.log(unSaludote() );   