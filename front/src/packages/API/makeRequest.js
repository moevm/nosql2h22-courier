import axios from "axios";
import { HOST } from './conf';

export default ({
    url='/',
    method='get',
    params = {},
    data = {},
    headers = {},
    HOSTC = HOST
    
}) => {
    url = HOSTC + url;
    return axios(
        {
            url,
            method,
            headers,
            params,
            data
        }
    )
};