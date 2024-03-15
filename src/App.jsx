import './App.css'
import { Box } from '@chakra-ui/react'
import Game from './pages/Game'
import Header from './components/Header'

function App() {

  return (
    <>
      <Box bgGradient="linear(to-t, #fff2cc, #f5e6d1)" w='100%' h='calc(100vh)'>
        <Header></Header>
        <Game></Game>
      </Box>
      
    </>
  )
}

export default App
