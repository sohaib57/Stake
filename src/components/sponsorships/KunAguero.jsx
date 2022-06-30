import React from 'react';
import {
  VStack,
  Stack,
  Img,
  Button,
  Text,
  Image,
  Center,
  Divider,
  Heading,
  chakra,
  Spacer,
  AspectRatio,
} from '@chakra-ui/react';
import LayoutComp from '../../layout/LayoutComp';
import Kun from '../../assets/images/kun.png';
import Pic1 from '../../assets/images/kun1.jpg';
import Pic2 from '../../assets/images/kun2.jpg';

const KunAgueroComp = () => {
  return (
    <LayoutComp>
      <Stack width={'100%'}>
        <Stack
          bgColor={'#000000f2'}
          justifyContent={'space-between'}
          direction={{ base: ' column', md: 'row' }}
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          py={'2'}
        >
          <Stack justifyContent={{ base: 'start', md: 'center' }}>
            <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
              Kun Agüero
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Sergio Leonel Agüero del Castillo
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Kun} width={330} />
          </Stack>
        </Stack>
        {/* {image-text} */}
        <Stack bgColor={'#000000ed'} mt={'0 !important'}>
          {/* {1 section} */}
          <Stack
            width={'100%'}
            direction={{ base: 'column', md: 'row' }}
            py={8}
            px={10}
            gap={6}
          >
            <Stack width={{ base: '100%', md: '50%' }} gap={2}>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Stake Family grows by one
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Balotelli… Aguero!! The final name of a commentary moment
                  entrenched in English Premier League history has joined the
                  Stake family to kick off a huge 2022. A man who has well and
                  truly accomplished it all brings his love of sport, esports,
                  and live streaming to the premier crypto casino & sportsbook.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Man, Myth, Legend
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Retiring from the game in just December, Sergio Aguero poses a
                  career highlights package that will never be mistaken for
                  being one of the best to ever do it. With a great career in
                  retirement well and truly on the way, he joins Stake as Brand
                  Ambassador to share his love of the beautiful game.
                </Text>
              </Stack>
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }}>
              <Img src={Pic1} alt="stake" />
            </Stack>
          </Stack>
          {/* {2 section} */}
          <Stack
            width={'100%'}
            direction={{ base: 'column', md: 'row' }}
            pb={8}
            px={10}
            gap={6}
          >
            <Stack width={{ base: '100%', md: '50%' }}>
              <Img src={Pic2} alt="stake" />
            </Stack>
            <Stack width={{ base: '100%', md: '50%' }} gap={2}>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  A Stellar Career
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Boasting five English Premier League titles, an Olympic Gold
                  Medal, one Copa America, one Europa League, over 300
                  top-flight goals, and quite frankly one of the biggest goals
                  in football history, there’s no doubt that Sergio Agüero
                  matches our elite style of play and quest for greatness.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can the Stake Community expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Watch this space! Sergio Aguero is an exciting prospect for
                  Stake players - a man with a keen eye on ensuring his presence
                  is known amongst the community. We welcome his fans from
                  across the globe over to Stake to enjoy an exclusive
                  experience with one of football’s greatest ever players.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack width={'100%'} px={10} pb={5} spacing={0}>
            <Text
              color={'white'}
              fontSize={'md'}
              textAlign={'center'}
              fontWeight={'600'}
            >
              I'm delighted to be working with Stake.com and joining their
              exciting team. I've watched on with interest as they have become
              more involved in football and Stake's ambitions very closely match
              my own as I move into a new phase of my post-playing career
            </Text>
            <Text color={'#b1bad3'} fontSize={'small'} textAlign={'center'}>
              Kun Agüero
            </Text>
          </Stack>

          <Stack
            bgColor={'black'}
            direction={{ base: 'column', lg: 'row' }}
            px={{ base: '50px', lg: '200px' }}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Bet Now
            </Text>
            <Spacer />
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
              Bet smarter on Stake
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default KunAgueroComp;
