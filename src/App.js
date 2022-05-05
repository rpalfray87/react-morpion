import React, { Component } from 'react';
import Game from './Components/Game/Game';
import Style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={ Style.App }>
        <Game />
      </div>
    );
  }
}

export default App;
