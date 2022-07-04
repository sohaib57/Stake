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
import UFC from '../../assets/images/ufc.png';
import Pic1 from '../../assets/images/ufc1.jpg';
import Pic2 from '../../assets/images/ufc2.jpg';

const UFCComp = () => {
  return (
    <LayoutComp>
      <Stack width={'100%'}>
        {/* header */}
        <Stack
          bgColor={'#000000e3'}
          justifyContent={'space-between'}
          direction={{ base: ' column', md: 'row' }}
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          py={'2'}
        >
          <Stack justifyContent={{ base: 'start', md: 'center' }}>
            <Text fontSize={'lg'} fontWeight={'600'} color={'white'}>
              UFC
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Official Betting Partner
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={UFC} width={330} />
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
                  Major Partner
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Stake.com has become UFC’s first-ever “Official Betting
                  Partner” in Latin America and Asia, which has added to our
                  collection of sponsorships from the world's biggest sporting
                  organisations and stars.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  UFC Product
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  As part of this partnership, we will collaborate with the UFC
                  to improve your betting experience, providing exclusive
                  promotions, VIP experiences and producing exclusive social and
                  digital content featuring UFC athletes.
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
                  An ideal combination
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  "We’re thrilled to partner with an exciting and emerging
                  platform like Stake.com to offer exclusive digital and social
                  content to our fans, as well as an innovative gaming
                  experiences,” UFC Vice President of Global Partnerships Nick
                  Smith said. “UFC prides itself on being innovators, and
                  Stake.com is a unique way for fans to experience the action
                  and excitement of UFC."
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Making a Statement
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  We are committed to providing the best of gambling experiences
                  to our players. We feel as if partnerships such as this one,
                  will enhance our status in the industry, where we will no
                  longer just be competing, but completely taking over.
                </Text>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            mt={'0 !important'}
            bgColor={'black'}
            direction={{ base: 'column', lg: 'row' }}
            px={{ base: '50px', lg: '200px' }}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Want to learn more about our official partnership?
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
              Read here
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default UFCComp;
