import makeRequest from "../makeRequest";

export const get = async () => {
    return await makeRequest({
        url: `/api/orders`,
        method: 'POST',
        withCredentials: true,
        headers:{
            set_cookie:true
        }
    });
}
