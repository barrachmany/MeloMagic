import React from 'react';
import { Link } from 'react-router-dom';
import backgroundvideo from './../assets/background.mp4'

const SignInPage = () => {
    return (
        <div className='signInContainer'>
            <div className='signInH1Container'>
                <h1 className='signInH1'>Sign In</h1>
            </div>
            <video autoPlay loop muted playsInline src={backgroundvideo} className='backgroundvideo'></video>
            <input type="text" placeholder='username' className='username'/>
            <input type="password" placeholder='password' className='password'/>
            <div className='signinEnd'>
                <Link to="/choosestory"><button>Sign in</button></Link>
                <a href="" className='aRegisterSignup'>Forgot your password?</a>
                <a href="/register" className='aRegisterSignup'>Don't have an account?</a>
            </div>
        </div>
    );
}

export default SignInPage;
