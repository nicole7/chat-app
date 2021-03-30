import React, {useState} from 'react';
import registerImage from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';
import 'Auth.scss';

const Register = ({ history }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('Female');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()

        dispatch(register({ firstName, lastName, gender, email, password }, history))
    }

    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={registerImage} alt='Login' />
                    </div>
                    <div id='form-section'>
                        <h2>Create an Account</h2>
                        <form onSubmit={submitForm}>
                        <div className='input-field mb-1'>
                                <input
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder='First name'
                                    value={firstName}
                                    required='required'
                                    type='text'
                                >
                                </input>
                            </div>
                            <div className='input-field mb-1'>
                                <input
                                    onChange={e => setLastName(e.target.value)}
                                    placeholder='Last Name'
                                    value={lastName}
                                    required='required'
                                    type='text'
                                >
                                </input>
                            </div>
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
                            <div className='input-field mb-1'>
                            <input
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder='Password'
                                    value={password}
                                    required='required'
                                    type='password'
                                >
                                </input>
                            </div>
                            <div className='input-field mb-1'>
                                <select
                                    onChange={e => setGender(e.target.value)}
                                    value={gender}
                                    require='required'
                                >
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                </select>
                            </div>
                            <div className='input-field mb-2'>
                                <input placeholder='Password'>
                                </input>
                            </div>
                            <button>REGISTER</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;