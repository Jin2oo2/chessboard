import React, { useState } from 'react'
import { Box, Button, Heading, Text, Stack } from '@chakra-ui/react'

export default function Home() {
    const [level, setLevel] = useState(null)

    function handleLevel(level) {
        setLevel(level)
    }

    return (
        <>
            <Box display='flex' justifyContent='center' h={600} bg=''>
                <Box w='50%'  display='flex' alignItems='center'>
                    <Box>
                        <Heading
                            size='4xl'
                            bgGradient='linear(to-l, #7928CA, #FF0080)'
                            bgClip='text'
                            fontWeight='extrabold'
                            mb={4}
                        >
                            ChessMaster
                        </Heading>
                        <Text as='i' fontSize='3xl' fontWeight='bold'>
                            Welcome to the world of chess mastery. Sharpen your mind and pit your tactics against our computer opponent for a challenging game!
                        </Text>
                    </Box>
                </Box>

                <Box w='35%' ml={6} display='flex' alignItems='center'>
                    <Box bg='white' boxShadow='md' rounded='lg' h={250} w={450} p={2} display='flex' justifyContent='center' alignItems='center'>
                        <Box>
                            <Text fontSize='3xl' fontWeight='bold'>Choose Difficulty</Text>
                            <Stack direction='row' mt={4}>
                                <Button onClick={() => handleLevel('easy')} variant={level === 'easy' ? 'solid' : 'outline'} colorScheme='green' w={20}>Easy</Button>
                                <Button onClick={() => handleLevel('medium')} variant={level === 'medium' ? 'solid' : 'outline'} colorScheme='yellow' w={20}>Medium</Button>
                                <Button onClick={() => handleLevel('hard')} variant={level === 'hard' ? 'solid' : 'outline'} colorScheme='red' w={20}>Hard</Button>
                            </Stack>
                            <Button colorScheme='messenger' size='lg' mt={6}>Start Game</Button>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </>
    )
}
