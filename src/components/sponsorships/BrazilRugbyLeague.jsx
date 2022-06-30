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
import Brazil from '../../assets/images/brazil.png';
import Pic1 from '../../assets/images/brazil1.jpg';
import Pic2 from '../../assets/images/brazil2.jpg';

const BrazilRugbyLeagueComp = () => {
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
              Brazil Rugby League
            </Text>
            <Text
              fontSize={'sm'}
              color={'#b1bad3'}
              width={{ base: '100%', md: '70%' }}
            >
              Stake.com is excited to announce a partnership with Rugby League
              Brazil ahead of the womens’ team’s historic World Cup campaign.
            </Text>
          </Stack>

          <Spacer />
          <Stack>
            <Image src={Brazil} width={400} />
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
                  A Place in History
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Stake.com is excited to announce a partnership with Rugby
                  League Brazil ahead of the women's team’s historic World Cup
                  campaign. As part of the partnership, Stake’s logo will appear
                  on the shirts of the men’s and women’s teams, and we will be
                  right behind them as they seek a place in history.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Rich Sporting Heritage
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Brazil is a nation with a rich sporting heritage, and we are
                  thrilled to play our part in the growth of the Rugby League in
                  the country. Stake wishes to establish a strong presence there
                  and we think our association and support with a Brazilian team
                  at a World Cup is something to be very proud of. When the
                  Amazonas line up at the renowned Headingley Stadium, Stake
                  will be front and centre at a World Cup curtain-raiser.
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  Best Possible Moment
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Hugo Froes, COO of Brazil Rugby League, said: "Participating
                  in the World Cup with the Amazonas, our women's national team,
                  and in the South American Championship with the Carcarás, our
                  men's national team, is the greatest achievement we have ever
                  accomplished. The partnership with Stake comes at the best
                  possible moment, where we look to the future and aim for this
                  to be merely the beginning of a longer, more significant
                  journey."
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
                  The World is Watching
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  Paul Grundy, Head Coach of the Women’s team, shared the view
                  from the camp: “Every training session is like a catalyst for
                  their abilities, and a pleasure for me to coach. As daunting
                  as a World Cup may be, I think our athletes will comport
                  themselves as true winners and sportswomen. The world is
                  watching us."
                </Text>
              </Stack>
              <Stack>
                <Heading color={'white'} fontWeight={'600'} fontSize={'sm'}>
                  What Can Fans Expect?
                </Heading>

                <Text color={'#b1bad3'} fontSize={'small'}>
                  As Brazil look forward to the World Cup, our players can look
                  forward to the most exciting rugby promotions, first class
                  content and exclusive access to the team before, during and
                  after their campaign. The Stake community welcomes new players
                  looking to share in the experience of this thrilling journey.
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
              Bet Smarter on Rugby League on Stake!
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

export default BrazilRugbyLeagueComp;
