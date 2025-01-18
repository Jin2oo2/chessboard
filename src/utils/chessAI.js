import { Chess } from "chess.js"

function evaluateBoard(fen) {
  const pieceValues = {
    p: -1, n: -3, b: -3, r: -5, q: -9, k: -1000, // black piece
    P: 1, N: 3, B: 3, R: 5, Q: 9, K: 1000, // white piece
  };

  return fen.split(" ")[0]
    .split("")
    .reduce((total, piece) => total + (pieceValues[piece] || 0), 0);
}

function minmax(game, depth, isMaxmizing, alpha, beta) {
  if (depth === 0 || game.isGameOver()) {
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        return {
          move: null,
          score: isMaxmizing ? -Infinity : Infinity
        };
      }
      return {
        move: null,
        score: 0 // Stalemate or draw
      };
    }
    
    return {
      move: null,
      score: evaluateBoard(game.fen())
    }
  }

  let bestMove = null
  let bestScore = isMaxmizing ? -Infinity : Infinity
  
  if (isMaxmizing) {  
    for (const move of game.moves()) {
      game.move(move)
      const result = minmax(game, depth - 1, !isMaxmizing, alpha, beta)
      game.undo()
      
      if (bestScore < result.score) {
        bestScore = result.score
        bestMove = move
      }

      alpha = Math.max(alpha, bestScore)
      if (alpha >= beta) break
    }
  } else {
    for (const move of game.moves()) {
      game.move(move)
      const result = minmax(game, depth - 1, !isMaxmizing, alpha, beta)
      game.undo()
      
      if (bestScore > result.score) {
        bestScore = result.score
        bestMove = move
      }

      beta = Math.min(beta, bestScore)
      if (alpha >= beta) break
    }
  }

  return {
    move: bestMove,
    score: bestScore
  }
}

onmessage = function (e) {
  const fen = e.data[0]
  const depth = e.data[1]
  const game = new Chess(fen)
  const result = minmax(game, depth, false, -Infinity, Infinity)
  console.log("finished running minmax: ", result.move)
  postMessage(result.move)
}