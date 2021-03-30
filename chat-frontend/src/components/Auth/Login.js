import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import AuthService from '../../services/authService';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';
import 'Auth.scss';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(login({ email, password }, history))
       
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