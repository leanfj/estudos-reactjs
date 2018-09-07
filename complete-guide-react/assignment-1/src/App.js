import React, { Component } from 'react';
import './App.css';
import UserOutput from './components/UserOutput/UserOutput';
import UserInput from './components/UserInput/UserInput';

class App extends Component {
  state = {
    userName: 'Leandro'
  };

  changeUserNameHandler = event => {
    this.setState({
      userName: event.target.value
    });
  };
  render() {
    const containerStyle = {
      border: '1px solid #eee',
      boxShadow: '0 2px 2px #ccc',
      width: '400px',
      margin: '50px auto',
      textAlign: 'center',
      padding: '20px'
    };
    return (
      <div className="App" style={containerStyle}>
        <UserInput
          change={this.changeUserNameHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
