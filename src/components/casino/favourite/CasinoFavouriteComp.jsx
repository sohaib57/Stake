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
} from '@chakra-ui/react';
import React from 'react';
import { RiSearch2Line, RiSpyFill } from 'react-icons/ri';
import FavouriteLogo from '../../../assets/images/favouriteLogo.png';
import LayoutComp from '../../../layout/LayoutComp';
import AnimateTable from '../../ui/AnimateTable';
// import { Table } from 'antd';

const CasinoFavouriteComp = () => {
    return (
        <LayoutComp>
            {/* Favourite Logo section */}
            <Stack
                position={'relative'}
                minH={'28'}
                justify={'center'}
                bgImage={FavouriteLogo}
                bgRepeat={'no-repeat'}
                bgPos={'right'}
                bgColor={'#213743'}
            >
                <Heading
                    position={'absolute'}
                    left={'10'}
                    textAlign={'center'}
                    color={'white'}
                >
                    Favourite
                </Heading>
            </Stack>
            {/* Body Section */}
            <Stack
                w={'100%'}
                bgColor={'#1A2C38'}
                px={'6'}
                marginTop={'0px !Important'}
            >
                <Stack py={'6'}>
                    {/* Search Section */}
                    <InputGroup border={'1px solid #2f4553'} borderRadius={'full'}>
                        <InputLeftElement
                            pointerEvents={'none'}
                            children={<RiSearch2Line color="#4C667B" size={'1.2em'} />}
                            pl={'2'}
                        />
                        <Input
                            placeholder="Search your game"
                            bgColor={'#0F212E'}
                            borderRadius={'full'}
                            _hover={{ borderColor: '#557086' }}
                        />
                    </InputGroup>
                </Stack>
                <Text color={'#b1bad3'} textAlign={'center'} pb={'6'}>
                    No favourites yet, use the{' '}
                    <chakra.span fontWeight={'bold'}>✩</chakra.span> to favourite games.
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
                                <Tooltip label='Ghost Mode' placement='top'>
                                    <IconButton icon={<RiSpyFill />} variant={'ghost'} color={'white'} _hover={{}} _focus={{}} _active={{}} />
                                </Tooltip>
                                <Select defaultValue={'20'} color={'white'} borderColor={'#4C667B'} _hover={{ borderColor: '#4C667B' }} _active={{ borderColor: '#4C667B' }} _focus={{ borderColor: '#4C667B' }}>
                                    <option value='0' style={{ backgroundColor: '#0F212E' }}>0</option>
                                    <option value='10' style={{ backgroundColor: '#0F212E' }}>10</option>
                                    <option value='20' style={{ backgroundColor: '#0F212E' }}>20</option>
                                    <option value='30' style={{ backgroundColor: '#0F212E' }}>30</option>
                                    <option value='40' style={{ backgroundColor: '#0F212E' }}>40</option>
                                </Select>
                            </Stack>
                        </Stack>
                        <TabPanels >
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
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            {/* All Bets */}
                            <TabPanel>
                                <TableContainer>
                                    <Table variant="unstyled" color={'#b1bad3'}>
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
                                                <Stack >

                                                </Stack>
                                            </Tr>
                                            <Tr>
                                                <Stack></Stack>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                                <Stack></Stack>
                                            </Tr>
                                            <Tr>
                                            </Tr>
                                            <Tr>
                                                <Stack></Stack>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                            <TabPanel><AnimateTable /></TabPanel>
                            <TabPanel></TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>

            </Stack>
        </LayoutComp>
    );
};

export default CasinoFavouriteComp;
