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
import Watford from '../../assets/images/watford.png';
import Pic1 from '../../assets/images/1.jpg';
import Pic2 from '../../assets/images/2.png';

const WatfordComp = () => {
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
              Watford FC
            </Text>
            <Text fontSize={'sm'} color={'#b1bad3'}>
              Main Club Sponsor
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Watford} width={330} />
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
                  Official Sponsor
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Stake.com is delighted to enter it’s second year as the
                  Official Sponsor of Watford FC, with our logo appearing on the
                  front of the club’s shirt for the duration of the 2022/23
                  season, in which The Hornets will be looking to bounce back to
                  the Premier League.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  A New Era
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  The Championship is the third most attended league in Europe
                  and with that comes a thrilling competition in which fans can
                  expect plenty of goals, talking points and moments of
                  individual brilliance. Watford will be embarking on a new era
                  with the appointment as Rob Edwards as head coach and we can’t
                  wait to be with The Hornets on their journey back to the
                  top-flight of English football.
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
                  The Next Chapter
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Scott Duxbury, Watford FC Chairman & CEO, said: “We are
                  delighted to continue working with Stake as our principal
                  shirt sponsor for the 2022/23 season. It is great to have
                  their continued support, they have become a valued partner and
                  we look forward to the next chapter together.”
                </Text>
                <Text color={'#b1bad3'} fontSize={'small'}>
                  At Stake, we are always challenging ourselves to continue to
                  be the best in the industry. We align with Watford’s inspiring
                  and motivated approach towards attaining success. As the
                  Hornets family continues to grow, we are committed to
                  supporting the club through thick and thin.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What can the fans expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Watford remain one of the most lucrative sponsorships we’ve
                  seen at Stake.com and we’ll be taking fans behind the scenes
                  at the club with some fantastic new content.
                </Text>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  As the team aspires to reach for some silverware, we’ll be
                  riding the ups & downs with them, offering our players
                  exclusive VIP access to what is certain to be a hard fought
                  and fascinating campaign.
                </Text>
              </Stack>
            </Stack>
          </Stack>
          {/* <Stack width={'100%'} px={330} py={5}>
           
            <AspectRatio maxW="400px" ratio={1}>
              <iframe
                title="naruto"
                src="https://vimeo.com/713542765"
                allowFullScreen
              />
            </AspectRatio>
          
          </Stack> */}
          <Stack
            bgColor={'#0f212e'}
            direction={{base: 'column',lg:'row'}}
            px={{base:'50px',lg:'200px'}}
            py={30}
            alignItems={'center'}
          >
            <Text fontSize={'sm'} fontWeight={'600'} color={'#b1bad3'}>
              Bet smarter with Watford F.C.
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
              Bet now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default WatfordComp;
