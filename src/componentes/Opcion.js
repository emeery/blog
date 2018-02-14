// imr 
import React from 'react';
const Opcion = (props) => ( <div className='opcion'>
    <p 
    className='opcion__titulo'>
    {props.contador} . 
    {props.opcionNota} </p>
    <button
    className='boton boton-link' 
    onClick={(e) =>{ 
        props.removerOpcion(props.opcionNota) }}
    > x </button>
</div> );
 export default Opcion;

// class Opcion extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return( <div className='opcion'>
//     <p 
//     className='opcion__titulo'>
//     {props.contador} . 
//     {props.opcionNota} </p>
//     <button
//     className='boton boton-link' 
//     onClick={(e) =>{ 
//         props.removerOpcion(props.opcionNota) }}
//     > x </button>
//     </div> );
//     }
// }
// export default Opcion;