import makeRequest from "../makeRequest";

export const get = async () => {
    return await makeRequest({
        url: '/api/workers',
        method: 'GET',
        headers:{
            set_cookie:true,
        }
    });
}
