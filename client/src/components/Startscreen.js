import React from 'react';

import startImage from '../images/startScreen-Image.png';

import NextButton from './NextButton';

// TODO Next button uses dummy functions, better to fix with
// parent state or redux

const Startscreen = ({ tagLine, description, goToNextScreen }) => {
  return (
    <div className='startscreen'>
      <img src={startImage} className='startscreen-image' alt='' />
      <div className='startscreen-title'>{tagLine}</div>
      <div className='startscreen-description'>{description}</div>
      <NextButton
        buttonText={'Take the survey'}
        goToNextScreen={goToNextScreen}
        countQuestions={() => {
          //pass - do not increment question count
        }}
        resetButtons={() => {
          //pass - do not increment question count
        }}
      />
    </div>
  );
};

export default Startscreen;
