import React, { Component } from 'react';

export default class EndHeader extends Component {
  render() {
    return (
      <div>
        <div className='end-header'>
          <div className='section-name'>{this.props.sectionName}</div>
          <div className='your-score'>Your score</div>
        </div>
      </div>
    );
  }
}
