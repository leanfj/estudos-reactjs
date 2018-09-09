import React from 'react';

const Validation = ({ length }) => {
  return (
    <div>
      <h1>{length < 5 ? 'Text too short' : 'Text long enough'}</h1>
    </div>
  );
};

export default Validation;
