import { Link } from "react-router-dom";
import { useState } from "react";
import backgroundvideo from "./../assets/background.mp4";
import axios from "axios";

const ChooseStoryPage = () => {
  const [story, setStory] = useState("random song");

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


    const handleNextButton = () => {
        axios.post('http://localhost:5000/api/chat', { message: `give me lyrics to a song based on :${story }` })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    setStory(e.target.value);
    console.log(story);
  };

  const handleNextButton = () => {
    axios
      .post("http://localhost:5000/api/chat", { message: story })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                    <textarea
                        placeholder='Write your story'
                        className='storyText'
                        onChange={(e) => {
                            handleStoryChange(e);
                        }}
                    />
                )}
                <div className='chooseSong'>
                    <input type="checkbox" checked={!isChecked} onChange={handleCheckboxChange} />
                    <p className='checkboxIsStory'>Random song</p>
                </div>
            </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        src={backgroundvideo}
        className="backgroundvideo"></video>

      <Link to="/choosegenre">
        <button onClick={handleNextButton}>Next</button>
      </Link>
      <Link to="/choosegenre">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default ChooseStoryPage;
