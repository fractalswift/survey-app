import React, { Component, Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Screen from './Screen';

// cheat object in case problems with async fetch
const screens = [
  {
    screenNumber: 0,
    screenType: 'description',
    tagLine: 'Calculate your personal Pawprint',
    description:
      'Next we have a short 2–3 minute survey covering Diet, Home, Travel, and Other that will let us calculate your personal carbon footprint (or Parprint as we like to call it).'
  },
  {
    screenNumber: 1,
    screenType: 'question',
    sectionName: 'Diet',
    question: 'How often do you eat meat and dairy?',
    answers: ['Daily', '1 or 2 times', '3+ times per week', 'Not at all']
  },
  {
    screenNumber: 2,
    screenType: 'question',
    sectionName: 'Diet',
    question: 'How big are your portion sizes?',
    answers: [
      'Smaller than average',
      'Average',
      'Larger than average',
      "I'm not sure"
    ]
  },
  {
    screenNumber: 3,
    screenType: 'question',
    sectionName: 'Diet',
    question: 'How much food ends up wasted in your household?',
    answers: [
      'None',
      '1-5 plates per week',
      '6-10 plates per week',
      'More than 10 plates per week'
    ]
  },
  {
    screenNumber: 4,
    screenType: 'question',
    sectionName: 'Diet',
    question:
      'How often do you eat avocados, asparagus, kiwi fruit or pineapple?',
    answers: ['Daily', '1 or 2 times', '3+ times per week', 'Not at all']
  },
  {
    screenNumber: 5,
    screenType: 'question',
    sectionName: 'Diet',
    question: 'How often do you eat seasonal veg from Europe?',
    answers: ['Daily', '1 or 2 times', '3+ times per week', 'Not at all']
  },
  {
    screenNumber: 6,
    screenType: 'endscreen',
    sectionName: 'Diet',
    topFact: '2.9 Tons of CO2 produced per year',
    yourResult: "You're using 3.2 tons of CO2/ year",
    continueText: "Let's take a look at how you do in the home category..."
  },
  {
    screenNumber: 7,
    screenType: 'question',
    sectionName: 'Home',
    question: 'This is question 1',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 8,
    screenType: 'question',
    sectionName: 'Home',
    question: 'This is question 2',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 9,
    screenType: 'question',
    sectionName: 'Home',
    question: 'This is question 3',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 10,
    screenType: 'question',
    sectionName: 'Home',
    question: 'This is question 4',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 11,
    screenType: 'question',
    sectionName: 'Home',
    question: 'This is question 5',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 12,
    screenType: 'endscreen',
    sectionName: 'Home',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: "Let's take a look at how you do in the travel category"
  },
  {
    screenNumber: 13,
    screenType: 'question',
    sectionName: 'Travel',
    question: 'This is question 1',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 14,
    screenType: 'question',
    sectionName: 'Travel',
    question: 'This is question 2',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 15,
    screenType: 'question',
    sectionName: 'Travel',
    question: 'This is question 3',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 16,
    screenType: 'question',
    sectionName: 'Travel',
    question: 'This is question 4',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 17,
    screenType: 'question',
    sectionName: 'Travel',
    question: 'This is question 5',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 18,
    screenType: 'endscreen',
    sectionName: 'Travel',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: "Let's take a look at how you do in the other category"
  },
  {
    screenNumber: 19,
    screenType: 'question',
    sectionName: 'Other',
    question: 'This is question 1',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 20,
    screenType: 'question',
    sectionName: 'Other',
    question: 'This is question 2',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 21,
    screenType: 'question',
    sectionName: 'Other',
    question: 'This is question 3',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 22,
    screenType: 'question',
    sectionName: 'Other',
    question: 'This is question 4',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },
  {
    screenNumber: 23,
    screenType: 'question',
    sectionName: 'Other',
    question: 'This is question 5',
    answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4']
  },

  {
    screenNumber: 24,
    screenType: 'completed',
    sectionName: 'Other',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: 'Thank you for compeleting the survey'
  }
];

class Survey extends Component {
  state = {
    currentScreen: 0,
    screenType: 'Description',
    questionNum: 1,
    screens: []
  };

  goToNextScreen = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 });
  };

  countQuestions = () => {
    this.setState({ questionNum: this.state.questionNum + 1 });
  };

  async componentWillMount() {
    const getSurveyData = async () => {
      const response = await fetch('http://localhost:5000/api/surveys/basic');
      const json = await response.json();
      return json;
    };

    const surveyData = await getSurveyData();
    this.setState({ screens: surveyData.screens });
    console.log('logging state.screens');
    console.log(this.state.screens);
    console.log('logging cheat.screens');
    console.log(screens);
    console.log(screens == this.state.screens);
    console.log(screens[0]);
    console.log(this.state.screens[0]);
  }

  render() {
    return (
      <Fragment>
        <Screen
          data={screens[this.state.currentScreen]}
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
