import React, { Component } from 'react';
import Board from './Board/Board'
import Style from './Game.module.scss'

class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            history : [
                Array(9).fill(null)
            ],
            step : 0,
            xPlayer : true,
            winner : null
        }
    }

    handleClick(i) {
        let history = this.state.history.slice(0, this.state.step + 1)
        let tab = this.state.history[this.state.step].slice()
        if(!tab[i] && !this.state.winner) {
            this.state.xPlayer ? tab[i] = "X" : tab[i] = "O"
            history.push(tab)
            this.calculateWinner(tab);
            this.setState({
                history : history,
                step : history.length -1,
                xPlayer : !this.state.xPlayer
            })
        } 
    }

    goTo(step) {
        this.setState({
            step : step,
            xPlayer : step % 2 === 0 ? true : false,
            winner : null
        })
        console.log("hello")
    }

    handleReset() {
        this.setState({
            history : [
                Array(9).fill(null)
            ],
            step : 0,
            winner : null, 
            xPlayer : true
        })
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                this.setState({winner : squares[a]})
            }
        }
    }

    render() {
        let statut
        if(this.state.winner) {
            statut = <h2>Le gagnant est : { this.state.winner }</h2>
        } else {
            statut = <h2>C'est à {this.state.xPlayer ? 'X' : 'O'} de jouer</h2>
        }

        let moves = this.state.history.map( (x, i) => {
            return (
                <li key={i}>
                    <button onClick={() => this.goTo(i)}>Mouvement {i + 1 }</button>
                </li>
            )
        })

        console.log(moves)
        
        return (
            <div className={ Style.gamePanel }>
                
                <h1>Morpion</h1>
                { statut }
                <div>
                    <Board squares={ this.state.history[this.state.step] } onClick={(i) => this.handleClick(i)} reset={() => this.handleReset()}/>
                    <ul>
                        { moves }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Game