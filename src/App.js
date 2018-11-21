import React, { Component } from 'react';
import './App.css';
import DictionaryComponent from './components/DictionaryComponent';

class App extends Component {
  constructor() {
    super();
    this.state = { showIncrement: true };
  }

  onCheckShowIncrement = showIncrement => {
    console.log(showIncrement);
    this.setState({ showIncrement });
  }

  render() {
    return (
      <div className="App">
        <DictionaryComponent word={'single'}></DictionaryComponent>
      </div>
    );
  }
}

export default App;
