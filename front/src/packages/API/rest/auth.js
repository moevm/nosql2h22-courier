
import makeRequest from "../makeRequest";

export const postAuth = async (token) => {
    return await makeRequest({
        url: '/api/auth',
        method: 'POST',
        data: {
            token,
        }
    });
}



