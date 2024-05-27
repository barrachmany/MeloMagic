import React from 'react';
import { Link } from 'react-router-dom';
import backgroundvideo from './../assets/background.mp4'
import profilePhoto from './../assets/profilePhoto.jpg'

const RegisterPage = () => {
    return (
        <div className='registerContainer'>
            <div className='registerH1Container'>
                <h1 className='registerH1'>Register</h1>
            </div>
            <img src={profilePhoto} className='profilePhoto'/>
            <input type="text" placeholder='username' className='username'/>
            <input type="email" placeholder='email' className='email'/>
            <input type="password" placeholder='password' className='password'/>
            
            <video autoPlay loop muted playsInline src={backgroundvideo} className='backgroundvideo'></video>
            <div className='registerEnd'>
                <Link to="/choosestory"><button>Register</button></Link>
                <a href="/signin" className='aRegisterSignup'>Already have an account?</a>
            </div>
        </div>
    );
}

export default RegisterPage;
