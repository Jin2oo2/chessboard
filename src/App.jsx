import './App.css'
import { Box } from '@chakra-ui/react'
import Game from './pages/Game'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Box bgGradient="linear(to-t, #fff2cc, #f5e6d1)" w='100%' h='calc(100vh)'>
        <Header />
        <Home />
        
      </Box>
      
    </>
  )
}

export default App
