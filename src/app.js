import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';

import AppRouter from './routes';
import reducers from './reducers';

const tienda = applyMiddleware()(createStore);

const jsx = (
    <Provider 
    store={tienda(reducers)} 
    >
    <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

