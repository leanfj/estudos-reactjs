import React, { Component } from 'react';

class Validation extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.length < 5 ? 'Text too short' : 'Text long enough'}</h1>
      </div>
    );
  }
}

export default Validation;
