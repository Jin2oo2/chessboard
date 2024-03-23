import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import chess_header_icon from '/chess_header.png'
import LoginSignupButton from './LoginSignupButton'
import Menu from './Menu'


export default function Header() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) return
    setUser(JSON.parse(user))
  }, [])
  return (
    <>
      <Box bg="white" boxShadow="md" p={3} mb={5} display="flex" justifyContent="space-between">
        <Link to='/'>
          <Box as='button' display='flex' alignItems="center">
            <img src={chess_header_icon} width="40" height="40"/>
            <Text fontSize="2xl" fontWeight="bold" ml={3}>ChessMaster Online</Text>
          </Box>
        </Link>
        
        {user ? <Menu /> : <LoginSignupButton />}
      </Box>
    </>
  )
}
