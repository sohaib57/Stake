import {
  Button,
  Heading,
  Img,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import sponserblog from '../../assets/images/sponserblog.jpg';
import PopularArticles from '../../components/blog/PopularArticles';
import LayoutComp from '../../layout/LayoutComp';
const SponsershipBLOG = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      <VStack bgColor={'#1A2C38'} py={'4'}>
        <Stack w={'50%'}>
          <Heading color={'white'}>
            Stake.com to sponsor middleweight championship unification fight
            between Ryota Murata and Gennady Golovkin
          </Heading>
          {/* Publish Date and Social */}
          <Stack
            direction={'row'}
            color={'#909cb2'}
            justify={'space-between'}
            align={'center'}
          >
            <Text>Caelum - April 30, 2021</Text>
            <Stack direction={'row'}>
              <Button
                bgColor={'#0f212e'}
                _hover={{ bgColor: '#071824', color: 'white' }}
                borderLeftRadius={'full'}
                borderRightRadius={'full'}
                size={'sm'}
              >
                <FaFacebookF />
              </Button>
              <Button
                bgColor={'#0f212e'}
                _hover={{ bgColor: '#071824', color: 'white' }}
                borderLeftRadius={'full'}
                borderRightRadius={'full'}
                size={'sm'}
              >
                <FaTwitter />
              </Button>
            </Stack>
          </Stack>
          <Img src={sponserblog} borderRadius={'md'} my={'4 !important'} />
          <Heading
            color={'white'}
            fontSize={'sm'}
            fontWeight={'500'}
            lineHeight={'1.5'}
          >
            World's fastest growing crypto betting platform Stake.com announces
            sponsorship of middleweight championship unification fight between
            Ryota Murata and Gennady Golovkin
          </Heading>
          <Text color={'#909cb2'}>
            Stake.com, the world’s fastest-growing cryptocurrency betting and
            gaming operator, is excited to announce their backing of the
            upcoming middleweight fight between Gennady Golovkin vs. Ryōta
            Murata on April 9th.
            <br />
            <br />
            Fans in attendance at the arena can also look forward to receiving
            giveaways from Stake.com as the platform look to commemorate the
            occasion.
            <br />
            <br />
            The Stake.com logo will appear on the entrance shirt and trunks of
            Murata, and in prominent positions around the canvas for one of the
            most anticipated fights of the year. <br />
            <br />
            The partnership with the biggest fight in Japan in recent times
            complements Stake.com’s extensive sports sponsorship portfolio
            including deals with UFC, Sergio Aguero and Premier League football
            club Watford FC, along with multi-platinum artist Drake.
            <br />
            <br />
            Dominic Rae, Sponsorships Manager for Stake.com, said: “We’re
            delighted to be backing Big Drama in Japan and a boxing superstar in
            the shape of Murata
            <br />
            <br />
            "Everyone at Stake.com is eagerly anticipating the fight and both
            fans in attendance on the night and those watching worldwide are
            guaranteed a memorable night thanks to our in-arena giveaways and
            on-site promotions.”
            <br />
            <br />
            Ryōta Murata said: “Stake.com’s ambition in crypto gaming matches
            mine in the ring.
            <br />
            <br />
            "It’s an honour to join Stake.com’s roster of worldwide talent as
            their representative in Japan and I cannot wait to put on a show
            that lives up to the excitement around their debut in my homeland.
            <br />
            <br />
            “Fight fans coming to Big Drama in Japan should expect fireworks in
            the ring thanks to me and outside thanks to Stake.com.”
            <br />
            <br />
          </Text>
          {/* tags */}
          <Stack direction={'row'} pt={'2'}>
            <Tag
              p={'2'}
              color={'white'}
              _hover={{ cursor: 'pointer', bgColor: '#071824' }}
              size={'sm'}
              borderRadius={'full'}
              bgColor={'#0f212e'}
              onClick={() => nav('/blog/category/sports')}
            >
             Sports
            </Tag>
            <Tag
              p={'2'}
              color={'white'}
              _hover={{ cursor: 'pointer', bgColor: '#071824' }}
              size={'sm'}
              borderRadius={'full'}
              bgColor={'#0f212e'}
              onClick={() => nav('/blog/category/stake-news')}
            >
              Stake News
            </Tag>
          </Stack>
        </Stack>
      </VStack>
      <PopularArticles />
    </LayoutComp>
  );
};

export default SponsershipBLOG;
