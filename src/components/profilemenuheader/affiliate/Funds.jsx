import React from 'react'
import {
  Stack, Select, Text, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tooltip,
  HStack,
  Button,
  Center,
  VStack
} from '@chakra-ui/react'
import { SiBitcoin } from 'react-icons/si'

const Funds = () => {
  return (
    <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
      <Stack direction={'column'} spacing={'4'} color={'white'} >

        <Text>Sort By</Text>
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
          <option style={{ backgroundColor: 'black' }}>Availble</option>
          <option style={{ backgroundColor: 'black' }}>Commission</option>
          <option style={{ backgroundColor: 'black' }}>Withdrawn</option>
        </Select>

        <TableContainer>
          <Table variant='striped' colorScheme='black'>
            <Thead>
              <Tr>
                <Th textAlign={'center'} >Available</Th>
                <Th textAlign={'center'} >Commission</Th>
                <Th textAlign={'center'} >Withdrawn</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign={'center'}  >
                  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                    <HStack justifyContent={'center'} >
                      <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                    </HStack>
                  </Tooltip>
                </Td>

                <Td textAlign={'center'}  >
                  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                    <HStack justifyContent={'center'} >
                      <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                    </HStack>
                  </Tooltip>
                </Td>

                <Td isNumeric textAlign={'center'} >  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                  <HStack justifyContent={'center'} >
                    <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                  </HStack>
                </Tooltip>
                </Td>

              </Tr>

              <Tr>
                <Td textAlign={'center'} >
                  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                    <HStack justifyContent={'center'} >
                      <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                    </HStack>
                  </Tooltip>
                </Td>
                <Td textAlign={'center'} >
                  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                    <HStack justifyContent={'center'} >
                      <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                    </HStack>
                  </Tooltip>
                </Td>
                <Td textAlign={'center'} >
                  <Tooltip placement='top' label=" CA$0.00" aria-label='A tooltip'>
                    <HStack justifyContent={'center'} >
                      <span>  CA$0.00  </span> <SiBitcoin color={'#00e701'} />
                    </HStack>
                  </Tooltip>
                </Td>
              </Tr>

            </Tbody>

          </Table>
        </TableContainer>

        <Center>
          <VStack>
            <Button color={'black'} >
              Withdraw Available Commission
            </Button>
            <Text >
              Transfers affiliate commission to your available balance.
            </Text>
          </VStack>
        </Center>

      </Stack>
    </Stack >
  )
}

export default Funds