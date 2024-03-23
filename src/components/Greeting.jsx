import { Box, Text } from '@chakra-ui/react'

export default function Greeting({ username }) {
  return (
    <>
        <Text color='tomato' fontSize='4xl' fontWeight='bold' m={5}>Hello, {username}!</Text>
    </>
  )
}
