import { Link } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'
import chess_header_icon from '/chess_header.png'

export default function Header() {
  return (
    <>
      <Box bg="white" boxShadow="md" p={3} mb={5} display="flex" justifyContent="space-between">
        <Link to='/'>
          <Box as='button' display='flex' alignItems="center">
            <img src={chess_header_icon} width="40" height="40"/>
            <Text fontSize="2xl" fontWeight="bold" ml={3}>ChessMaster Online</Text>
          </Box>
        </Link>
        
        
        <div id='rightside'>
          <Link to='/login'>
            <Button mr={6} variant='ghost' colorScheme='whatsapp'>Login</Button>
          </Link>
          <Link to='/signup'>
            <Button mr={2} variant='outline' colorScheme='whatsapp'>Sign Up</Button>
          </Link>
        </div>
      </Box>
    </>
  )
}
