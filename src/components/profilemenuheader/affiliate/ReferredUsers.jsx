import React from 'react'
import {
  Stack, Select, Text, Table, Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Button,
  VStack
} from '@chakra-ui/react'

const ReferredUsers = () => {
  return (
    <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
      <Stack direction={'column'} spacing={'4'}>

        <Stack direction={'row'} color={'white'} >
          <Stack>
            <Text>
              Campaign Name
            </Text>
            <Select
              fontSize={'sm'}
              fontWeight={'500'}
              color={'white'}
              width={'fit-content'}
              borderColor={'#4C667B'}
              _hover={{ borderColor: '#4C667B' }}
              _active={{ borderColor: '#4C667B' }}
              _focus={{ borderColor: '#4C667B' }}
            >
              <option style={{ backgroundColor: 'black' }}>SohaibAshraf(0 Deposits)</option>
            </Select>

          </Stack>

          <Stack>
            <Text>
              Sort by
            </Text>
            <Select
              fontSize={'sm'}
              fontWeight={'500'}
              color={'white'}
              width={'fit-content'}
              borderColor={'#4C667B'}
              _hover={{ borderColor: '#4C667B' }}
              _active={{ borderColor: '#4C667B' }}
              _focus={{ borderColor: '#4C667B' }}
            >
              <option style={{ backgroundColor: 'black' }}>Created</option>
              <option style={{ backgroundColor: 'black' }}>Deposit Account</option>
              <option style={{ backgroundColor: 'black' }}>Withdrawn</option>
            </Select>

          </Stack>

        </Stack>

        <TableContainer>
          <Table variant='striped' colorScheme='black'>
            <Thead>
              <Tr>
                <Th textAlign={'center'} >Username</Th>
                <Th textAlign={'center'} >Registered</Th>
                <Th textAlign={'center'} >Total Deposits</Th>
                <Th textAlign={'center'} >Last Deposit</Th>
                <Th textAlign={'center'} >Wagered</Th>
                <Th textAlign={'center'} >Commission</Th>
              </Tr>
            </Thead>
            <Tbody>


            </Tbody>

          </Table>
        </TableContainer>


        <VStack>
          <Center>
            <Button variant={'link'} >
              Previous
            </Button>
            <Button ml={'2'} variant={'link'}  >
              Next
            </Button>
          </Center>
        </VStack>


      </Stack>


    </Stack>
  )
}

export default ReferredUsers