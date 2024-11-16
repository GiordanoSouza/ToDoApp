import axios from 'axios';

const SERVER_URL = 'http://18.232.138.207:5800/api';

const registerUser = (data)=>{
    return axios.post(SERVER_URL+'/register', data);
}

const loginUser = (data)=>{
    return axios.post(SERVER_URL+'/login', data);
}

const authServices = {
    registerUser,
    loginUser
}


export default authServices;