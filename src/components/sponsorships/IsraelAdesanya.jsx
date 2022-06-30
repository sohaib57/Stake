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
import Israel from '../../assets/images/Israel.png';
import Pic1 from '../../assets/images/Israel1.jpg';
import Pic2 from '../../assets/images/Israel2.jpg';

const IsraelAdesanyaComp = () => {
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
              Israel Adesanya
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              King in the Ring
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Israel} width={330} />
          </Stack>
        </Stack>
        {/* {image-text} */}
        <Stack bg={'#000000ed'} mt={'0 !important'}>
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
                  Brand Ambassador
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We are more than pleased to announce Israel Adesanya as our
                  brand ambassador - a man and an athlete that defines the ethos
                  of what we want to achieve on Stake. A near-perfect UFC record
                  and a world championship to boot, we are extremely excited to
                  be sponsoring such an enigmatic talent on the world stage.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  The Last Stylebender
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  With the nickname coming from the Avatar series, Israel
                  believes he can relate and adapt to all the elements -
                  ultimately meeting his destiny.
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
                  The Perfect Partnership
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Israel has goals to be even greater than he already is, and
                  matches our objective not to take part, but to take over.
                  Adapting to all of the changing elements within the industry
                  is something we have come accustomed to, making this a match
                  made in heaven.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can you expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We want to welcome all Adesanya fans onto the platform,
                  including all of his 5 million social followers, to provide
                  money can’t buy VIP experiences for our most loyal player
                  base.
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
              “I don't throw and hope, I aim and fire!”
            </Text>
            <Text color={'#b1bad3'} fontSize={'small'} textAlign={'center'}>
              - Israel Adesanya
            </Text>
          </Stack>
          <Stack width={'100%'} px={200} py={5}>
            <AspectRatio maxW="600px" height={'400px'} ratio={1}>
              <iframe
                title="naruto"
                src="https://vimeo.com/713542765"
                allowFullScreen
              />
            </AspectRatio>
          </Stack>
          <Stack
            bgColor={'black'}
            direction={{ base: 'column', lg: 'row' }}
            px={{ base: '50px', lg: '200px' }}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Are you ready to bet smarter with Israel?
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

export default IsraelAdesanyaComp;
