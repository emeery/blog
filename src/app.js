import React from 'react';
import ReactDOM from 'react-dom';
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
        <AppRouter />
    </Provider>
);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));

