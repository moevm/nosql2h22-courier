import makeRequest from "../makeRequest";

export const post = async (email) => {
    return await makeRequest({
        url: `/api/user/my_orders`,
        method: 'GET',
        data: {
            login: email
        },
        headers:{
            set_cookie:true
        }
    });
}
