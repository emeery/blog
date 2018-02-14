// boleano, exit, MABG900927HDFNTR04, pueden ser suficientes, localStorage.setItem, getItem, 
// removeItem, solo trabaja con datos string, parse & stringify, persistencia
// se establece cuando se actualiza
class AppNotas extends React.Component {
    constructor(props) {super(props);
        this.state = {opciones : [] };
        this.resetArreglo = this.resetArreglo.bind(this); // boton remover
        this.seleccionaArreglo = this.seleccionaArreglo.bind(this); // alert()
        this.agregarOpcion = this.agregarOpcion.bind(this); //
        this.removerOpcion = this.removerOpcion.bind(this); 
    }
    // componentDidMount() {
    //     const json = localStorage.getItem('opciones');
    //     const opciones = JSON.parse(json);
    //     this.setState(()=>({ opciones })); // sst comando
    // } // buscando
    componentDidMount() {
        try {
            const json = localStorage.getItem('opciones');
            const opciones = JSON.parse(json);
            if(opciones) { this.setState(()=>({opciones})); } 
        } catch (e) {
            // do nothing at all
        }
        
    }
        
    componentDidUpdate(prevProps, prevState) {
        if(prevState.opciones.length !== this.state.opciones.length) {
            const json = JSON.stringify(this.state.opciones);
            localStorage.setItem('opciones', json); }
    }
    
    // componentWillMount() {console.log('componente desmontado'); }
    
    resetArreglo() { this.setState(() => ({opciones:[] })); }
    seleccionaArreglo() {const numeroAleatorio = Math.floor(Math.random() * this.state.opciones.length);
        const opcion = this.state.opciones[numeroAleatorio];
        alert(opcion);
    }    
    agregarOpcion(opcion) { 
        // solo si hay un array vacio se imprime    
        // devuelve -1 si no se encuentra el elemento en la matriz, si si devuelve el indice donde se encuentra|
        if (!opcion) { return 'ingresa un valor valido';
            } else if (this.state.opciones.indexOf(opcion) > -1) { return 'esta opcion ya fué agregada'; } 
        this.setState((prevState)=>({opciones: prevState.opciones.concat(opcion) }));
        // 
    }
    removerOpcion(opcionARemover){ // filter crea un nuevo arreglo con todos los elementos que cumplan la condicion
        this.setState((prevState) => ({opciones: prevState.opciones.filter((opcion) => opcionARemover !== opcion)
    })); }
    // pasa una funcion como propiedad seleccionaArreglo 
    render() { 
        const titulo = 'App Notas';
        const subtitulo = 'Un lugar para tus notas.';
        return(<div>
        <Cabecera titulo={titulo} subtitulo={subtitulo}/>
        <Accion seleccionaArreglo={this.seleccionaArreglo} hayOpciones={this.state.opciones.length > 0 }/>
        <Opciones removerOpcion={this.removerOpcion} opciones={this.state.opciones} resetArreglo={this.resetArreglo}/>
        <AgregarNota agregarOpcion={this.agregarOpcion}/>  
        <p>************</p>
      
        </div>); }
}
//AppNotas.defaultProps = {opciones:[]};
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
const Cabecera = (props) => {
    return(<div>
        <h2>{props.titulo}</h2>
        {props.subtitulo && <h3>{props.subtitulo}</h3>}
        </div>); }
// Cabecera.defaultProps = {titulo:'Titulo Reemplazo'};
const Accion = (props) => {
    return( <div>
        <button onClick={props.seleccionaArreglo} 
        disabled={!props.hayOpciones}>
        que deberia hacer
        </button>
    </div>); }

const Opciones = (props) => {
    return(<div>
        <button onClick={props.resetArreglo}>Remover Todo.</button>
        {props.opciones.length === 0 && <p> inserta algun item </p> }
        {props.opciones.map((o) => (
            <Opcion key={o} opcionTexto={o} removerOpcion={props.removerOpcion}/>)) }
    </div>); }

const Opcion = (props) => {
    
    return(<div>
        <h3>Esta: {props.opcionTexto}</h3>
        <button onClick={(e) =>{ props.removerOpcion(props.opcionTexto) }}>x</button>
    </div>
); }

class AgregarNota extends React.Component {
     constructor(props){ super(props); 
        this.agregarOpcion = this.agregarOpcion.bind(this);
        this.state = {error:undefined};  }
    agregarOpcion(e)  { e.preventDefault(); 
        const opcion = e.target.elements.opcion.value.trim();
        const error = this.props.agregarOpcion(opcion); // props para comunicarse en los dos componentes
        // this.props.agregarOpcion es transmitido desde el padre.
        this.setState(() => ({error}));
        if (!error) { e.target.elements.opcion.value = '';}
        
      }
    render() { return(<div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.agregarOpcion}>
            <input type='text' name='opcion' placeholder='agrega una nota'/>
            <button >agrgar nota.</button>
            </form>
        </div>); }
}

ReactDOM.render(<AppNotas/>, document.getElementById('app'));

// const jsx = (<div>
//         <Cabecera titulo='App Notas '/>
//         <Accion/>
//         <Opciones/>
//         <AgregarNota/>  
//     </div>);