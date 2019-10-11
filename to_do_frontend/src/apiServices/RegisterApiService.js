import BaseApiService from './BaseApiService';

class RegisterApiService extends BaseApiService {
    register(data){
        this.api.post('/auth/register', data)
            .then(response => {
                console.log(response.data);
            })       
    }
}

const registerApiService = new RegisterApiService();
export default registerApiService;