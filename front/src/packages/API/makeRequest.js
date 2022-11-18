import axios from "axios";
import { HOST, jwtToken } from './conf';

export default ({
    url='/',
    method='get',
    params = {},
    data = {},
    headers = {},
    withCredentials = false,
    HOSTC = HOST
}) => {

    url = HOSTC + url;
    if(headers && headers.set_cookie) {
        headers.set_cookie = jwtToken;
    }


    return axios(
        {
            url,
            method,
            withCredentials,
            headers,
            params,
            data,
        }
    )
};