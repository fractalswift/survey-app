import React from 'react';

// helper function so no continue button when survey complete

const Endscreen = ({
  topFact,
  yourResult,
  continueText,
  goToNextScreen,
  screenType
}) => {
  const renderNextButton = () => {
    if (screenType !== 'completed') {
      return <button onClick={goToNextScreen}>Continue</button>;
    } else return <div>Thank you!</div>;
  };
  return (
    <div>
      <div>{topFact}</div>
      <div>{yourResult}</div>
      <div>{continueText}</div>
      <div>{renderNextButton()}</div>
    </div>
  );
};

export default Endscreen;
