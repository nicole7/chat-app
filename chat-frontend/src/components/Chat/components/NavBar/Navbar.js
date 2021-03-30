import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../../../store/actions/auth';
import Modal from '../../../Modal/Modal';
import './Navbar.scss';

const Navbar = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user)

    const [showProfileOptions, setShowProfileOptions] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [gender, setGender] = useState(user.gender);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const submitForm = (e) => {
        e.preventDefault()

        const form = { firstName, lastName, email, gender, email, password, avatar }
        const formData = new FormData()
        for (const key in form) {
            formData.append(key, form[key])
        };

        //dispatch aiuth services that will call backend

    }

    return (
        <div id='navbar' className='card-shadow'>
            <h2>Chat.io</h2>
            <div id='profile-menu' onClick={() => setShowProfileOptions(!showProfileOptions)}>
                <img width='40' height='40' src={user.avatar} alt='Avatar' />
                <p>{user.firstName} {user.lastName}</p>
                <FontAwesomeIcon icon='caret-down' classNme='fa-icon' />
                
                {showProfileOptions &&
                     <div id='profile-options'>
                        <p conClick={() => setShowProfileModal(true)}>Update Profile</p>
                        <p onClick={()=> dispatch(logout())}>Logout</p>
                     </div>
                }

                {
                    showProfileModal &&
                    <Modal click={() => setShowProfileModal(false)}>
                        <Fragment key='header'>
                            <h3 className='m-0'>Update Profile</h3>
                        </Fragment>

                        <Fragment key='body'>
                            <Form>
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
                            <div className='input-field mb-1'>
                            <input
                                    onChange={e => setAvatar(e.target.files[0])}
                                    placeholder='Password'
                                    value={avatar}
                                    required='required'
                                    type='file'
                                >
                                </input>
                            </div>
                            </Form>
                        </Fragment>

                        <Fragment key='footer'>
                            <button className='btn-success'>UPDATE</button>
                        </Fragment>
                    </Modal>
                }
            </div>
        </div>
    );
};

export default Navbar;