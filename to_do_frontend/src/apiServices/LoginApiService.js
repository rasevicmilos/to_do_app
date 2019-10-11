import BaseApiService from './BaseApiService';

class LoginApiService extends BaseApiService {
    login(data){
        return this.api.post('/auth/login', data).then((response) => {
            this.setAuthorizationHeader(response.data.access_token);
            return response;
        });
    }
    logout() {
        return this.api.post('/auth/logout')
            .then(response => {                
                localStorage.removeItem('access_token');
            });
    }
    getUser(token) {
        return this.api.post('/auth/me');
    }
}

const loginApiService = new LoginApiService();
export default loginApiService;