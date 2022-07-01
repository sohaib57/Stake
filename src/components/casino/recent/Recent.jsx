import {
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  chakra,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Table,
  TableCaption,
  Tfoot,
  Box,
  IconButton,
  Select,
  Tooltip,
  extendTheme,
  ChakraProvider,
} from '@chakra-ui/react';
import React from 'react';
import { BiTimer } from 'react-icons/bi';
import { RiSearch2Line, RiSpyFill } from 'react-icons/ri';
import { TiChartLineOutline } from 'react-icons/ti';
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillDollarCircle } from 'react-icons/ai';
import FavouriteLogo from '../../../assets/images/favouriteLogo.png';
import LayoutComp from '../../../layout/LayoutComp';
import AnimateTable from '../../ui/AnimateTable';
// import { Table } from 'antd';

const customTheme = extendTheme({
  components: {
    Table: {
      variants: {
        mytable: {
          tr: {
            _odd: {
              background: '#213743',
            },
          },
        },
      },
    },
  },
});
const RecentComp = () => {
  return (
    <LayoutComp>
      {/* Recent Logo section */}
      <Stack
        position={'relative'}
        minH={'28'}
        justify={'center'}
        bgImage={FavouriteLogo}
        bgRepeat={'no-repeat'}
        bgPos={'right'}
        bgColor={'#000000e3'}
      >
        <Heading
          position={'absolute'}
          left={'10'}
          textAlign={'center'}
          color={'white'}
        >
          Recent
        </Heading>
      </Stack>
      {/* Body Section */}
      <Stack
        w={'100%'}
        bgColor={'#000000ed'}
        px={'6'}
        marginTop={'0px !Important'}
      >
        {/* Search Section */}
        <Stack py={'6'}>
          <InputGroup border={'1px solid #2f4553'} borderRadius={'full'}>
            <InputLeftElement
              pointerEvents={'none'}
              children={<RiSearch2Line color="#4C667B" size={'1.2em'} />}
              pl={'2'}
            />
            <Input
              placeholder="Search your game"
              bgColor={'black'}
              borderRadius={'full'}
              _hover={{ borderColor: '#557086' }}
            />
          </InputGroup>
        </Stack>
        <Text color={'#b1bad3'} textAlign={'center'} pb={'6'}>
        No recent games
        </Text>
        {/* Tabs Header */}
        <Stack
          px={{ base: '2', md: '2', lg: '2', xl: '2' }}
          py={'8'}
          className="tabs"
        >
          <Tabs variant="soft-rounded">
            <Stack direction={'row'} align={'center'} justify={'space-between'}>
              <TabList
                overflowX={'auto'}
                w={'fit-content'}
                borderRadius={'full'}
                bgColor={'black'}
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
                <TableContainer>
                  <Table variant="unstyled" color={'#b1bad3'}>
                    <Thead>
                      <Tr>
                        <Th>Game</Th>
                        <Th>Time</Th>
                        <Th isNumeric>Bet Amount</Th>
                        <Th>Multiplier</Th>
                        <Th>Payout</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr></Tr>
                      <Tr></Tr>
                      <Tr></Tr>
                      <Tr></Tr>
                      <Tr></Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
              {/* All Bets */}
              <TabPanel>
                <AnimateTable />
              </TabPanel>
              {/* High Rollers */}
              <TabPanel>
                <AnimateTable />
              </TabPanel>
              {/* Races */}
              <TabPanel>
                <Stack
                  direction={'row'}
                  justify={'space-between'}
                  borderBottom={'2px solid #213743'}
                  pb={'4'}
                >
                  <Stack
                    color={'#B1BAD3'}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                  >
                    <BiTimer size={'1.3rem'} />
                    <Text fontWeight={'bold'} color={'white'}>
                      $100k Race - 24 Hours
                    </Text>
                  </Stack>
                  <Stack
                    color={'#B1BAD3'}
                    direction={{ base: 'column', sm: 'row' }}
                    align={'center'}
                  >
                    <TiChartLineOutline size={'1.3rem'} />
                    <Text fontWeight={'bold'} color={'white'}>
                      Ends in 9 hours
                    </Text>
                  </Stack>
                </Stack>
                <TableContainer>
                  <ChakraProvider theme={customTheme}>
                    <Table variant="mytable" color={'white'}>
                      <Thead>
                        <Tr>
                          <Th bgColor={'#1A2C38'}>User</Th>
                          <Th bgColor={'#1A2C38'} isNumeric>
                            <Stack direction={'row'} color={'#4A6377'}>
                              <Tooltip
                                placement="top"
                                label="Your Wage for all currencies is normalised to the race currency"
                              >
                                <FaInfoCircle size={'1.1rem'} />
                              </Tooltip>
                              <Text color={'white'}>Wagered</Text>
                            </Stack>
                          </Th>
                          <Th bgColor={'#1A2C38'} isNumeric>
                            Prize
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>
                            <Stack direction={'row'} align={'center'}>
                              <Text>1st</Text>
                              <Tooltip
                                placement="top"
                                label={'This user has privacy enabled'}
                              >
                                <Stack direction={'row'} align={'center'}>
                                  <RiSpyFill />
                                  <Text>Hidden</Text>
                                </Stack>
                              </Tooltip>
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Stack direction={'row'} align={'center'}>
                              <Text>2nd</Text>
                              <Text fontWeight={'bold'}>Sohaib</Text>
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            <Stack direction={'row'} align={'center'}>
                              <Text>3rd</Text>
                              <Tooltip
                                placement="top"
                                label={'This user has privacy enabled'}
                              >
                                <Stack direction={'row'} align={'center'}>
                                  <RiSpyFill />
                                  <Text>Hidden</Text>
                                </Stack>
                              </Tooltip>
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                          <Td isNumeric>
                            <Stack
                              direction={'row'}
                              color={'#6CDE07'}
                              align={'center'}
                            >
                              <Text color={'white'}>$21,551,866.81</Text>
                              <AiFillDollarCircle size={'1.2rem'} />
                            </Stack>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </ChakraProvider>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default RecentComp;
