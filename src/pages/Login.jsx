import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Center, Heading, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => setShow(!show)

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: username,
                password: password
            })
            const user = await response.data
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error.response.data.detail)
        }
    }

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
                            <Input mb={4} variant='flushed' value={username} placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}/>
                            
                            <InputGroup mb={4}>
                                <Input variant='flushed' value={password} placeholder='Enter password' type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
                                <InputRightElement>  
                                    {show ? <ViewIcon onClick={handleClick} /> : <ViewOffIcon onClick={handleClick} />}   
                                </InputRightElement>
                            </InputGroup>

                            <Button type='submit' onClick={handleLogin} w={300} colorScheme='cyan'>Login</Button>
                        </form>

                        <Text mt={3}>Not a member? <Link to='/signup'>Signup</Link></Text>
                    </Box>
                </div>
                
            </Box>
        </Center>
        
    </>
  )
}
