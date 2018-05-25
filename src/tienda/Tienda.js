import { createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
import reducerLibros from '../reducers/reducerLibros';
import reducerLibroActivo from '../reducers/reducerLibroActivo';  

const componePotencia = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            libros: reducerLibros,
            libroActivo: reducerLibroActivo
        }),
        applyMiddleware(thunk)
    ); return tienda;
};