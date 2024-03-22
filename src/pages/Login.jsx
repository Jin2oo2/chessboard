import React, { useState } from 'react'
import { Box, Button, Center, Heading, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

  return (
    <>
        <Center>
            <Box bg='white' boxShadow='md' rounded='md' w={500} m={6} p={6} display='flex' justifyContent='center'>
                <div>
                    <Box p={2} display='flex' justifyContent='center' borderBottom='solid' borderColor='#d3d3d3' borderBottomWidth={2}>
                        <Heading>Login</Heading>
                    </Box >
                    
                    <Box m={5}>
                        <form action="" >
                            <Input mb={4} variant='flushed' placeholder='Enter username'/>
                            
                            <InputGroup mb={4}>
                                <Input variant='flushed' placeholder='Enter password' type={show ? 'text' : 'password'}/>
                                <InputRightElement>  
                                    {show ? <ViewIcon onClick={handleClick} /> : <ViewOffIcon onClick={handleClick} />}   
                                </InputRightElement>
                            </InputGroup>

                            <Button type='submit' w={300} colorScheme='cyan'>Login</Button>
                        </form>

                        <Text mt={3}>Not a member? Signup</Text>
                    </Box>
                </div>
                
            </Box>
        </Center>
        
    </>
  )
}
