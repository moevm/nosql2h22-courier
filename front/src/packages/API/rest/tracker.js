import makeRequest from "../makeRequest";

export const post = async (_id) => {
    return await makeRequest({
        url: '/api/tracker/find',
        method: 'POST',
        data: {
            _id
        }
    });
}
