import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
  Heading,
  Select,
  HStack,
} from '@chakra-ui/react';
import { IoIosBaseball } from 'react-icons/io';
import {
  GiSoccerBall,
  GiTennisRacket,
  GiBasketballBall,
  GiAmericanFootballPlayer,
} from 'react-icons/gi';
import { CgTennis } from 'react-icons/cg';
import { MdSportsMma, MdSportsCricket, MdSportsHandball } from 'react-icons/md';
import { BsPlayCircleFill } from 'react-icons/bs';
import { FaGripHorizontal } from 'react-icons/fa';
import SportsDetailCard from './SportsDetailCard';
import { useNavigate } from 'react-router-dom';

const Favourites = () => {
  const nav = useNavigate();
  return (
    <Stack>
      <Stack
        py={'4'}
        justifyContent={'space-between'}
        direction={'row'}
        alignItems={'center'}
      >
        <HStack
          w={'fit-content'}
          _hover={{ cursor: 'pointer' }}
          onClick={() => nav('/stakeoriginals')}
          color={'gray.400'}
          // pb={'3'}
          spacing={'2'}
          alignItems={'center'}
        >
          <BsPlayCircleFill fontSize={'1.2rem'} />
          <Heading
            minW={'fit-content'}
            fontWeight={'500'}
            color={'white'}
            fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
          >
            {' '}
            Live Favourites
          </Heading>
        </HStack>
        <Stack
          maxWidth={'fit-content'}
          direction={'row'}
          spacing={{ base: '2', md: '4', lg: '6' }}
          color="white"
          alignItems={'center'}
        >
          <FaGripHorizontal color="#B1BAD3" fontSize={'1rem'} />
          <Select
            fontSize={'sm'}
            fontWeight={'500'}
            color={'white'}
            borderColor={'#4C667B'}
            _hover={{cursor:'pointer' }}
          >
            <option style={{ backgroundColor: 'black' }}>Winner</option>
            <option style={{ backgroundColor: 'black' }}>Total</option>
            <option style={{ backgroundColor: 'black' }}>Handicap</option>
          </Select>
        </Stack>
      </Stack>
      <Tabs variant="unstyled" colorScheme="green">
        {' '}
        <TabList
          overflowX={'auto'}
          // maxW={'fit-content'}
          borderRadius={'lg'}
          py={{ base: '0', md: '1', lg: '2' }}
          px={'4'}
          bgColor={'#010101'}
        >
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <IoIosBaseball color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Baseball
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <GiSoccerBall color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Soccer
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <CgTennis color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Tennis
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <GiTennisRacket color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                TableTennis
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <MdSportsMma color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                League
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <GiBasketballBall color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Basketball
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <MdSportsCricket color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Cricket
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <MdSportsHandball color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Handball
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <GiBasketballBall color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Basketball 3x3
              </Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack spacing={'0.5'} alignItems={'center'}>
              <GiAmericanFootballPlayer color={'#b1bad3'} fontSize={'2rem'} />
              <Text fontWeight={'500'} color={'#b1bad3'} fontSize={'xs'}>
                Electronics League
              </Text>
            </Stack>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <SportsDetailCard />
            {/* popular events */}
            <Stack py={'4'} justifyContent={'space-between'} direction={'row'}>
              <HStack
                w={'fit-content'}
                _hover={{ cursor: 'pointer' }}
                onClick={() => nav('/stakeoriginals')}
                color={'gray.400'}
                pb={'3'}
                spacing={'2'}
                alignItems={'center'}
              >
                <BsPlayCircleFill fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                  {' '}
                  Upcoming Favourites
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
                  //   placeholder="Popular"
                >
                  <option style={{ color: 'black' }}>Winner</option>
                  <option style={{ color: 'black' }}>Total</option>
                  <option style={{ color: 'black' }}>Handicap</option>
                </Select>
              </Stack>
            </Stack>
            <SportsDetailCard />
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>two!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>one!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>two!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>one!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>two!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>one!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>two!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>one!</p>
          </TabPanel>
          <TabPanel color={'white'} paddingX={'0 !important'}>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Favourites;
