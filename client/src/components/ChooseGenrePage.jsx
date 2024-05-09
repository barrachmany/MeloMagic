import React from 'react';
import { Link } from 'react-router-dom';

const ChooseGenrePage = () => {
    return (
        <div>
            <h1>Choose Genre</h1>
            {/* Checkboxes for genre selection */}
            <Link to="/waiting"><button>Next</button></Link>
        </div>
    );
}

export default ChooseGenrePage;
