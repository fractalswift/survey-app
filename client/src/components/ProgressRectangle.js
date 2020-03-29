import React, { Component } from 'react';

export default class ProgressRectangle extends Component {
  state = {
    progress: this.props.progress
  };

  componentDidMount() {}

  // Helper function to fill out the little rectangles
  renderProgress = () => {
    // Rectangles are 40px wide and there are 5 questions, so we divide by
    // 8 because 40/5 = 8
    const pixels = this.props.progress * 8;
    const size = pixels.toString() + 'px';

    return (
      <div
        style={{
          height: '10px',
          width: size,
          background: '#ec5569'
        }}
      ></div>
    );
  };

  renderSectProgress = () => {
    // Rectangles are 40px wide and there are 5 questions, so we divide by
    // 8 because 40/5 = 8
    const pixels = this.props.progress * 8;
    let bgClass = 'rectangle-empty';
    if (pixels > 0) {
      bgClass = 'rectangle-current';
    }

    return bgClass;
  };

  render() {
    return (
      <div>
        <div className={this.renderSectProgress()}>{this.renderProgress()}</div>
        <div className='rectangle-label'>{this.props.rectName}</div>
      </div>
    );
  }
}
