import React from 'react';
import Background from '../images/Background.png';

const NextButton = ({ buttonText, goToNextScreen }) => {
  return (
    <button>
      <div className='nextbutton'>
        <div className='nextbuttontext' onClick={goToNextScreen}>
          {buttonText}
        </div>
      </div>
    </button>
  );
};

export default NextButton;
