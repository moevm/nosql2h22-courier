import { setUser } from "../Reducers/reducer/userReducer";
import request from "../packages/API";
import storage from "../packages/storage";
import isValidData from "../Components/isValidData";

export const Registration = async (
    firstName,
    secondName,
    fatherName,
    email,
    password,
    navigate,
    setError) => {

    try {
          
        if (!isValidData(email)) throw { response: { data: "Неверный Email" } }

        let res = await request.signup.post(firstName, secondName, fatherName, email, password);

        if (!res.status) throw { response: { data: "Что-то пошло не так..." } }
        return true;
    } catch (error) {
        console.log(error);
        setError(error.response.data);
        return false;
    }

}
