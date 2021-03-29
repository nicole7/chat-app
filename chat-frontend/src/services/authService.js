import API from './api';

const AuthService = {
    login: (data) => {
        return API.post('/login', data)
            .then(res => {
                API.defaults.headers['Authoritation'] = `Bearer ${data.token}`
                return data;
            })
            .catch(error => {
                console.log("Auth service error")
                throw error
            })
    },
    register: (data) => {
        
    },
    logout: () => {

    }
}

export default AuthService;