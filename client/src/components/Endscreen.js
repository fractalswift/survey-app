import React from 'react';
import NextButton from './NextButton';
import EndHeader from './EndHeader';
import ScoreSlider from './ScoreSlider';

//destructure props
const Endscreen = ({
  topFact,
  yourResult,
  continueText,
  goToNextScreen,
  screenType,
  sectionName
}) => {
  // Helper function so we do not render next button on final screen
  const renderNextButton = () => {
    if (screenType !== 'completed') {
      return (
        <NextButton
          buttonText={'Continue'}
          goToNextScreen={goToNextScreen}
          countQuestions={() => {
            //pass - do not increment question count
          }}
          resetButtons={() => {
            //pass - do not increment question count
          }}
        />
      );
    } else return <div className='thank-you-message'></div>;
  };

  return (
    <div className='endscreen'>
      <EndHeader sectionName={sectionName} />

      <div className='average'>UK national average: {topFact}</div>

      <ScoreSlider />

      <div className='slider-description'>
        <div>{yourResult}</div>
      </div>
      <div className='continue-text'>
        <div>{continueText}</div>
      </div>
      <div>{renderNextButton()}</div>
    </div>
  );
};

export default Endscreen;
