import { setUser } from "../Reducers/reducer/userReducer";
import request from "../packages/API";
import storage from "../packages/storage";
import isValidData from "../Components/isValidData";

const role = {
    u: "client",
    a: "accountant",
    c: "courier",
    d: "driver"
}

export const Login = (email, password, navigate, setError) => {

    return async dispatch => {

        try {
            
            if (!isValidData(email)) throw { response: { data: "Неверный Email" } }

            console.log(request);
            let res = await request.login.post(email, password);
            res.data.user.type = role[res.data.user.type];

            dispatch(setUser(res.data.user));
            storage.token.setToken(res.data.token);
            storage.login.setLogin(res.data.user.login);
            
            if (res.status) navigate(`/main`)
            else throw { response: { data: "Неверный логин или пароль" } }

        } catch (error) {
            console.log(error)

            setError(error.response.data)
        }

    }
}

export const auth = () => {
    return async dispatch => {
        try {
            if(!storage.token.getToken()) return;

            let res = await request.auth.post(localStorage.getItem('token'))
            res.data.user.type = role[res.data.user.type];

            dispatch(setUser(res.data.user));
            storage.token.setToken(res.data.token);
            storage.login.setLogin(res.data.user.login);
            if (window.location.pathname == '/' || window.location.pathname == '/loading') window.location = '/main';
            
        } catch (e) {
            storage.token.removeToken();
            storage.login.removeLogin();
            if (window.location.pathname !== '/') window.location = '/';
        }
    }
}