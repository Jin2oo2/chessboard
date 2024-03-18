import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"
import { useState, useEffect } from "react"

function Game() {
  const [game, setGame] = useState(new Chess())
  const [playerMoved, setPlayerMoved] = useState(false);

  function onBegin(piece, sourceSquare) {
    if (game.isGameOver() || game.isCheckmate() || game.isDraw()) {
      return false
    }
  }

  function isDraggablePiece(pieceData) {
    return pieceData.piece[0] === 'w'
  } 

  function makeAMove(move) {
    const newGame = new Chess(game.fen())
    const result = newGame.move(move)
    setGame(newGame)
    return result
  }

  function makeRandomMove() {
    console.log("makeRandomMove run")
    console.log(game.fen())
    const possibleMoves = game.moves()
    if (game.isGameOver() || possibleMoves.length === 0 || game.isCheckmate() || game.isDraw()) {
      console.log("GAME OVER")
      return
    }

    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    makeAMove(possibleMoves[randomIndex])
  }

  function onDrop(sourceSquare, targetSquare) {
    try {
      const move = makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      })
      console.log(move)
      setPlayerMoved(true)
    } catch (error) {
      console.log(error)
      return false
    } 
  }

  useEffect(() => {
    if (!playerMoved) return;
    setTimeout(makeRandomMove, 500);
    setPlayerMoved(false)
  }, [game, playerMoved]);

  return (
    <>
      <h1>This is chess board</h1>
      <p>Current FEN is {game.fen()}</p>
      <p>{game.turn() === 'b' ? 'BLACK' : 'WHITE'} turn</p>
      <p>{game.isGameOver() === true ? 'Game Over' : 'Game Ongoing'}</p>
      <Chessboard
        boardWidth="560"
        position={game.fen()} 
        onPieceDrop={onDrop} 
        onPieceDragBegin={onBegin} 
        allowDragOutsideBoard={true} 
        isDraggablePiece={isDraggablePiece}
      />
    </>
  )
}

export default Game