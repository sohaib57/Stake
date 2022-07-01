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
import mlbblog from '../../assets/images/mlbblog.png';
import PopularArticles from '../../components/blog/PopularArticles';
import SportsDetailCard from '../../components/sports/home/SportsDetailCard';
import LayoutComp from '../../layout/LayoutComp';
const MlbBlog = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      <VStack bgColor={'#000000ed'} p={'4'}>
        <Stack w={{ base: '100%', md: '50%' }}>
          <Heading
            color={'white'}
            fontSize={{ base: 'md', md: 'lg', lg: '3xl' }}
            pb={'2'}
          >
            MLB 2022 Weekly Preview - Week 14
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
          <Img src={mlbblog} borderRadius={'md'} my={'4 !important'} />
          <Text py={'3'} color={'#909cb2'}>
            Major League Baseball is starting to heat up week in and week out.
            There is clear excitement from fans across the globe with most teams
            competing at an absurdly high level. There have been comebacks upon
            comebacks and the average game has been lasting longer due to the
            intensity of matchups. In today’s game you’d be hard pressed to find
            one team having a huge advantage over another on any given night and
            that is where elite pitching staff and clutch hitting comes into
            play. As it stands currently, the teams who are able to put bat on
            ball in innings eight or later have been doing massive work. Clubs
            and their managers will be working to figure out the right formulas
            for their team as the season progresses while trying to maintain
            enough balance to rest players on the roster. We’re just about
            reaching the half-way point in the season and potential all-stars
            will be making their final pushes to convince fans to vote them in.
            These next two weeks are going to be crucial heading into the break.
            Stake.com has your back on all things MLB so take advantage of our
            odds and promos now!
            <br />
            <br />
            Analysis Game 1 - Tampa Bay Rays @ Boston Red Sox - Tuesday, July
            5th, 2022 The Tampa Bay Rays have been playing decent ball as of
            late, but their expectations have this team at a much higher level.
            They are the owners of one of the best pitching staffs in the whole
            American League but their consistency within the offensive side has
            been poor. Just a couple hitters above .300 in the club, Tampa Bay
            needs to find a spark plug on offense fast. Their pitching is
            holding down the fort for the moment but there isn’t much to say
            that it could break down at any time. Look for the Rays to approach
            this series from an optimistic lens and get back on track with some
            solid runs.
            <br />
            <br />
            Boston is playing around the same level of baseball as the Rays
            currently, but their pitching looks to be on the uptrend. After
            starting the season with a horrible team ERA, their level has
            plateaued into a maintainable average. The ability of their hitters
            is never in question, but they are currently playing above their pay
            grade. These next few weeks before the break will be a huge
            indicator as to what Boston will be doing in the near future. <br />
            <br />
            Prediction - Rays money line in a battle between the division’s
            rivals
            <br />
            <br />
            Game 2 - Philadelphia Phillies @ St.Louis Cardinals - Friday, July
            8th, 2022 Philadelphia are dealing with tough news as their MVP
            starman Bryce Harper was diagnosed with a fractured thumb this past
            week. They will be severely limited for a couple of months giving
            him time to recover. In that time span they will need to find ways
            to beat ball clubs and maintain their position in the MLB playoff
            race in the NL.
            <br />
            <br />
            St. Louis is beyond happy with the production it's currently getting
            from its offense. However, their pitching has left things up for
            desire in multiple games this season. They will face a hobbled
            Phillies team and get through with the tough win.
            <br />
            <br />
            Prediction - Cardinals Money Line.
            
          </Text>
          {/* sports card */}
          <SportsDetailCard/>
          {/* tags */}
          <Stack pt={'2'}>
            <Tag
            w={'fit-content'}
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

export default MlbBlog;
