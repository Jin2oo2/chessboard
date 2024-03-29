import { useEffect, useState } from 'react'
import { Box, Button, Text, Divider } from '@chakra-ui/react'
import { Avatar, AvatarBadge } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

export default function Profile() {
  const [user, setUser] = useState(null)
  const [records, setRecords] = useState([])

  useEffect(() => {
    const user = localStorage.getItem('user')
        if (!user) return
        setUser(JSON.parse(user))
  }, [])

  console.log('user', user)

  return (
    <>
      <Box bg='black' h={500} display='flex' justifyContent='center' alignItems='center'>
        <Box bg='white' w={550} p={10} display='flex' justifyContent='center' boxShadow='lg' borderRadius='lg'>
          <Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar name='John Smith' src='' size='xl' mb={5}/>
              <Box ml={5}>
                <Text fontSize='2xl' fontWeight='bolder' >John Smith</Text>
                <Text color='grey' >Joined on 2023/08/15</Text>
              </Box>
            </Box>
            
            <Divider />

            <Box mt={5} display='flex' justifyContent='center'>
              <Box>
                <Text fontWeight='bold'>STATS</Text>
                <Box>
                  <Text color='green'>WIN 6</Text>
                  <Text color='red'>LOSE 3</Text>
                  <Text color='grey'>DRAW 2</Text>
                </Box>
              </Box> 
            </Box>

            <Box mt={4} display='flex' justifyContent='flex-end'>
              <Button>Match Records</Button>
            </Box>

            {/* <TableContainer>
              <Table variant='simple'>
                <TableCaption>Game Records</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Result</Th>
                    <Th>Difficulty</Th>
                    <Th>Date played</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                
              </Table>
            </TableContainer> */}
          </Box>
        </Box>
      </Box>
    </>
  )
}
