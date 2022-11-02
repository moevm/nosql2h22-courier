import makeRequest from "../makeRequest";

export const post = async () => {
    return await makeRequest({
        url: '/api/shifts',
        method: 'POST'
    });
}
