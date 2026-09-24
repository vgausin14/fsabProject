import { useState } from 'react';

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares,move) => {
    let description;
    if (move > 0){
      description = 'Go to move #' + move;
    }
    else{
      description = 'Go to game start';
    }
    return (
      <li key={move}>   
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
      );
    }
  )

  return(
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function Square({value, onSquareClick}) {

  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

function Board({xIsNext, squares, onPlay}) {
  const[steal, setSteal] = useState(false); 

  function handleClick(i){
    if (calculateWinner(squares)){ //squares[i] is removed to allow for steal feature
      return;
    }
    else{
      if (squares[i]){ // if true this means user is attempting a steal
        if ((Math.random() * 10) > 5 && (!steal)){ // odds similar to 50%
          setSteal(true); // will update text, continue with function, and remember that a steal has happened
        }
        else {
          setSteal(false); //unsuccessful steal, skips turn
          onPlay(squares.slice()); // cues the next turn with what the board has set now
          return;
        }
      }
    }

    const nextSquares = squares.slice();
    if (xIsNext){
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "Winner: " + winner;
  }
  else {
    status = "Next player: " + (xIsNext ? "X": "O");
  }
  // steal-status is something new I created in styles.css and is displayed right under status
  return (
  <>
    <div className="status">{status}</div>
    <div className="steal-status">{steal ? "Stolen" : "Steal failed"}</div> 
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
  )
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i=0;i < lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}
