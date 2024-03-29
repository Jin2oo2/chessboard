import { Chessboard } from "react-chessboard"
import { Chess } from "chess.js"
import { useState, useEffect } from "react"
import { Box, Button, Heading, Text, Divider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'

function Game() {
  const [game, setGame] = useState(new Chess())
  const [playerMoved, setPlayerMoved] = useState(false);
  const [gameProgress, setGameProgress] = useState('Ongoing')
  const statusColour = () => {
    if (gameProgress === 'Win!') return 'green'
    else if (gameProgress === 'Lost...') return 'red'
    else return 'grey'
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const level = localStorage.getItem('level')

  function onBegin() {
    if (game.isGameOver()) {
      return false
    }
    // if (game.isGameOver() || game.isCheckmate() || game.isDraw()) {
    //   return false
    // }
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
    // console.log("makeRandomMove run")
    // console.log(game.fen())
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
      // console.log(move)
      setPlayerMoved(true)
    } catch (error) {
      console.log(error)
      return false
    } 
  }

  function reset() {
    setGame(new Chess())
    setGameProgress('Ongoing')
  }

  useEffect(() => {
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        if (game.turn() == 'b') {
          setGameProgress('Win!')
        } else {
          setGameProgress('Lost...')
        }
      }
      else if (game.isDraw() || game.isStalemate() || game.isThreefoldRepetition() || game.isInsufficientMaterial()) {
        setGameProgress('Draw')
      }
      
      // Open modal when the game is finished
      onOpen()
    }

    if (!playerMoved) return;
    setTimeout(makeRandomMove, 500);
    setPlayerMoved(false)
  }, [game, playerMoved]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Game result</ModalHeader> 
          <ModalCloseButton />

          <ModalBody>
            <Text fontSize='4xl' fontWeight='bolder' color={statusColour}>{gameProgress}</Text>
          </ModalBody>

          <ModalFooter>
              <Button colorScheme='blue' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box display='flex' justifyContent='space-around' alignItems='center'>
        <Box>
          <Chessboard
            boardWidth="560"
            position={game.fen()} 
            onPieceDrop={onDrop} 
            onPieceDragBegin={onBegin} 
            allowDragOutsideBoard={true} 
            isDraggablePiece={isDraggablePiece}
            animationDuration={playerMoved ? null : 300}
          />
        </Box>

        <Card w={400}>
          <CardHeader>
            <Heading size='lg'>Game Info</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize='lg'>{game.turn() === 'b' ? 'BLACK' : 'WHITE'} PLAYING</Text>
            <Text fontSize='lg'>Difficulty: {level}</Text>
            <Text fontSize='lg'>State: {gameProgress}</Text>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button colorScheme='red' onClick={reset}>Reset</Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  )
}

export default Game