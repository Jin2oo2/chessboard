import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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
import { useAuth } from '../AuthContext'

export default function Profile() {
  const { user } = useAuth()
  const [records, setRecords] = useState(null)
  const navigate = useNavigate()

  const getGames = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/${user.id}/games`)
      console.log(response.data)
      setRecords(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user) return
    getGames()
  }, [user])

  const countStats = (result) => {
    let count = 0
    for (let i = 0; i < (records || []).length; i++) {
      if (records[i].result === result) count++
    }
    return count
  }


  const formatDateTime = (datetimeString) => {
    const dateTime = new Date(datetimeString);
  
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

  const notLoggedIn = () => {
    return (
      <>You are not logged in</>
    )
  }

  return (
    <>
      <Box h={500} display='flex' justifyContent='center' alignItems='center'>
        <Box bg='white' w={550} p={10} display='flex' justifyContent='center' boxShadow='lg' borderRadius='lg'>
        {user ? (
          <Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Avatar name={user.username} src={user.avatar} size='xl' mb={5}/>
              <Box ml={5}>
                <Text fontSize='2xl' fontWeight='bolder' >{user.username}</Text>
                <Text color='grey' >Joined on {formatDateTime(user.date_joined).split(' ')[0]}</Text>
              </Box>
            </Box>
            
            <Divider />

            <Box mt={5} display='flex' justifyContent='center'>
              <Box>
                <Text fontWeight='bold'>STATS</Text>
                <Box>
                  <Text color='green'>WIN {countStats('win')}</Text>
                  <Text color='red'>LOSE {countStats('lose')}</Text>
                  <Text color='grey'>DRAW {countStats('draw')}</Text>
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
        ) : (<Text>You are not logged in</Text>)}
        </Box>
      </Box>
    </>
  )
}
