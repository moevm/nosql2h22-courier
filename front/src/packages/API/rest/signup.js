
import makeRequest from "../makeRequest";

export const post = async (first_name,second_name,fathers_name='',email, password) => {
    return await makeRequest({
        url: '/api/singUp',
        method: 'POST',
        data: {
            first_name,
            second_name,
            fathers_name,
            login: email,
            password
        }
    });
}
