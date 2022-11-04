
import makeRequest from "../makeRequest";

export const post = async (token) => {
    return await makeRequest({
        url: '/api/auth',
        method: 'POST',
        data: {
            token,
        }
    });
}



