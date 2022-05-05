import React, { Component } from 'react';
import Board from './Board/Board'
import Style from './Game.module.scss'

class Game extends Component {

    constructor(props) {
        super(props)
        this.state = {
            squares : Array(9).fill(null),
            xPlayer : true,
            winner : null
        }
    }

    handleClick(i) {
        let tab = this.state.squares.slice()
        if(!tab[i] && !this.state.winner) {
            this.state.xPlayer ? tab[i] = "X" : tab[i] = "O"
            this.calculateWinner(tab);
            this.setState({
                squares : tab,
                xPlayer : !this.state.xPlayer
            })
        } 
    }

    handleReset() {
        this.setState({
            squares : Array(9).fill(null),
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
        return (
            <div className={ Style.gamePanel }>
                
                <h1>Morpion</h1>
                { statut }
                <div>
                    <Board squares={ this.state.squares } onClick={(i) => this.handleClick(i)} reset={() => this.handleReset()}/>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Game