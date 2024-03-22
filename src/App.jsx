import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@chakra-ui/react'
import Game from './pages/Game'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import NoPage from './pages/NoPage';

function App() {

  return (
    <>
      <Box bgGradient="linear(to-t, #fff2cc, #f5e6d1)" w='100%' h='calc(100vh)'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chessgame' element={<Game />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
      
    </>
  )
}

export default App
