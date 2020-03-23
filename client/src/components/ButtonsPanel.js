import React, { Component } from 'react';
import Button from './Button';

export default class ButtonsPanel extends Component {
  render() {
    const answers = this.props.answers;

    return (
      <div className='buttons-panel'>
        <Button
          answer={this.props.answers[0]}
          status={this.props.button1}
          chooseAnswer={() => {
            this.props.chooseAnswer(0);
          }}
        />
        <Button
          answer={this.props.answers[1]}
          status={this.props.button2}
          chooseAnswer={() => {
            this.props.chooseAnswer(1);
          }}
        />
        <Button
          answer={this.props.answers[2]}
          status={this.props.button3}
          chooseAnswer={() => {
            this.props.chooseAnswer(2);
          }}
        />
        <Button
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
