import React, { Component } from 'react'
import Style from './Board.module.scss'

class Board extends Component {
    render() {
        return (
            <div className={ Style.board}>
                <div className={ Style.tableau }>
                    <div onClick={() => this.props.onClick(0)}>{this.props.squares[0]}</div>
                    <div onClick={() => this.props.onClick(1)}>{this.props.squares[1]}</div>
                    <div onClick={() => this.props.onClick(2)}>{this.props.squares[2]}</div>
                    <div onClick={() => this.props.onClick(3)}>{this.props.squares[3]}</div>
                    <div onClick={() => this.props.onClick(4)}>{this.props.squares[4]}</div>
                    <div onClick={() => this.props.onClick(5)}>{this.props.squares[5]}</div>
                    <div onClick={() => this.props.onClick(6)}>{this.props.squares[6]}</div>
                    <div onClick={() => this.props.onClick(7)}>{this.props.squares[7]}</div>
                    <div onClick={() => this.props.onClick(8)}>{this.props.squares[8]}</div>
                </div>
                <button className={ Style.reset } onClick={() => this.props.reset()}>Reset</button>
            </div>
            
        )
    }
}

export default Board