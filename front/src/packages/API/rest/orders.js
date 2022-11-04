import makeRequest from "../makeRequest";

export const get = async (filters) => {
    return await makeRequest({
        url: `/api/orders?filters=${filters}`,
        method: 'GET'
    });
}
