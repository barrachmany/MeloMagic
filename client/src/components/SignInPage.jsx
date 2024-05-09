import React from 'react';
import { Link } from 'react-router-dom';

const SignInPage = () => {
    return (
        <div>
            <h1>Sign In</h1>
            {/* Sign in form */}
            <Link to="/register"><button>Next</button></Link>
        </div>
    );
}

export default SignInPage;
