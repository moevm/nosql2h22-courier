import axios from "axios";
import {setUser} from "../Reducers/reducer/userReducer";

export const Login =  (email, password) =>{
    return async dispatch =>{
            let res = await axios.post('api/login',{
                email,
                password
            });
            dispatch(setUser(res.data.user));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', res.data.user.email);
            return res.data;
    }
}

export const auth =  () =>{
    return async dispatch =>{
        try{

            let res = await axios.get('api/auth',
                {JWT:localStorage.getItem('token')}
            );
            dispatch(setUser(res.data.user));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', res.data.user.email);
        }catch (e) {
            alert(e.response.data.message);
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }
    }
}

