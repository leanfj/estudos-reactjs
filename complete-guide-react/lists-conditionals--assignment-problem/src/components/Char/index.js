import React from 'react';

const Char = props => {
  const inlineBox = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return (
    <div style={inlineBox} onClick={props.click}>
      <h1>{props.charactere}</h1>
    </div>
  );
};

export default Char;
