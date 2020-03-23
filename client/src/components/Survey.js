import React, { Component, Fragment } from 'react';
import Screen from './Screen';

class Survey extends Component {
  // populate state with dummy screen to avoid errors
  state = {
    currentScreen: 0,
    screenType: 'Description',
    questionNum: 1,
    screens: [
      {
        screenNumber: 0,
        screenType: 'description',
        tagLine: 'Loading...',
        description: 'Survey is loading...'
      }
    ]
  };

  goToNextScreen = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 });
  };

  countQuestions = () => {
    this.setState({ questionNum: this.state.questionNum + 1 });
  };

  // Fetch survey from back end
  async componentWillMount() {
    const getSurveyData = async () => {
      const response = await fetch('http://localhost:5000/api/surveys/basic');
      const json = await response.json();
      return json;
    };

    const surveyData = await getSurveyData();
    this.setState({ screens: surveyData.screens });
  }

  render() {
    return (
      <Fragment>
        <Screen
          data={this.state.screens[this.state.currentScreen]}
          goToNextScreen={this.goToNextScreen}
          currentScreen={this.state.currentScreen}
          countQuestions={this.countQuestions}
          questionNum={this.state.questionNum}
        />
      </Fragment>
    );
  }
}

export default Survey;
