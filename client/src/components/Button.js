import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className={this.props.status} onClick={this.props.chooseAnswer}>
        {this.props.answer}
      </div>
    );
  }
}
