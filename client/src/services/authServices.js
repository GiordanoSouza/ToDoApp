import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/api';

const registerUser = (data)=>{
    return axios.post(`${SERVER_URL}/register`, data);
}

const loginUser = (data)=>{
    return axios.post(`${SERVER_URL}/register`, data);
}

const authServices = {
    registerUser,
    loginUser
}


export default authServices;