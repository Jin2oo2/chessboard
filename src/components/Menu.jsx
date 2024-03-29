import React, { useEffect, useState } from 'react'
import { useAuth } from '../AuthContext'
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
    const { handleLogout } = useAuth()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const handleSubmit = (e) => {
        handleLogout(e)
        onClose()
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
                            <Button w='100%' size='lg' colorScheme='red' variant='link' onClick={handleSubmit} >Logout</Button>
                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
  )
}
