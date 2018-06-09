import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';

const URL = 'http://reduxblog.herokuapp.com/api/posts';
//const API_KEY = '1234557';
//const UNA_URL = `${URL}/posts${API_KEY}`;
export function cargaPost () {
    const solicitud = axios.get(URL)
    .then( res => {
        console.log(res)
    })
    return {
        type: FETCH_POST,
        payload: solicitud
    }      
}



