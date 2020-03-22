import React from 'react';

import startImage from '../images/startScreen-Image.png';

import NextButton from './NextButton';

const Description = ({ tagLine, description, goToNextScreen }) => {
  return (
    <div>
      <img src={startImage} />
      <div>{tagLine}</div>
      <div>{description}</div>
      <NextButton
        buttonText={'Take the survey'}
        goToNextScreen={goToNextScreen}
      />
    </div>
  );
};

export default Description;
