import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
import ReduxPromise from 'redux-promise'; 
import postReducer from '../reducers/PostReducer';
import {reducer as formReducer} from 'redux-form';
const componePotencia = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            posts: postReducer,
            form: formReducer
        }),
        applyMiddleware(ReduxPromise)
    ); return tienda;
};