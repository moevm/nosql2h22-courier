import makeRequest from "../makeRequest";

export const post = async (value) => {
    return await makeRequest({
        url: `/api/orders`,
        method: 'POST',
        data:{
            ...value,
        },
        withCredentials: true,
        headers:{
            set_cookie:true
        }
    });
}
