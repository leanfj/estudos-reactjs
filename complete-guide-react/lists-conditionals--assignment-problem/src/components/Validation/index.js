import React from 'react';

const Validation = props => {
  return (
    <div>
      <h1>{props.length < 5 ? 'Text too short' : 'Text long enough'}</h1>
    </div>
  );
};

export default Validation;
