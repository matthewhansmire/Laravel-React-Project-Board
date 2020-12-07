import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000
});

// Login Method
const postLogin = (url, data) => {
    return axiosInstance.post(url, data).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status) {
            switch (err.response.status) {                
                case 500: message = "Sorry! something went wrong, Server error"; break;
                case 421: message = "Password mismatch"; break;
                case 422: message = "User does not exist"; break;
                default: message = err[1]; break;
            }
            console.log('login error', err)
        }
        throw message;
    });
}

// Register
const postRegister = (url, data) => {
    return axiosInstance.post(url, data).then(response => {
        if (response.status >= 200 || response.status <= 299)
            return response.data;
        throw response.data;
    }).catch(err => {
        var message;
        if (err.response && err.response.status) {
            switch (err.response.status) {
                case 500: message = "Sorry! something went wrong, Server error"; break;
                case 401: message = "Validation error or already registered email"; break;
                default: message = err[1]; break;
            }
        }
        throw message;
    });
}

// postForgetPwd 
const postForgetPwd = (url, data) => {
    return axiosInstance.post(url, data).then(response => {
        if (response.status === 400 || response.status === 500)
            throw response.data;
        return response.data;
    }).catch(err => {
        throw err[1];
    });
}

export { postLogin, postRegister, postForgetPwd }