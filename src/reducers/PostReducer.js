
import {FETCH_POST} from '../acciones/index';

const estadoInicial = { todos:[], unPost: null }
// PostReducer
export default function(state=estadoInicial, accion) {
    switch(accion.type) {
        case FETCH_POST:
            return {...state, todos: accion.payload.data }
        default:
            return state;
    }
}