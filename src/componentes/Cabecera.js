import React from 'react';
const Cabecera = (props) => (<div className='cabecera-nota'>
        <div className='contenedor'>
                <h1 
                className='cabecera__titulo'
                >{props.titulo}</h1>
                
                {props.subtitulo && 
                <h3 
                className='cabecera__subtitulo'
                >{props.subtitulo}</h3> 
                }
        </div>
        </div> ); 
export default Cabecera;

Cabecera.defaultProps = {
        titulo: 'Indecisiones' };