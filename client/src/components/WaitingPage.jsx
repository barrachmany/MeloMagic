import React from 'react';
import { Link } from 'react-router-dom';

const WaitingPage = () => {
    return (
        <div>
            <h1>Generating Song...</h1>
            {/* Loading spinner or message */}
            <Link to="/songs"><button>Next</button></Link>
        </div>
    );
}

export default WaitingPage;
