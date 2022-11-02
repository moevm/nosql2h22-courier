import makeRequest from "../makeRequest";

export const post = async (id) => {
    return await makeRequest({
        url: '/api/tracker/find',
        method: 'POST',
        data: {
            id
        }
    });
}
