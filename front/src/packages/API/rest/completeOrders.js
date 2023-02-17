import makeRequest from "../makeRequest";

export const post = async (filter) => {
    return await makeRequest({
        url: `/api/worker/worker_orders`,
        method: 'POST',
        data:{
            ...filter,
        },
        headers:{
            set_cookie:true
        }
    });
}
