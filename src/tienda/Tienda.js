import { createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
//import rootReducer from '../reducers/index';
import postReducer from '../reducers/postReducer';
const componePotencia = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            post: postReducer
        }),
        applyMiddleware(thunk)
    ); return tienda;
};