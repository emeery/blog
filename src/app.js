import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import Tienda from './tienda/Tienda';

import 'normalize.css/normalize.css';
import './estilos/styles.scss';

const tienda = Tienda();

const jsx = (
    <Provider 
    store={tienda} 
    >
        <AppRouter/>        
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

