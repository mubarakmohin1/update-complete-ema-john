import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const [ createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)



    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

if(user){
    navigate('/shop')
}

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Validation is not successful')
            return;
        }
        if(password.length < 6){
            setError('password must be 6 digit');
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />

                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm-Password" id="" required />

                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='form-link' to='/login'>please login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;