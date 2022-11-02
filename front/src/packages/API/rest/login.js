import makeRequest from "../makeRequest";

export const post = async (email, password) => {
    return await makeRequest({
        url: '/api/login',
        method: 'POST',
        data: {
            login: email,
            password
        }
    });
}
