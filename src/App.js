import React, { Component } from 'react';
import Header from './components/Header';
import characters from './characters.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        {this.state.characters.map(character => {
          return <img onClick={this.handleClick.bind(this, character.id)} key={character.id} src={character.image} alt={character.name} width="250" height="320"></img>
        })}
      </div>
    );
  }
  
}

export default App;
