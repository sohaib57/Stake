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
import ufcblog from '../../assets/images/ufcblog.png';
import PopularArticles from '../../components/blog/PopularArticles';
import LayoutComp from '../../layout/LayoutComp';
const UfcPartnershipBlog = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      <VStack bgColor={'#000000ed'} py={'4'}>
        <Stack w={'50%'}>
          <Heading color={'white'}>
            UFC®, the World’s Premier Mixed Martial Arts Organization, Today
            Announced a New Partnership with Stake.com, the World’s Largest
            Cryptocurrency Casino and Sportsbook
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
          <Img src={ufcblog} borderRadius={'md'} my={'4 !important'} />
          <Text color={'#909cb2'}>
            Las Vegas – UFC ®, the world’s premier mixed martial arts
            organization, today announced a new partnership with Stake.com, the
            world’s largest cryptocurrency casino and sportsbook
            <br />
            <br />
            Under the terms of the agreement, Stake.com will become UFC’s
            first-ever “Official Betting Partner” in Latin America (excluding
            Brazil) and Asia, creating a new sponsorship category for the
            organization.
            <br />
            <br />
            As part of this partnership, UFC and Stake.com will collaborate to
            improve UFC’s betting experience at Stake, providing exclusive
            promotions, VIP experiences and producing exclusive social and
            digital content featuring UFC athletes, including UFC champion
            Israel Adesanya, who recently became Stake.com’s first-ever brand
            ambassador. <br />
            <br />
            “We’re thrilled to partner with an exciting and emerging platform
            like Stake.com to offer exclusive digital and social content to our
            fans, as well as an innovative gaming experience,” UFC Vice
            President of Global Partnerships Nick Smith said. “UFC prides itself
            on being innovators, and Stake.com is a unique way for fans to
            experience the action and excitement of UFC.”
            <br />
            <br />
            “ All of us at Stake are massive UFC enthusiasts. We’re excited to
            partner with such a dominant brand to deliver a one-of-a-kind
            betting experience and accelerate our global expansion. We could not
            be more thrilled with all the unique possibilities this partnership
            unlocks for both Stake players and UFC fans.” – Said Milan
            Jovancevic, Stake’s Public Relationships Manager.
            <br />
            <br />
            UFC and Stake.com will officially launch the partnership on
            Wednesday, March 3, with exclusive digital and social content
            surrounding Fight Week leading to the highly anticipated UFC ® 259:
            BLACHOWICZ vs. ADESANYA which takes place on Saturday, March 6, live
            from UFC APEX in Las Vegas.
            <br />
            <br />
            Established in 2017, Stake.com is one of the fastest growing betting
            brands in global history, offering an unrivaled online crypto gaming
            experience for its users. For more information, please visit
            stake.com .
            <br />
            <br />
            <Heading pb={'1'} fontSize={'md'} color={'white'}>
              About UFC®
            </Heading>
            UFC® is the world’s premier mixed martial arts organization ( MMA ),
            with more than 625 million fans and 142 million social media
            followers. The organization produces more than 40 live events
            annually in some of the most prestigious arenas around the world,
            while broadcasting to approximately 900M TV households across more
            than 175 territories. UFC’s athlete roster features the world’s best
            MMA athletes representing more than 70 countries. The organization’s
            digital offerings include UFC FIGHT PASS®, one of the world’s
            leading streaming services for combat sports. UFC was acquired in
            2016 by global entertainment, sports and content company Endeavor,
            along with strategic investors Silver Lake Partners and KKR. UFC is
            headquartered in Las Vegas, Nevada. For more information, visit
            UFC.com and follow UFC at Facebook.com/UFC, Twitter, Snapchat,
            Instagram and TikTok: @UFC.
            <br />
            <br />
            <Heading pb={'1'} fontSize={'md'} color={'white'}>
              About Stake
            </Heading>
            <br />
            <br />
            Stake.com is the world’s biggest crypto casino and sportsbook ,
            which has made its name for itself with an unprecedented 35 billion
            bets processed in just 3 years. Stake is making waves in the betting
            sphere, through its unique platform, games and approach towards
            hospitality. Elite odds, exciting promotions, instant withdrawals
            and a leading social experience has been the catalyst for their
            quick rise, now one of the leading betting companies globally.
          </Text>
          <br />
          <br />
          <Heading pb={'1'} fontSize={'md'} color={'white'}>
            About Stake
          </Heading>
          <Text color={'#909cb2'}>
          UFC – Lilian Caparroz – lcaparroz@ufc.com
          <br />
          Stake – Brais Pena – brais@stake.com
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
              onClick={() => nav('/blog/category/other')}
            >
              Others
            </Tag>
            <Tag
              p={'2'}
              color={'white'}
              _hover={{ cursor: 'pointer', bgColor: '#071824' }}
              size={'sm'}
              borderRadius={'full'}
              bgColor={'#0f212e'}
              onClick={() => nav('/promotions/category/sports')}
            >
              Sports
            </Tag>
          </Stack>
        </Stack>
      </VStack>
      <PopularArticles />
    </LayoutComp>
  );
};

export default UfcPartnershipBlog;
