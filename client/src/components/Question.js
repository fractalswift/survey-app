import React, { Component } from 'react';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';
import ButtonsPanel from './ButtonsPanel';

class Question extends Component {
  // State controls appearance of buttons (pressed/unpressd)
  state = {
    button1: 'buttonready',
    button2: 'buttonready',
    button3: 'buttonready',
    button4: 'buttonready'
  };

  chooseAnswer = buttonNum => {
    // only one answer can be selected to we wipe them all first
    this.setState({
      button1: 'buttonready',
      button2: 'buttonready',
      button3: 'buttonready',
      button4: 'buttonready'
    });

    // Now we depress just the button that invoked this function
    switch (buttonNum) {
      case 0:
        this.setState({ button1: 'buttonpressed' });
        break;
      case 1:
        this.setState({ button2: 'buttonpressed' });
        break;
      case 2:
        this.setState({ button3: 'buttonpressed' });
        break;
      case 3:
        this.setState({ button4: 'buttonpressed' });
        break;
      default:
        break;
    }
  };

  resetButtons = () => {
    this.setState({
      button1: 'buttonready',
      button2: 'buttonready',
      button3: 'buttonready',
      button4: 'buttonready'
    });
  };

  render() {
    const {
      question,
      goToNextScreen,
      currentScreen,
      countQuestions,
      questionNum,
      answers
    } = this.props;

    console.log(`questoinNum from Questoin: ${questionNum}`);

    return (
      <div>
        <ProgressBar
          currentScreen={currentScreen}
          questionNum={this.props.questionNum}
          progress1={this.progress1}
          progress2={this.progress2}
          progress3={this.progress3}
          progress4={this.progress4}
        />
        <div className='questionText'>{question}</div>
        <ButtonsPanel
          answers={this.props.answers}
          chooseAnswer={this.chooseAnswer}
          button1={this.state.button1}
          button2={this.state.button2}
          button3={this.state.button3}
          button4={this.state.button4}
        />
        <NextButton
          buttonText={'Next question'}
          goToNextScreen={goToNextScreen}
          countQuestions={countQuestions}
          resetButtons={this.resetButtons}
        />
      </div>
    );
  }
}

export default Question;
