import React from 'react';
import {
  Stack,
  Img,
  Button,
  Text,
  Image,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import LayoutComp from '../../layout/LayoutComp';
import Fittipaldi from '../../assets/images/fittipaldi.png';
import Pic1 from '../../assets/images/fittipaldi1.jpg';
import Pic2 from '../../assets/images/fittipaldi2.jpg';

const FittipaldiBrothersComp = () => {
  return (
    <LayoutComp>
      <Stack width={'100%'}>
        <Stack
          bgColor={'#071d2a'}
          justifyContent={'space-between'}
          direction={{ base: ' column', md: 'row' }}
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          py={'2'}
        >
          <Stack justifyContent={{ base: 'start', md: 'center' }}>
            <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
              Fittipaldi Brothers
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Pietro & Enzo Fittipaldi
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Fittipaldi} width={330} />
          </Stack>
        </Stack>
        {/* {image-text} */}
        <Stack bgColor={'#1a2c38'} mt={'0 !important'}>
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
                  Known throughout the world
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Fittipaldi is a name known throughout the world to motorsport
                  fans, and now known to Stake players too. Emerson Fittipaldi
                  is a two-time Formula One World Champion, and now his
                  grandsons Pietro and Enzo, look to further enhance the legacy!
                  Stake.com welcomes both Pietro and Enzo to the Stake family
                  and look forward to sharing their insights with our players.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Competing in F1 & Indy500
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Pietro made his F1 debut in 2020 deputising for the injured
                  Romain Grosjean. Last season the Brazilian combined his role
                  as Haas F1 Team reserve with a successful spell in the 2021
                  IndyCar Series, competing in both Texas and the world-famous
                  Indy500.
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
                  What can the fans expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Both Pietro & F2 driver Enzo will be co-creating content and
                  hosting regular Twitch streams, offering their unique insight
                  into F1 as all the action unfolds both on and off the track,
                  this will be supported by fantastic Formula One promotions
                  throughout what is sure to be an incredible season. Stake
                  welcomes motorsport fans, not just from Brazil, but across the
                  world to enjoy our betting community.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            bgColor={'#0f212e'}
            direction={{ base: 'column', lg: 'row' }}
            px={{ base: '50px', lg: '200px' }}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Bet Smarter with the Fittipaldi Brothers
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
              Bet Now!
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default FittipaldiBrothersComp;
