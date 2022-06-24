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
import Aldo from '../../assets/images/aldo.png';
import Pic1 from '../../assets/images/aldo1.jpg';
import Pic2 from '../../assets/images/aldo2.jpg';

const JoseAldoComp = () => {
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
          <Stack justifyContent={{ base: 'start', md: 'center' }} >
            <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
              José Aldo
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              José Aldo joins Team Stake, adding another UFC Champion to our
              plethora of MMA stars.
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Aldo} width={330} />
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
                  Huge Splash
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We made a huge splash by becoming the first Official Betting
                  Partner of UFC in Brazil, so it was only right to bring on
                  board a Brazilian ambassador, and who better than the
                  legendary José Aldo? The former Featherweight Champion has
                  enjoyed a career spanning more than fifteen years, and his
                  star still shines brightly as he continues to draw the crowds
                  for his matches.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Millions of Followers
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Hailing from Manaus, Aldo has fought in some of the greatest
                  UFC events of all time and has acquired millions of followers
                  from around the world. In 2021 he won both of his fights, so
                  who would rule out another title shot this year. We can’t wait
                  to be part of the journey and see the fireworks unleashed by
                  our man.
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
                  Biggest and Best
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  At Stake we want to work with the biggest and best names in
                  the world of sport, so it was a simple decision when the
                  opportunity was presented to work with José Aldo, a legend of
                  the sport and loved by UFC fans. He has built a legacy that we
                  can all aspire to.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can you expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We want to welcome Aldo’s millions of fans to our
                  community-based betting platform and social media channels. We
                  will be providing exclusive content, first class promotions,
                  bonuses, and VIP experiences for our ever-growing player base.
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
              Bet Smarter on UFC with Stake
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

export default JoseAldoComp;
