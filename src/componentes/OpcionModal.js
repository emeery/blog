import React from 'react';
import Modal from 'react-modal';

// !!'test' = true
// !!undefined = false

const OpcionModal = (props) => (
<Modal 
    isOpen={!!props.opcionSeleccionada}
    onRequestClose={props.remueveModal} 
    contentLabel='Opcion Seleccionada'
    closeTimeoutMS={200}
    className='modal'
    >
    
    <h3 className='modal__title'
    > Opción Seleccionada.</h3>
    {props.opcionSeleccionada && 
    <p className='modal__cuerpo'
    > {props.opcionSeleccionada}</p>}
    
    <button 
    className='boton'
    onClick={props.remueveModal}
    >Okay </button>
    
</Modal>
);
export default OpcionModal;