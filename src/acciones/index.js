import axios from 'axios';

const URL = '//reduxblog.herokuapp.com/api';
const API_KEY = '1234557';

export function cargaPost() {
    UNA_URL = `${URL}/posts${API_KEY}`;
    const sol = axios.get(UNA_URL);
    return {
        type: 'FETCH_POST',
        payload: sol
    }
}

// export const fetchPost = (post) => ({
//     type: 'FETCH_POST',
//     post
// });

