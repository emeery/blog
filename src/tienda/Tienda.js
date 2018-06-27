import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
import postReducer from '../reducers/postReducer';
import {reducer as formReducer} from 'redux-form';
const componePotencia = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            posts: postReducer,
            form: formReducer
        }),
        applyMiddleware(thunk)
    ); return tienda;
};