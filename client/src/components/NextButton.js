import React from 'react';

const NextButton = ({
  buttonText,
  goToNextScreen,
  countQuestions,
  resetButtons
}) => {
  return (
    <div
      className='nextbutton'
      onClick={() => {
        goToNextScreen();
        countQuestions();
        resetButtons();
      }}
    >
      <div className='nextbuttontext'>{buttonText}</div>
    </div>
  );
};

export default NextButton;
