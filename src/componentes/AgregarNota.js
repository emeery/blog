import React from 'react';
class AgregarNota extends React.Component {
    state = {error:undefined}

   agregarUnaOpcion = (e) => { e.preventDefault(); 
       const opcion = e.target.elements.opcion.value.trim();
       const minuscula = opcion.toLowerCase();
       const error = this.props.agregarOpcion(minuscula); // props para comunicarse en los dos componentes
       // this.props.agregarOpcion es transmitido desde el padre.
       this.setState(() => ({error}));
       if (!error) { e.target.elements.opcion.value = '';}
       
    }
   render() { return(<div>
           {this.state.error && 
           <p className='agregar-opcion-error'>
           {this.state.error}</p> }
           
           <form 
           onSubmit={this.agregarUnaOpcion}
           className='agregar-opcion'
           >
           <input 
           className='agregar-opcion__entrada'
           type='text' 
           name='opcion' 
           placeholder='agrega una nota'/>
           
           <button 
           className='boton'
           > agrgar nota. </button>
           
           </form>
       </div>); }
} export default AgregarNota;