import React from 'react';
import {
  Stack,
  Img,
  Button,
  Text,
  Image,
  Heading,
  Spacer,
  AspectRatio,
} from '@chakra-ui/react';
import LayoutComp from '../../layout/LayoutComp';
import Alexa from '../../assets/images/alexa.png';
import Pic1 from '../../assets/images/alexa1.jpg';
import Pic2 from '../../assets/images/alexa2.jpg';

const AlexaGrassoComp = () => {
  return (
    <LayoutComp>
      <Stack width={'100%'}>
        <Stack
          bgColor={'#000000e3'}
          justifyContent={'space-between'}
          direction={{ base: ' column', md: 'row' }}
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          py={'2'}
        >
          <Stack justifyContent={{ base: 'start', md: 'center' }}>
            <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
              Alexa Grasso
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Karen Alexa Grasso Montes
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Alexa} width={330} />
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
                  Rise
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Fighting out of Guadalajara, Mexico, Alexa Grasso transitioned
                  her undefeated MMA career into the UFC through The Ultimate
                  Fighter in 2016. A skilled mixed martial artist who has pulled
                  herself off her bootstraps, dusted herself off the setbacks
                  along this journey but never gave up on her dream of holding
                  the UFC belt. Grasso’s fight future is filled with
                  opportunities in abundance at the back of her recent and
                  impressive Flyweight 2 fight win-streak.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Brand Ambassador
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  After defeating fellow rising contender Maycee Barber, UFC
                  fans are now convinced that Grasso is the new top contender in
                  the UFC's Flyweight division. It is evident that Grasso has
                  now discovered her ideal weight class at Flyweight and her
                  performances speak for it. Fight fans are excited to see her
                  back in the UFC Octagon.
                </Text>
                <Text color={'#b1bad3'} fontSize={'small'}>
                  We're exuberant to announce Alexa Grasso as our new brand
                  ambassador – a fascinating fighter with elite-level mental
                  toughness and a gallant heart made for fighting. Grasso is a
                  determined athlete set to enforce her spirit every time she
                  steps into the Octagon.
                </Text>
                <Text color={'#b1bad3'} fontSize={'small'}>
                  At Stake, we're electrified about sponsoring a talented
                  athlete like Grasso. Grasso has shown complete heart in all 8
                  of her UFC performances and she now envisions holding the UFC
                  championship one day, and we believe in her.
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
                  An Ideal Partnership
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Grasso is on her journey to greatness; she has taken out a lot
                  of top contenders along her way and she has always performed
                  regardless of the odds or challenges. Grasso has always proven
                  fight fans wrong by getting her hand raised whenever she has
                  been counted out.
                </Text>
                <Text color={'#b1bad3'} fontSize={'small'}>
                  Grasso has been part of a gripping fight of the night
                  performance against Carla Esparza and has always given the
                  fans an entertaining show. We at Stake align with Grasso's
                  idea of giving our consumers the best experience possible.
                  With endless new game releases and elite sports betting odds,
                  just like Grasso, we have kept our players entertained.
                  Grasso's spirit makes her an ideal brand ambassador for Stake.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can fans expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We would love to welcome fight fans onto our platform,
                  including millions of Grasso’s followers across social
                  platforms. Fight fans are always welcome on Stake for the best
                  UFC odds, attractive promotions, and unmatchable VIP
                  experience.
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
              “I want to evolve, every fight I want to show that I’m better”
            </Text>
            <Text color={'#b1bad3'} fontSize={'small'} textAlign={'center'}>
              - Alexa Grasso
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
              Are you ready to bet smarter with Alexa?
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
              Bet on MMA now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default AlexaGrassoComp;
