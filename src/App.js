import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "❌"
    }
  }


winner = () => {
  const winningCombos = [
    [1,2,3], // top row
    [4,5,6], // middle row
    [7,8,9], // bottom row
    [1,4,7], // left column
    [2,5,8], // middle column
    [3,6,9], // right column
    [1,5,9], // descending diagonal
    [3,5,7] // ascending diagonal
  ]
  }

  // const hasWinner = (grid: Grid): boolean => {
  //   // map the grid values to the combo keys
  //   const comboValues = winningCombos.map(
  //     (comboKeys) => comboKeys.map(
  //       (key) => grid[key]
  //     )
  //   )
  //
  //   // find returns a value or undefined
  //   const maybeWinner = comboValues
  //     .find(
  //       (comboValues) =>
  //         comboValues.every((v) => v === "❌") ||
  //         comboValues.every((v) => v === "０")
  //     );
  //
  //    // convert this value to a boolean
  //    return !!maybeWinner
  //  }



  handleGamePlay = (index) => {
    const {squares, currentPlayer} = this.state
    if(squares[index] === null) {
      squares[index] = currentPlayer
      this.setState({squares: squares, currentPlayer: currentPlayer === "❌" ? "０": "❌"})
    // } else if(index === currentPlayer2) {
    //   squares[index] = "０"
    //   this.setState({squares: squares})

    }
  }

  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.squares.map((value, index) => {
            return(
               <Square
            key={index}
            value={value}
            index={index}
            handleGamePlay={this.handleGamePlay}
            />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
