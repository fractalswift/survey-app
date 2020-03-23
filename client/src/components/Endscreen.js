import React, { Text } from 'react';
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
            console.log('Not counting as question');
          }}
          resetButtons={() => {
            console.log('no reset function passed');
          }}
        />
      );
    } else return <div>Thank you!</div>;
  };

  console.log(`Sectionname from endscreen: ${sectionName}`);

  return (
    <div>
      <EndHeader sectionName={sectionName} />

      <div className='ukaverage'>UK national average: {topFact}</div>

      <ScoreSlider />

      <div className='sliderDescription'>
        <div>{yourResult}</div>
      </div>
      <div className='continueText'>
        <div>{continueText}</div>
      </div>
      <div>{renderNextButton()}</div>
    </div>
  );
};

export default Endscreen;
