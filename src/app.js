import React from 'react';
import ReactDOM from 'react-dom';
import AppNotas from './componentes/AppNotas';
import 'normalize.css/normalize.css';
import './estilos/styles.scss';
// boleano, exit, MABG900927HDFNTR04, pueden ser suficientes, localStorage.setItem, getItem, 
// removeItem, solo trabaja con datos string, parse & stringify, persistencia
// se establece cuando se actualiza


ReactDOM.render(<AppNotas/>, document.getElementById('app'));

