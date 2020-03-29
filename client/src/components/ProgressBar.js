import React, { Component } from 'react';
import ProgressRectangle from './ProgressRectangle';

export default class ProgressBar extends Component {
  state = {
    questionNum: this.props.questionNum
  };

  // Helper function to fill out the little rectangles based on questions answered
  renderProgress = num => {
    return this.props.questionNum - num;
  };

  render() {
    return (
      <div className='progress-bar'>
        <div className='progress-rectangles'>
          <ProgressRectangle
            rectName='Diet'
            progress={this.renderProgress(0)}
          />
          <ProgressRectangle
            rectName='Home'
            progress={this.renderProgress(5)}
          />
          <ProgressRectangle
            rectName='Travel'
            progress={this.renderProgress(10)}
          />
          <ProgressRectangle
            rectName='Other'
            progress={this.renderProgress(15)}
          />
        </div>
        <div className='question-number'>
          Question {this.props.questionNum} of 20
        </div>
      </div>
    );
  }
}
