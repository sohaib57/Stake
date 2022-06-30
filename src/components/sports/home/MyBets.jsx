import {
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillBookmarkDashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import bets from '../../../assets/images/bets.png';
const MyBets = () => {
  const nav = useNavigate();
  return (
    <Stack bg={'#000000ed'} px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
      <HStack pb={'6'} spacing={'2'}>
        <BsFillBookmarkDashFill color="#b1bad3" />
        <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
          My Bets
        </Text>
      </HStack>
      <Tabs variant="soft-rounded" colorScheme="green">
        {/* tab list */}
        <TabList
          marginBottom={'3'}
          overflowX={'auto'}
          maxW={'fit-content'}
          borderRadius={'full'}
          bgColor={'#010101'}
        >
          <Stack direction={'row'} p={'2'}>
            <Tab
              className="favourites"
              // onClick={() => nav('/casino/home/featured-slots')}
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              w={'max-content'}
              fontSize={'sm'}
            >
              <Text> Active</Text>
            </Tab>
            <Tab
              className="live-events"
              // onClick={() => nav('/casino/home/game-shows')}
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              w={'max-content'}
              fontSize={'sm'}
            >
              <Text> Settled</Text>
            </Tab>
          </Stack>
        </TabList>
        {/* tab panels */}
        <TabPanels>
          <TabPanel
            paddingX={'0 !important'}
            py={'2 !important'}
            className="active"
          >
            <VStack w={'100%'}>
              <Image pb={'4'} w={'12%'} src={bets} />
              <Text fontWeight={'500'} fontSize={'sm'} color={'#8B95AB'}>
                No Active Bets
              </Text>
              <Text
                _hover={{ cursor: 'pointer' }}
                fontWeight={'600'}
                fontSize={'sm'}
                color={'white'}
                lineHeight={'1'}
                onClick={() => nav('/sports/home')}
              >
                Start Betting Now!
              </Text>
              <Stack pt={'6'} direction="row" spacing={4} align="center">
                <Button isDisabled color={'#8B95AB'} variant="link">
                  Previous
                </Button>
                <Button isDisabled color={'#8B95AB'} variant="link">
                  Next
                </Button>
              </Stack>
            </VStack>
          </TabPanel>

          <TabPanel
            paddingX={'0 !important'}
            py={'2 !important'}
            className="active"
          >
            <VStack w={'100%'}>
              <Image pb={'4'} w={'12%'} src={bets} />
              <Text fontWeight={'500'} fontSize={'sm'} color={'#8B95AB'}>
                No Settled Bets
              </Text>
              <Text
                _hover={{ cursor: 'pointer' }}
                fontWeight={'600'}
                fontSize={'sm'}
                color={'white'}
                lineHeight={'1'}
                onClick={() => nav('/sports/home')}
              >
                Start Betting Now!
              </Text>
              <Stack pt={'6'} direction="row" spacing={4} align="center">
                <Button isDisabled color={'#8C959B'} variant="link">
                  Previous
                </Button>
                <Button isDisabled color={'#8C959B'} variant="link">
                  Next
                </Button>
              </Stack>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default MyBets;
