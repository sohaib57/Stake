import React from 'react';
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  Img
} from '@chakra-ui/react';
import { GiBasketballBall, GiCardAceClubs } from 'react-icons/gi';
import welcomecasino from '../../assets/images/casino.jpg';
import welcomesports from '../../assets/images/sports.jpg';
import darkdrake from '../../assets/images/drake-banner.png';
import mastercard from '../../assets/images/mastercard-logo-mastercard-logo-png-vector-download-19.png';
import epay from '../../assets/images/Apple_Pay-White-Dark-Background-Logo.wine.png';
import gpay from '../../assets/images/Google_Pay-Logo.wine-removebg-preview.png';
import sampay from '../../assets/images/samsung-pay-logo-white.webp';
import '../ui/card slider/CardSlider.css';
import stakeDrakeHome from '../../assets/images/stakeDrakeHome.png'


const Features = () => {

  const nav = useNavigate()

  return (
    <Stack width={'100%'} margin={'0px !important'}>
      <Stack p={{ base: '4', lg: '10' }} spacing={'4'} color="#b1bad3">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent={'space-between'}
          spacing={{ base: '6', lg: '0' }}
        >
          {/* left card */}
          <Stack height={'full'} width={{ base: '100%', md: '48%' }}>
            <HStack pb={'2'}>
              <GiCardAceClubs fontSize={'1.5rem'} />
              <Text
                fontSize={'lg'}
                lineHeight={'1.5'}
                fontWeight={'bold'}
                color={'white'}
              >
                Casino
              </Text>
            </HStack>
            <Image borderRadius={'md'} className="arrow" src={welcomecasino} />
            <Text
              fontSize={'lg'}
              lineHeight={'1.5'}
              fontWeight={'bold'}
              color={'white'}
            >
              Leading Online Crypto Casino
            </Text>
            <Text height={'120px'}>
              Browse our giant range of casino games as Stake offers a fair and
              fun online gambling experience. Play Slots, Live Casino,
              Blackjack, Baccarat, Roulette, and thousands of classic casino
              games right from your browser, including your favourite Stake
              Originals.
            </Text>
            <Button onClick={() => nav('/casino/home')} colorScheme="blue">Go to Casino</Button>
          </Stack>
          {/* right card */}
          <Stack height={'full'} width={{ base: '100%', md: '48%' }}>
            <HStack pb={'2'}>
              <GiBasketballBall fontSize={'1.5rem'} />
              <Text
                fontWeight={'bold'}
                fontSize={'lg'}
                lineHeight={'1.5'}
                color={'white'}
              >
                Sports
              </Text>
            </HStack>
            <Image borderRadius={'md'} className="arrow" src={welcomesports} />
            <Text
              fontSize={'lg'}
              lineHeight={'1.5'}
              fontWeight={'bold'}
              color={'white'}
            >
              Best Crypto Sports Betting Online
            </Text>
            <Text height={'120px'}>
              Bet on your favourite teams, players and leagues from all around
              the world on our sports betting platform. Gamble on a wide range
              of sports betting options and markets for live sports across MMA,
              Basketball, Soccer and more for an unbeatable sports betting
              experience.
            </Text>
            <Button onClick={() => nav('/sports/home')} colorScheme="blue">Go to sportsBook</Button>
          </Stack>
        </Stack>

        {/* Learn more */}

        <Stack bg={'#0f212e'} height={'80px'}>
          <Stack
            px={'2'}
            direction={{ base: 'row-reverse', lg: 'row' }}
            height={'80px'}
            justifyContent={'space-between'}
          >
            <Center>
              <Button onClick={() => nav('/drake')} bg={'#3D5564'}>Learn More</Button>
            </Center>

            <Center>
              <Stack direction={'row'}>
                {/* <Text>Stake</Text>
                <Center>
                  <Divider orientation="vertical" />
                </Center>

                <Text>Drake</Text> */}
                <Img width={'200px'} src={stakeDrakeHome} />
              </Stack>
            </Center>
            <Stack
              margin={'0px !important'}
              display={{ base: 'none', lg: 'flex' }}
            >
              <Image height={'full'} width={'full'} src={darkdrake} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Buy Crypto */}
      <Stack bg={'#0f212e'} width={'100%'} px={'10'} py={'5'}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent={'space-between'}
        >
          <Center>
            <Text color={'white'} fontWeight={'600'} lineHeight={'1.5'}>
              No Crypto? No problem.
            </Text>
          </Center>

          <Center>
            <Stack
              spacing={'8'}
              direction={{ base: 'column', lg: 'row' }}
              margin={'0px !important'}
            >
              <Image height={'60px'} src={mastercard} />
              <Image height={'60px'} src={epay} />
              <Image height={'60px'} src={gpay} />
              <Image height={'60px'} src={sampay} />
            </Stack>
          </Center>

          <Center py={{ base: '6', lg: '0' }}>
            <Button _hover={{}} size={'lg'} bg={'#3D5564'} color={'white'}>
              Buy Crypto
            </Button>
          </Center>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
