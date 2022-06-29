import React from 'react';
import {
  HStack,
  Stack,
  Button,
  Text,
  Img,
  Center,
  Divider,
  Heading,
  chakra,
} from '@chakra-ui/react';
import LayoutComp from '../../../layout/LayoutComp';
import Stake from '../../../assets/images/stake.png';
import DrakeLive from '../../../assets/images/drake-live.jpg';
import SingingDrake from '../../../assets/images/singing-drake.jpg';
import Card1 from '../../../assets/images/pick-roulette.jpg';
import Card2 from '../../../assets/images/pick-nba.jpg';
import { GoPrimitiveDot } from 'react-icons/go';
import '../../ui/card slider/CardSlider.css';
import stakeDrake from '../../../assets/images/stakeDrake.jpg'

const DrakeComp = () => {
  return (
    <LayoutComp>
      <Stack width={'100%'}>
        {/* {banner-section} */}
        <Stack bgColor={'#071d2a'} py={'5rem'} alignItems={'center'}>
          {/* <HStack>
            <Img src={Stake} alt="stake" width={'80px'} />
            <Center height="50px">
              <Divider orientation="vertical" borderColor={'white'} />
            </Center>
            <Text fontWeight={'600'} fontSize={'4xl'} color={'white'}>
              DRAKE
            </Text>
          </HStack> */}

          <Img width={'300px'} src={stakeDrake} />
        </Stack>
        {/* {image-text} */}
        <Stack bgColor={'#1a2c38'} mt={'0 !important'}>
          <Heading
            textAlign={'center'}
            color={'white'}
            fontWeight={'600'}
            fontSize={'xl'}
            py={10}
          >
            Journey from a Player to a Partner
          </Heading>
          {/* {1 section} */}
          <Stack
            width={'100%'}
            direction={{ base: 'column', md: 'row' }}
            p={10}
            gap={5}
          >
            <Stack width={{ base: '100%', md: '50%' }}>
              <Img src={DrakeLive} alt="stake" rounded={'md'} />
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }}>
              <HStack spacing={0}>
                <GoPrimitiveDot color={'#fe2247'} size={25} />
                <Heading
                  textAlign={'center'}
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={'xl'}
                  py={3}
                >
                  Live Stream Giveaway
                </Heading>
              </HStack>
              <Stack>
                <Text color={'#b1bad3'} fontSize={'sm'}>
                  Stake & Drake will collaborate to bring an entirely new gaming
                  experience to users, which will include an evening of
                  interactive connectivity where fans and users alike will have
                  a chance to win big along side Drake.
                </Text>
                <Text color={'#b1bad3'} fontSize={'sm'}>
                  To enter this chance to win, Email your phone number and
                  username to{' '}
                  <chakra.spen color={'white'} fontSize={'sm'}>
                    {' '}
                    winwiththeboy@stake.com.
                  </chakra.spen>
                </Text>
                <Text color={'#b1bad3'} fontSize={'sm'}>
                  This type of giveaway will be on a magnitude unseen before.
                  You don’t want to miss out. More information about when the
                  live stream will take place coming soon.
                </Text>
              </Stack>
            </Stack>
          </Stack>
          {/* {2 section} */}
          <Stack
            width={'100%'}
            direction={{ base: 'column', md: 'row' }}
            px={10}
            pb={10}
            gap={5}
          >
            <Stack
              width={{ base: '100%', md: '50%' }}
              justifyContent={'center'}
            >
              <Stack>
                <Heading
                  color={'white'}
                  fontWeight={'600'}
                  fontSize={'xl'}
                  py={3}
                >
                  History
                </Heading>
              </Stack>
              <Stack>
                <Text color={'#b1bad3'} fontSize={'sm'}>
                  Drake, the hip-hop sensation, has been a long-time member of
                  the Stake community. A player storming the ranks of the VIP
                  program, Drake fell in love with both the platform, and the
                  perks associated with our VIP program. It was then that this
                  partnership was formed, based on mutual appreciation between
                  mega-star and product.
                </Text>
              </Stack>
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }}>
              <Img src={SingingDrake} alt="stake" rounded={'md'} />
            </Stack>
          </Stack>
          {/* {3 section} */}
          <Stack width={'100%'} px={10}>
            <Stack>
              <Heading color={'white'} fontWeight={'600'} fontSize={'xl'}>
                Drake's picks
              </Heading>

              <Text color={'#b1bad3'} fontSize={'sm'} py={2}>
                Explore some of Drake's favourite games and sports to truly
                entrench yourself in Drizzy's playstyle.
              </Text>
            </Stack>
            {/* {cards} */}
            <Stack
              width={'100%'}
              direction={{ base: 'column', md: 'row' }}
              gap={5}
            >
              <Stack width={{ base: '100%', md: '50%' }} gap={1} pb={20}>
                <Img src={Card1} alt="stake" rounded={'md'} className="arrow" />
                <Button
                  color={'#d5dceb'}
                  bgColor={'#2f4553'}
                  fontSize={'sm'}
                  _hover={{
                    color: '#d5dceb',
                    bgColor: '#2f4553',
                  }}
                  _active={{
                    color: '#d5dceb',
                    bgColor: '#2f4553',
                  }}
                >
                  Drake's Favourite Roulette
                </Button>
              </Stack>
              <Stack width={{ base: '100%', md: '50%' }} gap={1}>
                <Img src={Card2} alt="stake" rounded={'md'} className="arrow" />
                <Button
                  color={'#d5dceb'}
                  bgColor={'#2f4553'}
                  fontSize={'sm'}
                  _hover={{
                    color: '#d5dceb',
                    bgColor: '#2f4553',
                  }}
                  _active={{
                    color: '#d5dceb',
                    bgColor: '#2f4553',
                  }}
                >
                  Drake's Favourite NBA
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default DrakeComp;
