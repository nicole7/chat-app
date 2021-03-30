import AuthService from '../../services/authService';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';


export const login = (params, history) => dispatch => {
    AuthService.login(params)
        .then(data =>
            dispatch({ type: LOGIN, payload: data }),
            history.push('/')
        )
        .catch(error => {

        })
}

export const register = (params, history) => dispatch => {
    AuthService.register(params)
        .then(data =>
            dispatch({ type: REGISTER, payload: data }),
            history.push('/')
        )
        .catch(error => {

        })
}

export const logout = () => dispatch => {
    AuthService.logout()
    dispatch({ type: LOGOUT })
}