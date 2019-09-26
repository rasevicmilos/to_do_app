import BaseApiService from './BaseApiService';

class LoginApiService extends BaseApiService {
    login(data){
        return this.api.post('/auth/login', data)
            .then(response => {
                localStorage.setItem('access_token', response.data.access_token);
                let token = response.data.access_token;
                this.setAuthorizationHeader(token);
            });
    }
    logout() {
        return this.api.post('/auth/logout')
            .then(response => {                
                localStorage.removeItem('access_token');
            });
    }
}

const loginApiService = new LoginApiService();
export default loginApiService;