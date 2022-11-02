import makeRequest from "../makeRequest";

export const postLogIn = async (email, password) => {
    return await makeRequest({
        url: '/api/login',
        method: 'POST',
        data: {
            login: email,
            password
        }
    });
}
