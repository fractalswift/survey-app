import React, { Component } from 'react';
import AnswerButton from './AnswerButton';

export default class ButtonsPanel extends Component {
  render() {
    return (
      <div className='buttons-panel'>
        <AnswerButton
          answer={this.props.answers[0]}
          status={this.props.button1}
          chooseAnswer={() => {
            this.props.chooseAnswer(0);
          }}
        />
        <AnswerButton
          answer={this.props.answers[2]}
          status={this.props.button2}
          chooseAnswer={() => {
            this.props.chooseAnswer(1);
          }}
        />
        <AnswerButton
          answer={this.props.answers[1]}
          status={this.props.button3}
          chooseAnswer={() => {
            this.props.chooseAnswer(2);
          }}
        />
        <AnswerButton
          answer={this.props.answers[3]}
          status={this.props.button4}
          chooseAnswer={() => {
            this.props.chooseAnswer(3);
          }}
        />
      </div>
    );
  }
}
