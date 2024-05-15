import React from 'react';
import { Link } from 'react-router-dom';
import wavesvedio from './../assets/voice waves.mp4'

const WelcomePage = () => {
    return (
        <div className='welcomeContainer'>
            <h1 className='welcome'>MeloMagic</h1>
            <video autoPlay loop muted playsInline src={wavesvedio} className='wavesVideo'></video>
            <Link to="/signin"><button>Start</button></Link>
        </div>
    );
}

export default WelcomePage;
