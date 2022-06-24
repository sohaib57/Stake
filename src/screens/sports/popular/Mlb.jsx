import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { FaGripHorizontal } from 'react-icons/fa';
import { HiFire } from 'react-icons/hi';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import LayoutComp from '../../../layout/LayoutComp';

const Mlb = () => {
  const nav = useNavigate()
  return (
    <LayoutComp>
      <Stack
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        py={'4'}
        bgColor={'#1A2C38'}
      >
        <Stack direction={'row'}>
          <Stack
            _hover={{ cursor: 'pointer', backgroundColor: '#0f212e' }}
            direction={'row'}
            alignItems={'center'}
            borderRadius={'md'}
            maxW={'fit-content'}
            bgColor={'#0F212E'}
            py={'3'}
            px={'5'}
          >
            <IoChevronBack
              fontWeight={'700'}
              fontSize={'1.2rem'}
              color="white"
            />
          </Stack>
          <Stack
            maxW={'fit-content'}
            bgColor={'#0F212E'}
            borderRadius={'md'}
            px={'4'}
            py={'3'}
          >
            <Breadcrumb separator="/" color={'#5B6870'}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'500'}
                >
                  Baseball
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'500'}
                >
                  USA
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink
                  color={'#5B6870'}
                  fontSize={'md'}
                  fontWeight={'500'}
                  href="#"
                >
                  MLB
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Stack>
        </Stack>
        <Stack pt={'8'} className="tabs">
          <Tabs variant="soft-rounded" colorScheme="green">
            {/* tab list */}
            <TabList
              marginInline={{ base: '2', md: '8', lg: '12', xl: '16' }}
              marginBottom={'3'}
              overflowX={'auto'}
              maxW={'fit-content'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
            >
              <Stack direction={'row'} p={'2'}>
                <Tab
                  className="lobby"
                  onClick={() => nav('/sports/home')}
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={'sm'}
                >
                  <HStack spacing={'2'}>
                    {/* <FaBaseballBall color="#b1bad3" /> */}
                    <Text>Lobby</Text>
                  </HStack>
                </Tab>

              </Stack>
            </TabList>
            {/* tab panels */}
            <TabPanels>
              <TabPanel paddingX={'0 !important'} className="lobby">
                <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                  {/* popular events */}
                  <Stack
                    py={'4'}
                    justifyContent={'space-between'}
                    direction={'row'}
                  >
                    <HStack
                      w={'fit-content'}
                      _hover={{ cursor: 'pointer' }}
                      onClick={() => nav('/stakeoriginals')}
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <HiFire fontSize={'1.4rem'} />
                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Popular Events
                      </Heading>
                    </HStack>
                    <Stack
                      maxWidth={'fit-content'}
                      direction={'row'}
                      spacing={'6'}
                      color="white"
                      alignItems={'center'}
                    >
                      <FaGripHorizontal color="#B1BAD3" fontSize={'1rem'} />
                      <Select
                        fontSize={'sm'}
                        fontWeight={'500'}
                        _hover={{ bg: '#071824', cursor: 'pointer' }}
                        _focusVisible={{}}
                        bg={'#0F212E'}
                        variant="filled"
                      >
                        <option style={{ color: 'black' }}>Winner</option>
                        <option style={{ color: 'black' }}>Total</option>
                        <option style={{ color: 'black' }}>Handicap</option>
                      </Select>
                    </Stack>
                  </Stack>
  
                </Stack>
              </TabPanel>
              <TabPanel paddingX={'0 !important'} className="my-bets">
               
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default Mlb;
