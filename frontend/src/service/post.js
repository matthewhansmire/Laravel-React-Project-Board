import axios from 'axios';

import {getToken} from './token';


const postData = (url, item) => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL + url;
    const token = getToken();
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    console.log('post item', item)

    return axios.post(apiUrl, item, config).then(response => {        
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {        
        var message = '';
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 500: message = "Server error"; break;
                case 401: message = "Unauthorized error"; break;
                case 400: message = "Something error"; break;
                default: message = err[1]; break;
            }
        }        
        throw message;
    });
}

export { postData }