import './App.css'
import { Box } from '@chakra-ui/react'
 import Game from './pages/Game'

function App() {

  return (
    <>
      <Box bg='tomato' w='100%' h='100%' p={4} color='white'>
        Chess App
        <Game></Game>
      </Box>
    </>
  )
}

export default App
