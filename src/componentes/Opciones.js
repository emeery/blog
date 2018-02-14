import React from 'react';
import Opcion from './Opcion';
const Opciones = (props) => ( <div>
    <div className='widget-cabecera'>
        <h3 className='widget-cabecera__titulo'
        > Tus opciones </h3>
        <button 
        className='boton boton--link'
        onClick={props.resetArreglo}
        > Remover Todo. </button>
    </div>
    
    {props.opciones.length === 0 && <p
        className='widget__mensaje'
    > 
  
    Agrega una opción para empezar!</p> }

    

    {props.opciones.map((o, index) => (
        <Opcion 
        contador={index + 1} 
        key={o} 
        opcionNota={o} 
        removerOpcion={props.removerOpcion}
        /> 
            )) }
    </div>);
export default Opciones;