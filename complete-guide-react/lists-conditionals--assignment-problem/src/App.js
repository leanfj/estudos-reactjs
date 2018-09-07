import React, { Component } from 'react';
import './App.css';
import Validation from './components/Validation';
import Char from './components/Char';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputLength: 0,
      inputValue: ''
    };
  }
  inputChangeHandler = event => {
    this.setState({
      inputLength: event.target.value.length,
      inputValue: event.target.value
    });
  };

  deleteChar = charIndex => {
    /*split transforma em array para pode trabalhar com o splice onde removemos conforme o index e no setState modificamos o valor ja com o join para juntar o array sem o caracter clicado */
    let remove = this.state.inputValue.split('');
    remove.splice(charIndex, 1);
    this.setState({
      inputValue: remove.join(''),
      inputLength: this.state.inputValue.length - 1
    });
  };

  /* Utilizando o split para separar cada letra e transformar o conteúdo em um array para ser percorrido pelo map */
  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputValue}
        />
        <p>{this.state.inputLength}</p>
        <Validation length={this.state.inputLength} />

        {this.state.inputValue.split('').map((char, index) => {
          return (
            <Char
              charactere={char}
              key={index}
              click={() => {
                this.deleteChar(index);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
