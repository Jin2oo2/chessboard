import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Stack, Button } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Menu() {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useEffect(() => {
        const user = localStorage.getItem('user')
        const token = localStorage.getItem('jwt_token')

        if (!user) return
        setUser(JSON.parse(user))

        if (!token) return
        setToken(token)

    }, [user, token])

    async function handleLogout(e) {
        e.preventDefault()
        try {
            localStorage.clear()
            onClose()
            navigate('/')
            window.location.reload();
            console.log('Logout successful')
        } catch (error) {
            console.log(error)
            alert(error)
        }
    } 

    return (
        <>
            <HamburgerIcon boxSize={10} ref={btnRef} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>MENU</DrawerHeader>

                    <DrawerBody>
                        <Stack spacing={8}>
                            <Link to='/profile' onClick={onClose}>
                                <Button w='100%' size='lg' colorScheme='black' variant='link'>Profile</Button>
                            </Link>
                            <Button w='100%' size='lg' colorScheme='red' variant='link' onClick={handleLogout} >Logout</Button>
                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
  )
}
