import React, { Component } from 'react';

import Description from './Description';

import Question from './Question';

import Endscreen from './Endscreen';

export default class Screen extends Component {
  render() {
    const {
      screenType,
      tagLine,
      description,
      goToNextScreen,
      question,
      topFact,
      yourResult,
      continueText
    } = this.props.data;

    switch (screenType) {
      case 'description':
        return (
          <Description
            tagLine={tagLine}
            description={description}
            goToNextScreen={this.props.goToNextScreen}
          />
        );
      case 'question':
        return (
          <Question
            question={question}
            goToNextScreen={this.props.goToNextScreen}
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
          />
        );
    }
  }
}
