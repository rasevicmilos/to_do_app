import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export default class BaseApiService {
    constructor() {
        axios.defaults.baseURL = API_URL;
        axios.defaults.headers.common = {
            "Authorization" : "Bearer" + localStorage.getItem('access_token')
        }
    }

    get api() {
        return axios;
    }

    setAuthorizationHeader(token) {
        axios.defaults.headers.common = {
            "Authorization": "Bearer " + token
        }
    }
}
