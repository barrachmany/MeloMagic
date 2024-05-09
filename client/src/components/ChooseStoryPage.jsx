import React from 'react';
import { Link } from 'react-router-dom';

const ChooseStoryPage = () => {
    return (
        <div>
            <h1>Choose a Story</h1>
            {/* Story input field or random song selection */}
            <Link to="/choose-genre"><button>Next</button></Link>
        </div>
    );
}

export default ChooseStoryPage;
