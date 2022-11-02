import { HOST } from "./conf";
import axios from "axios";

export const postLogIn = async (email, password) => {
    let res = await axios.post(`${HOST}api/login`, {
        login: email,
        password
    });
    return res;
}

export const postAuth = async (token) => {
    console.log(token)
    let res = await axios.post('http://127.0.0.1:5000/api/auth',
        { token: token }
    );
    return res;
}


