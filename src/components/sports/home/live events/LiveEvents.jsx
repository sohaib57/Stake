import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
} from '@chakra-ui/react';
import { IoIosBaseball } from 'react-icons/io';
import { GiSoccerBall,GiTennisRacket,GiBasketballBall,GiAmericanFootballPlayer } from 'react-icons/gi';
import {CgTennis} from 'react-icons/cg'
import {MdSportsMma,MdSportsCricket,MdSportsHandball} from 'react-icons/md'
import SportsDetailCard from './SportsDetailCard';
const LiveEvents = () => {
  return (
    <Stack>
      <Tabs variant="unstyled" colorScheme="green">
        {' '}
        <TabList
          overflowX={'auto'}
          // maxW={'fit-content'}
          borderRadius={'lg'}
          py={{base:'0',md:'1',lg:'2'}}
          px={'4'}
          bgColor={'#0F212E'}
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
           <SportsDetailCard/>
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

export default LiveEvents;
