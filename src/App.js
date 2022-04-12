import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [null, null, null, null, null, null, null, null, null],
      currentPlayer: "❌",
      
    }
 
  }


  handleGamePlay = (index) => {
    const {squares, currentPlayer} = this.state
    if(squares[index] === null) {
      squares[index] = currentPlayer
      this.setState({squares: squares, currentPlayer: currentPlayer === "❌"? "０": "❌"})
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
