import React, { Component } from 'react';

class Question extends Component {
  // will use state for only letting you continue if you have answered the question
  state = {};
  render() {
    const { question, goToNextScreen } = this.props;

    return (
      <div>
        <div>{question}</div>

        <button onClick={goToNextScreen}>Next question</button>
      </div>
    );
  }
}

export default Question;
