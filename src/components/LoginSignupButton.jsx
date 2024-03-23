import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Text } from '@chakra-ui/react'

export default function LoginSignupButton() {
  return (
    <>
        <div>
            <Link to='/login'>
                <Button mr={6} variant='ghost' colorScheme='whatsapp'>Login</Button>
            </Link>
            <Link to='/signup'>
                <Button mr={2} variant='outline' colorScheme='whatsapp'>Sign Up</Button>
            </Link>
        </div>
    </>
  )
}
