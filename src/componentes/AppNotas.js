import React from 'react';

import Opcion from './Opcion';
import Accion from './Accion';
import Cabecera from './Cabecera';
import Opciones from './Opciones'; 
import AgregarNota from './AgregarNota';
import OpcionModal from './OpcionModal';
// NO TE VEO TECLEANDO !!
// https://github.com/github/fetch
/* biblioteca (library) : 
 coleecion de implmentaciones 
   de comportamiento. */
/* compotamiento : 
    conjunto de acciones
     */
class AppNotas extends React.Component {
    state = {
        opciones: [], 
        opcionSeleccionada:undefined 
    };
    // handleDeleteOptions
    resetArreglo = () => { this.setState(() => ({
        opciones:[] })); 
    }
    // handleClearSelectedOption
    remueveModal = () => { this.setState(() => ({
        // vuelve a ser falso !!undefined = false
        opcionSeleccionada:undefined })); 
    }
    // handleDeleteOptions
    removerOpcion = (opcionARemover) => { 
        this.setState((prevState) => ({
            // filter crea un nuevo arreglo con todos los elementos que cumplan la condicion
        opciones: prevState.opciones.filter(
        (opcion) => opcionARemover !== opcion )}));
    }    
    // handlePick
    seleccionaArreglo = () => {
        const numeroAleatorio = Math.floor(Math.random() * this.state.opciones.length);
        const opcion = this.state.opciones[numeroAleatorio];
        this.setState(() => ({
            opcionSeleccionada: opcion
        }));
    }   
    agregarOpcion = (opcion) => { 
        // solo si hay un array vacio se imprime    
        // devuelve -1 si no se encuentra el elemento en la matriz, si si devuelve el indice donde se encuentra|
        if (!opcion) { 
            return 'ingresa un valor valido';
        } else if (this.state.opciones.indexOf(opcion) > -1) { 
            return 'esta opcion ya fué agregada'; } 
        this.setState((prevState)=>({
            opciones: prevState.opciones.concat(opcion) 
        }));
    }
    
    
    
    componentDidMount() {
        try {
            const json = localStorage.getItem('opciones');
            const opciones = JSON.parse(json);
            if(opciones) { this.setState(()=>({
                opciones })); 
            } 
            } catch (e) { }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.opciones.length !== this.state.opciones.length) {
            const json = JSON.stringify(this.state.opciones);
            localStorage.setItem('opciones', json); }
    }
    render() { 
        //Cabecera - titulo, subtitulo
        //Accion - Que deberia hacer
        //Opciones, Opcion - Removertodo, Opcion: 1 elemento
        // AgregarNota - Form, OnSubmit
        // OpcionModal - , remueveModal, opcionSeleccionada, closeTimeoutMS, isOpen
        

        //const titulo = 'App Notas';
        const subtitulo = 'Un lugar para ellos.';
        return(<div>
        <Cabecera 
        titulo=' Grandes Decisiones' 
        subtitulo={subtitulo}
        />
            <div className='contenedor'>
                <Accion 
                seleccionaArreglo={this.seleccionaArreglo} 
                hayOpciones={this.state.opciones.length > 0 }
            />
                <div className='widget'>
                    <Opciones 
                    removerOpcion={this.removerOpcion} 
                    opciones={this.state.opciones} 
                    resetArreglo={this.resetArreglo}
                    />
                    <AgregarNota 
                    agregarOpcion={this.agregarOpcion}
                    />  
                </div>
                
            </div>
                <OpcionModal 
                remueveModal={this.remueveModal} 
                opcionSeleccionada={this.state.opcionSeleccionada}
                />
            
        </div>); }
}; export default AppNotas;
