import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div>
            <h1>Register</h1>
            {/* Registration form */}
            <Link to="/choose-story"><button>Next</button></Link>
        </div>
    );
}

export default RegisterPage;
