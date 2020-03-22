import React, { Component, Fragment } from 'react';

import Screen from './Screen';

/// helper function to get questions from backend
// for now its a dummy object:

const surveyData = {
  survey: {
    section_0: {
      title: 'description',
      screenContent: 'This is the description page',
      surveyTagLine: 'Survey tagline',
      surveyDescription: 'Survey description'
    },

    section_1: {
      title: 'Section 1',
      questions: ['Question 1', 'Question 2', 'Question 3', 'Question 4'],
      endScreenMessage: 'End screen message for section 1'
    },
    section_2: {
      title: 'Section 2',
      question_1: 'Question 1',
      question_2: 'Question 2',
      question_3: 'Question 3',
      question_4: 'Question 4',
      endScreenMessage: 'End screen message for section 2'
    },
    section_3: {
      title: 'Section 3',
      question_1: 'Question 1',
      question_2: 'Question 2',
      question_3: 'Question 3',
      question_4: 'Question 4',
      endScreenMessage: 'End screen message for section 3'
    },
    section_4: {
      title: 'Section 3',
      question_1: 'Question 1',
      question_2: 'Question 2',
      question_3: 'Question 3',
      question_4: 'Question 4',
      endScreenMessage: 'End screen message for section 4'
    },

    _id: '5e7771830ae39916b5ac507b',
    surveyName: 'default4',
    date: '2020-03-22T14:09:07.026Z',
    __v: 0
  }
};

/// Someow have to get the survey object into screens. Think
// about how to strucure the model to make this easy, so I can just
// map it

const screens = [
  {
    screenNumber: 0,
    screenType: 'description',
    tagLine: 'This is the tagline',
    description: 'this is the description'
  },
  {
    screenNumber: 1,
    screenType: 'question',
    question: 'This is question 1'
  },
  {
    screenNumber: 2,
    screenType: 'question',
    question: 'This is question 2'
  },
  {
    screenNumber: 3,
    screenType: 'question',
    question: 'This is question 3'
  },
  {
    screenNumber: 4,
    screenType: 'question',
    question: 'This is question 4'
  },
  {
    screenNumber: 5,
    screenType: 'endscreen',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: "Let's take a look at how you do in the home category"
  },
  {
    screenNumber: 6,
    screenType: 'question',
    question: 'This is question 1'
  },
  {
    screenNumber: 7,
    screenType: 'question',
    question: 'This is question 2'
  },
  {
    screenNumber: 8,
    screenType: 'question',
    question: 'This is question 3'
  },
  {
    screenNumber: 9,
    screenType: 'question',
    question: 'This is question 4'
  },
  {
    screenNumber: 10,
    screenType: 'endscreen',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: "Let's take a look at how you do in the travel category"
  },
  {
    screenNumber: 11,
    screenType: 'question',
    question: 'This is question 1'
  },
  {
    screenNumber: 12,
    screenType: 'question',
    question: 'This is question 2'
  },
  {
    screenNumber: 13,
    screenType: 'question',
    question: 'This is question 3'
  },
  {
    screenNumber: 14,
    screenType: 'question',
    question: 'This is question 4'
  },
  {
    screenNumber: 15,
    screenType: 'endscreen',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: "Let's take a look at how you do in the other category"
  },
  {
    screenNumber: 16,
    screenType: 'question',
    question: 'This is question 1'
  },
  {
    screenNumber: 17,
    screenType: 'question',
    question: 'This is question 2'
  },
  {
    screenNumber: 18,
    screenType: 'question',
    question: 'This is question 3'
  },
  {
    screenNumber: 19,
    screenType: 'question',
    question: 'This is question 4'
  },
  {
    screenNumber: 20,
    screenType: 'completed',
    topFact: 'This the top fact',
    yourResult: 'This is your result',
    continueText: 'Thank you for compeleting the survey'
  }
];

// Actual componennt starts here - maybe extract the above

class Survey extends Component {
  state = {
    sectionNum: 0,
    questionNum: 0,
    currentScreen: 0,
    screenType: 'Description'
  };

  goToNextScreen = () => {
    this.setState({ currentScreen: this.state.currentScreen + 1 });
  };

  render() {
    return (
      <Fragment>
        Current screen number: {this.state.currentScreen}
        <Screen
          data={screens[this.state.currentScreen]}
          goToNextScreen={this.goToNextScreen}
        />
      </Fragment>
    );
  }
}

export default Survey;
