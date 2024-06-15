import React from 'react';
import { Link } from 'react-router-dom';
import backgroundvideo from './../assets/background.mp4'

const ChooseGenrePage = () => {
    return (
        <div className='genreContainer'>
            <div className='genreH1Container'>
                <h1 className='genreH1'>Choose Genre</h1>
            </div>

            <div className='genres'>
                <div className='threeGenres'>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Jazz</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Pop</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Rock</p>
                    </label>
                </div>
                <div className='threeGenres'>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Hiphop</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Classic</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Country</p>
                    </label>
                </div>
                <div className='threeGenres'>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Happy</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Sad</p>
                    </label>
                    <label className='genre'>
                        <input type="checkbox" />
                        <p className='genreCheckBoxes'>Chill</p>
                    </label>
                </div>

            </div>
            <video autoPlay loop muted playsInline src={backgroundvideo} className='backgroundvideo'></video>
            <Link to="/waiting"><button>Next</button></Link>
        </div>
    );
}

export default ChooseGenrePage;
