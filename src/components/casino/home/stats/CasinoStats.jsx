import React from 'react'
import {RiSpyFill} from 'react-icons/ri'
import AnimateTable from '../../../ui/AnimateTable'
import {
    HStack,
    IconButton,
    Stack,
    Tab,
    Table,
    TableContainer,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Tbody,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr,
    Select
  } from '@chakra-ui/react';
const CasinoStats = () => {
  return (
     <Tabs variant="soft-rounded">
            <Stack direction={'row'} align={'center'} justify={'space-between'}>
              <TabList
                overflowX={'auto'}
                w={'fit-content'}
                borderRadius={'full'}
                bgColor={'#0F212E'}
              >
                <Stack direction={'row'} p={'2'}>
                  <Tab
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    w={'max-content'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <HStack spacing={'2'}>
                      <Text>My Bets</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    w={'fit-content'}
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    // w={'max-content'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <HStack spacing={'2'}>
                      <Text>All Bets</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    w={'max-content'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <HStack spacing={'2'}>
                      <Text> High Rollers</Text>
                    </HStack>
                  </Tab>
                  <Tab
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    w={'max-content'}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    <HStack spacing={'2'}>
                      <Text> Races</Text>
                    </HStack>
                  </Tab>
                </Stack>
              </TabList>
              {/* Table rows listing */}
              <Stack w={'fit-content'} direction={'row'}>
                <Tooltip label="Ghost Mode" placement="top">
                  <IconButton
                    icon={<RiSpyFill />}
                    variant={'ghost'}
                    color={'white'}
                    _hover={{}}
                    _focus={{}}
                    _active={{}}
                  />
                </Tooltip>
                <Select
                  defaultValue={'20'}
                  color={'white'}
                  borderColor={'#4C667B'}
                  _hover={{ borderColor: '#4C667B' }}
                  _active={{ borderColor: '#4C667B' }}
                  _focus={{ borderColor: '#4C667B' }}
                >
                  <option value="0" style={{ backgroundColor: '#0F212E' }}>
                    0
                  </option>
                  <option value="10" style={{ backgroundColor: '#0F212E' }}>
                    10
                  </option>
                  <option value="20" style={{ backgroundColor: '#0F212E' }}>
                    20
                  </option>
                  <option value="30" style={{ backgroundColor: '#0F212E' }}>
                    30
                  </option>
                  <option value="40" style={{ backgroundColor: '#0F212E' }}>
                    40
                  </option>
                </Select>
              </Stack>
            </Stack>
            <TabPanels>
              {/* My Bets */}
              <TabPanel padding={'0'} py={'4'}>
              </TabPanel>
              {/* All Bets */}
              <TabPanel>
                <TableContainer>
                  <Table variant="striped" colorScheme={'gray'}>
                    <Thead>
                      <Tr>
                        <Th>Game</Th>
                        <Th>User</Th>
                        <Th>Time</Th>
                        <Th isNumeric>Bet Amount</Th>
                        <Th isNumeric>Multiplier</Th>
                        <Th isNumeric>Payout</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Stack></Stack>
                      </Tr>
                      <Tr>
                        <Stack></Stack>
                      </Tr>
                      <Tr></Tr>
                      <Tr>
                        <Stack></Stack>
                      </Tr>
                      <Tr></Tr>
                      <Tr>
                        <Stack></Stack>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel>
                <AnimateTable />
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
  )
}

export default CasinoStats