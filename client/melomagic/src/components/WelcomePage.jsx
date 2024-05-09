import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div>
            <h1>Welcome to MeloMagic</h1>
            <Link to="/signin"><button>Next</button></Link>
        </div>
    );
}

export default WelcomePage;
