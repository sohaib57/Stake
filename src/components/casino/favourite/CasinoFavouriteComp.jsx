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
} from '@chakra-ui/react';
import React from 'react';
import { RiSearch2Line } from 'react-icons/ri';
import FavouriteLogo from '../../../assets/images/favouriteLogo.png';
import LayoutComp from '../../../layout/LayoutComp';
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
            <TabList
              overflowX={'auto'}
              maxW={'fit-content'}
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
            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table variant="striped" colorScheme="teal">
                    <TableCaption>
                      Imperial to metric conversion factors
                    </TableCaption>
                    <Thead>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
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
                    <Tfoot>
                      <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default CasinoFavouriteComp;
