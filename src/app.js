import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import Tienda from './tienda/Tienda';
import 'normalize.css/normalize.css';
import './estilos/styles.scss';

const tienda = Tienda();

const Escritorio = () => (<div>
    dashboard
    </div>
)

const Ayuda = () => (<div>
    Ayuda
    </div>
)

const jsx = (
    <Provider 
    store={tienda} 
    >
    
        <BrowserRouter>
        <div>
            <Route path="/" component={Escritorio} exact={true}/>
            <Route path="/ayuda" component={Ayuda}/>
        </div>    
        </BrowserRouter>
    
        
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

