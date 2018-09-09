import React from 'react';

const Char = ({ click, charactere }) => {
  const inlineBox = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return (
    <div style={inlineBox} onClick={click}>
      <h1>{charactere}</h1>
    </div>
  );
};

export default Char;
