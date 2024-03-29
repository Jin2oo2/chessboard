import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import { Box } from '@chakra-ui/react'
import Game from './pages/Game'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NoPage from './pages/NoPage'

function App() {

  return (
    <>
      <AuthProvider>
        <Box bgGradient="linear(to-t, #fff2cc, #f5e6d1)" w='100%' h='calc(100vh)'>
          <Header />      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chessgame' element={<Game />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<NoPage />} />
          </Routes>
        </Box>
      </AuthProvider>
    </>
  )
}

export default App
