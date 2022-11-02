import { setUser } from "../Reducers/reducer/userReducer";
import request from "../packages/API";
import storage from "../packages/storage";

export const Registration = ( 
    firstName,
    secondName,
    fatherName,
    email,
    password,
    navigate,
    setError) => {

    return async dispatch => {

        try {
         
            let res = await request.signup.post(firstName,secondName,fatherName,email, password);

            if (!res.status) throw { response: { data: "Что-то пошло не так..." } }
        } catch (error) {
            console.log(error);
            setError(error);
            
        }

    }
}
