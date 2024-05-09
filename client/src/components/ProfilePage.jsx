import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div>
            <h1>Profile</h1>
            {/* Display user profile information */}
            <Link to="/"><button>Finish</button></Link>
        </div>
    );
}

export default ProfilePage;
