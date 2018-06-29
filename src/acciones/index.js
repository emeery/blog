import axios from 'axios';

export const CARGA_POST = 'CARGA_POST';
export const CREAR_POST = 'CREAR_POST';
const URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=zfEFB3fGyIdwBeNfj56';

// ListaPost
export function cargaPost () {
    const request = axios.get(`${URL}/posts${API_KEY}`)
    .then(res => {console.log(res) })
    return {
        type: CARGA_POST,
        payload: request
    }      
}
// NuevoPost
export function crearPost(props) {
    const request = axios.post(`${URL}/posts?${API_KEY}`, props)
      .then( res => console.log(res) )
    return {
      type: CREAR_POST,
      payload: request
    }
}

