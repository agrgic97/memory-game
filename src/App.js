import React, { Component } from 'react';
import Header from './components/Header';
import GameOver from './components/GameOver';
import characters from './characters.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters,
      score: 0,
      highscore: 0,
      gameover: false
    }

    this.resetGame = this.resetGame.bind(this);
    this.handleGameState = this.handleGameState.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  resetGame() {
    this.state.characters.forEach(character => {
      if(character.clicked) { character.clicked = false }
    })

    this.setState((state) => { return {characters: state.characters }})
  }

  handleGameState() {
    this.setState((state) => {
      return { gameover : !state.gameover }
    })
  }

  handleClick(id) {
    this.handleIncrement(id);
    this.shuffleArray();
  }

  shuffleArray(){
    this.state.characters.sort(() => Math.random() - 0.5);
  }


  handleIncrement(id) {
    this.state.characters.forEach(character => {
      if(character.id === id) {
        if(!character.clicked) {
          character.clicked = true;
          this.setState((state) => {         
            return { score: state.score + 1 }
          })
        }
        else {
          this.setState((state) => {
            const newHighScore = Math.max(state.highscore, state.score);
            this.resetGame()
            return { gameover: true, highscore: newHighScore, score: 0 }
          }) 
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Header Score={this.state.score} Highscore={this.state.highscore}></Header>
        <div className='Game'>
          {this.state.characters.map(character => {
            return <img onClick={this.handleClick.bind(this, character.id)} key={character.id} src={character.image} alt={character.name} width="250" height="320"></img>
          })}
        </div>
        <GameOver open={this.state.gameover} onClose={this.handleGameState}><h1>Game Over</h1></GameOver>
      </div>
    );
  }
  
}

export default App;
