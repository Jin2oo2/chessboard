import { useState } from 'react'
import { Box, Button, Center, Heading, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import PasswordChecklist from "react-password-checklist"

export default function Signup() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [canSubmit, setCanValid] = useState(false)
    const handleClick = () => setShow(!show)

    function handleDisabled(isPasswordValid) {
        setCanValid(isPasswordValid && username.length > 0)
    }

  return (
    <>
        <Center>
            <Box bg='white' boxShadow='md' rounded='md' w={500} m={6} p={6} display='flex' justifyContent='center'>
                <div>
                    <Box p={2} display='flex' justifyContent='center' borderBottom='solid' borderColor='#d3d3d3' borderBottomWidth={2}>
                        <Heading>Create an account</Heading>
                    </Box >
                    <Box m={5}>
                        <form action="" >
                            <Input mb={4} variant='flushed' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}/>
                            
                            <InputGroup mb={4}>
                                <Input variant='flushed' placeholder='Enter password' type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
                                <InputRightElement>  
                                    {show ? <ViewIcon onClick={handleClick} /> : <ViewOffIcon onClick={handleClick} />}   
                                </InputRightElement>
                            </InputGroup>

                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital"]}
                                value={password}
                                minLength={8}
                                onChange={(isValid) => handleDisabled(isValid)}
                                
                            />

                            <Button type='submit' colorScheme='cyan' mt={4} p={2} w={300} isDisabled={!canSubmit} >Sign up</Button>

                        </form>

                        <Text mt={3}>Already a member? Login</Text>
                    </Box>
                </div>
                
            </Box>
        </Center>
        
    </>
  )
}
