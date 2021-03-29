import React from 'react';
import registerImage from '../../assets/images/login.svg';
import 'Auth.scss';

const Register = () => {
    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Login' />
                    </div>
                    <div id='form-section'>
                        <h2>Create an Account</h2>
                        <form>
                        <div className='input-field mb-1'>
                                <input placeholder='First name'>
                                </input>
                            </div>
                            <div className='input-field mb-1'>
                                <input placeholder='Last Name'>
                                </input>
                            </div>
                            <div className='input-field mb-1'>
                                <input placeholder='Last Name'>
                                </input>
                            </div>
                            <div className='input-field mb-1'>
                                <select value='male'>Male</select>
                                <select value='female'>Female</select>
                            </div>
                            <div className='input-field mb-2'>
                                <input placeholder='Password'>
                                </input>
                            </div>
                            <button>REGISTER</button>
                        </form>
                        <p>Already have an account? Login</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;