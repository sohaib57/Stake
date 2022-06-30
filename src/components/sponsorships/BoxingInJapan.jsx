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
import Boxing from '../../assets/images/boxing.jpg';
import Pic1 from '../../assets/images/boxing1.jpg';
import Pic2 from '../../assets/images/boxing2.jpg';

const BoxingInJapanComp = () => {
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
              Boxing in Japan
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Naoya Inoue v Nonito Donaire
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Boxing} width={330} />
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
                  Historic Boxing Match
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  In April 2022, Stake.com sponsored the historic boxing match
                  between Gennadiy Golovkin and Ryota Murata and we are
                  delighted to be involved in the sport in Japan once again,
                  this time as Naoya Inoue looks to unify the WBA, IBF and WBC
                  bantamweight titles in his rematch with Nonito Donaire. The
                  fight takes place once again at the Saitama Super Arena which
                  will welcome 37,000 fans to cheer on their hero.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Best Fight of the Year
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  The first fight between these two elite boxers took place in
                  November 2019, with Inoue winning by unanimous decision in
                  what was widely regarded as the best fight of the year. The
                  Japanese champion has taken his place as one of the all-time
                  great lightweight champions, and a victory against Donaire
                  will see him become the unified world champion in what will be
                  the crowning glory of his career.
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
                  Heart of the Action
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Stake.com will literally be centre stage, with prominent
                  branding and incredible promotions for our players, as always,
                  taking you straight to the heart of the action!
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can the fans expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Another venture into the sport of boxing is sure to excite
                  Stake players, and we welcome new members from across the
                  world looking for a seamless sports betting experience. With
                  best odds and world class promotions, there really is only one
                  place to bet on boxing.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            bgColor={'black'}
            direction={{ base: 'column', lg: 'row' }}
            px={{ base: '50px', lg: '200px' }}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Bet Smarter on Boxing with Stake.com
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
              Bet Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default BoxingInJapanComp;
