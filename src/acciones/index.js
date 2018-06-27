import axios from 'axios';

export const CARGA_POST = 'CARGA_POST';
export const CREAR_POST = 'CREAR_POST';
const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '1234557';

// ListaPost
export function cargaPost () {
    const solicitud = axios.get(URL)
    return {
        type: CARGA_POST,
        payload: solicitud
    }      
}
// NuevoPost
export function crearPost(props) {
    const request = axios.post(`${URL}/posts?${API_KEY}`, props)
      .then( res => console.log(res) )
    return {
      type: CREAR_POST,
      payload: request,
    };
}

