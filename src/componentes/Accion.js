import React from 'react';
const Accion = (props) => ( <div>
        
        <button 
        className='boton-grande' 
        onClick={props.seleccionaArreglo} 
        disabled={!props.hayOpciones}>
        que deberia hacer
        </button>
</div>);

export default Accion;