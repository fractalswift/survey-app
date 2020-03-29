import React, { Component } from 'react';

import Startscreen from './Startscreen';

import QuestionScreen from './QuestionScreen';

import Endscreen from './Endscreen';

export default class Screen extends Component {
  render() {
    // destructure props
    const {
      screenType,
      tagLine,
      description,
      sectionName,
      question,
      yourResult,
      continueText,
      answers,
      topFact
    } = this.props.data;

    // conditional rendering based on screen type (from survey schema)
    switch (screenType) {
      case 'loading':
        return (
          <Startscreen
            tagLine={tagLine}
            description={description}
            goToNextScreen={() => {
              window.location.reload(false);
              //would break application if we try to go to
              //next screen before survey has loaded
              // so button will refresh page instead
            }}
          />
        );
      case 'description':
        return (
          <Startscreen
            tagLine={tagLine}
            description={description}
            goToNextScreen={this.props.goToNextScreen}
          />
        );
      case 'question':
        return (
          <QuestionScreen
            question={question}
            answers={answers}
            goToNextScreen={this.props.goToNextScreen}
            currentScreen={this.props.currentScreen}
            countQuestions={this.props.countQuestions}
            questionNum={this.props.questionNum}
          />
        );

      case 'endscreen':
        return (
          <Endscreen
            topFact={topFact}
            yourResult={yourResult}
            continueText={continueText}
            goToNextScreen={this.props.goToNextScreen}
            screenType={screenType}
            sectionName={sectionName}
          />
        );

      case 'completed':
        return (
          <Endscreen
            topFact={topFact}
            yourResult={yourResult}
            continueText={continueText}
            goToNextScreen={this.props.goToNextScreen}
            screenType={screenType}
            sectionName={sectionName}
          />
        );
      default:
        break;
    }
  }
}
