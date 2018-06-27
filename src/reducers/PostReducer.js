
import {CARGA_POST} from '../acciones/index';

const estadoInicial = { todos:[], unPost: null }
// PostReducer
export default function(state=estadoInicial, accion) {
    switch(accion.type) {
        case CARGA_POST:
            return {...state, todos: accion.payload.data }
        default:
            return state;
    }
}