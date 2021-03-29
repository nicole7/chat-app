import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import AuthService from '../../services/authService';
import 'Auth.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault()

        AuthService.login({ email, password })
            .then( res => console.log(res))

        // axios.post('http://127.0.0.1:3000/login', { email, password })
        //     .then(res => {
        //         console.log('res', res)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        console.log({email, password})
    }

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='Login' />
                    </div>
                    <div id='form-section'>
                        <h2>Welcome back</h2>
                        <form onSubmit={submitForm}>
                            <div className='input-field mb-1'>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Email'
                                    value={email}
                                    required='required'
                                    type='text'
                                >
                                </input>
                            </div>
                            <div className='input-field mb-2'>
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder='Password'
                                    value={password}
                                    required='required'
                                    type='password'
                                >
                                </input>
                            </div>
                            <button>LOGIN</button>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;