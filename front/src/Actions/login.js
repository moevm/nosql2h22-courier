
import { setUser } from "../Reducers/reducer/userReducer";
import request from "../packages/API/index";
import storage from "../packages/storage";

const emailRegExp = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])';


export const Login = (email, password, navigate, setError) => {

    return async dispatch => {

        try {
            const validEmail = new RegExp(emailRegExp);
            if (!validEmail.test(email)) throw { response: { data: "Неверный Email" } }

            let res = await request.login(email, password);

            dispatch(setUser(res.data.user));
            storage.token.setToken(res.data.token);
            storage.login.setLogin(res.data.user.login);
            
            if (res.status) navigate(`/main`)
            else throw { response: { data: "Неверный логин или пароль" } }

        } catch (error) {
            setError(error.response.data)
            console.log(error)
        }

    }
}

export const auth = (navigate) => {
    return async dispatch => {
        try {
            if(!storage.token.getToken()) return;

            let res = await request.auth(localStorage.getItem('token'))
            

            dispatch(setUser(res.data.user));
            storage.token.setToken(res.data.token);
            storage.login.setLogin(res.data.user.login);
        } catch (e) {
            navigate('/');
            storage.token.removeToken();
            storage.login.removeLogin();
        }
    }
}

