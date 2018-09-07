import React, { Component } from 'react';

class Char extends Component {
  render() {
    const inlineBox = {
      display: 'inline-block',
      padding: '16px',
      textAlign: 'center',
      margin: '16px',
      border: '1px solid black'
    };

    return (
      <div style={inlineBox} onClick={this.props.click}>
        <h1>{this.props.charactere}</h1>
      </div>
    );
  }
}

export default Char;
