import React from 'react';
import { Link } from 'react-router-dom';

const SongsPage = () => {
    return (
        <div>
            <h1>Your Songs</h1>
            {/* Display list of songs */}
            <Link to="/profile"><button>Next</button></Link>
        </div>
    );
}

export default SongsPage;
