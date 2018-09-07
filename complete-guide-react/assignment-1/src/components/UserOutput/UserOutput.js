import React from 'react';
import './UserOutput.css';

const UserOutput = props => {
  return (
    <div>
      <p> My username is {props.userName}</p>
      <p>And i live in Brazil - Rio de Janeiro</p>
    </div>
  );
};

export default UserOutput;
