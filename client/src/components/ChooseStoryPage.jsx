import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import backgroundvideo from './../assets/background.mp4'

const ChooseStoryPage = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='storyContainer'>
            <div className='storyH1Container'>
                <h1 className='storyH1'>Create your song</h1>
            </div>
            <div className='chooseSongContainer'>
                <div className='chooseSong'>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <p className='checkboxIsStory'>A song based on your story</p>
                </div>
                {isChecked && (
                    <textarea placeholder='Write your story' className='storyText' />
                )}
                <div className='chooseSong'>
                    <input type="checkbox" checked={!isChecked} onChange={handleCheckboxChange} />
                    <p className='checkboxIsStory'>Random song</p>
                </div>
            </div>

            <video autoPlay loop muted playsInline src={backgroundvideo} className='backgroundvideo'></video>

            <Link to="/choosegenre"><button>Next</button></Link>
        </div>
    );
}

export default ChooseStoryPage;
