import API from './api';

const AuthService = {
    login: (data) => {
        return API.post('/login', data)
            .then(res => {
                // API.defaults.headers['Authoritation'] = `Bearer ${data.token}`
                setHeaderAndStorage(data)
                return data;
            })
            .catch(error => {
                console.log("Auth service error")
                throw error
            })
    },
    register: (data) => {
        return API.post('/register', data)
            .then(res => {
                // API.defaults.headers['Authoritation'] = `Bearer ${data.token}`
                setHeaderAndStorage(data)
                return data;
            })
            .catch(error => {
                console.log("Auth service error")
                throw error
            })
    },
    logout: () => {
        API.defaults.headers['Authoritation'] = '';
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }
}

const setHeaderAndStorage = ({ user, token }) => {
    API.defaults.headers['Authoritation'] = `Bearer ${token}`
       //cant user plain objects in local storage - must change to strings!
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
}

export default AuthService;