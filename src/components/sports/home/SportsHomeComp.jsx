import {
  Box,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBookmarkDashFill, BsPlayCircleFill } from 'react-icons/bs';
import {
  FaStar,
  FaBaseballBall,
  FaHourglassStart,
  FaGripHorizontal,
} from 'react-icons/fa';
import sportshomeslider1 from '../../../assets/images/sportshomeslider1.jfif';
import sportshomeslider2 from '../../../assets/images/sportshomeslider2.jfif';
import sportshomeslider3 from '../../../assets/images/sportshomeslider3.jfif';
import sportshomeslider4 from '../../../assets/images/sportshomeslider4.jfif';
import sportshomeslider5 from '../../../assets/images/sportshomeslider5.jfif';
import sportshomeslider6 from '../../../assets/images/sportshomeslider6.jfif';
import { useNavigate } from 'react-router-dom';
import LiveEvents from './LiveEvents';
import SportsStats from './SportsStats';
import MyBets from './MyBets';
import Favourites from './Favourites';
import StartingSoon from './StartingSoon';
import SportsDetailCard from './SportsDetailCard';
import { HiFire } from 'react-icons/hi';
const SportsHomeComp = () => {
  const nav = useNavigate();
  const settings = {
    // dots: true,
    infinite: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Stack
      py={'12'}
      px={{ base: '4', md: '0' }}
      w={'100%'}
      bgColor={'#000000ed'}
    >
      {/* slider */}
      <Stack px={{ base: '8', lg: '12', xl: '16' }} className="slider">
        <Slider {...settings}>
          <Center px={'2'} h={'30vh'} w={'100%'}>
            <Box
              className="home-slider"
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              bgImage={sportshomeslider1}
            ></Box>
          </Center>
          <Center h={'30vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              className="home-slider"
              bgImage={sportshomeslider2}
              borderRadius={'lg'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'30vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              className="home-slider"
              bgImage={sportshomeslider3}
              borderRadius={'lg'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'30vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              className="home-slider"
              bgImage={sportshomeslider4}
              borderRadius={'lg'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'30vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              className="home-slider"
              bgImage={sportshomeslider5}
              borderRadius={'lg'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'30vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              className="home-slider"
              bgImage={sportshomeslider6}
              borderRadius={'lg'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
        </Slider>
      </Stack>
      {/* searchbar */}
      <Stack
        className="searchbar"
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        display={{ base: 'none', md: 'flex' }}
        pt={'6'}
      >
        <InputGroup
          borderColor={'gray'}
          _hover={{ borderColor: 'rgb(47,69,83)' }}
        >
          <InputLeftElement
            pl={'2'}
            pointerEvents="none"
            borderRadius={'full'}
            bgColor={'transparent'}
          >
            <AiOutlineSearch color="#b1bad3" fontSize={'1.2rem'} />
          </InputLeftElement>
          <Input
            color={'white'}
            focusBorderColor="none"
            bgColor={'#000000f2'}
            borderRadius={'full'}
            placeholder="Search your game"
            size="md"
            fontWeight={'500'}
            fontSize={'sm'}
          />
        </InputGroup>
      </Stack>
      {/* tabs */}
      <Stack pt={'8'} className="tabs">
        <Tabs variant="soft-rounded" colorScheme="green">
          {/* tab list */}
          <TabList
            marginInline={{ base: '2', md: '8', lg: '12', xl: '16' }}
            marginBottom={'3'}
            overflowX={'auto'}
            maxW={'fit-content'}
            borderRadius={'full'}
            bgColor={'#000000f2'}
          >
            <Stack direction={'row'} p={'2'}>
              <Tab
                className="lobby"
                onClick={() => nav('/sports/home')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <FaBaseballBall color="#b1bad3" />
                  <Text>Lobby</Text>
                </HStack>
              </Tab>
              <Tab
                className="my-bets"
                onClick={() => nav('/sports/home/my-bets')}
                w={'max-content'}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <BsFillBookmarkDashFill color="#b1bad3" />
                  <Text>My Bets</Text>
                </HStack>
              </Tab>
              <Tab
                className="favourites"
                onClick={() => nav('/sports/home/favourites')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <FaStar color="#b1bad3" />
                  <Text> Favourites</Text>
                </HStack>
              </Tab>
              <Tab
                className="live-events"
                onClick={() => nav('/sports/home/live-events')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <BsPlayCircleFill color="#b1bad3" />
                  <Text> Live Events</Text>
                </HStack>
              </Tab>
              <Tab
                className="starting-soon"
                onClick={() => nav('/sports/home/starting-soon')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <FaHourglassStart color="#b1bad3" />
                  <Text> Starting Soon</Text>
                </HStack>
              </Tab>
            </Stack>
          </TabList>
          {/* tab panels */}
          <TabPanels>
            <TabPanel paddingX={'0 !important'} className="lobby">
              <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                <LiveEvents />
                {/* popular events */}
                <Stack
                  py={'4'}
                  justifyContent={'space-between'}
                  direction={'row'}
                >
                  <HStack
                    w={'fit-content'}
                    _hover={{ cursor: 'pointer' }}
                    // onClick={() => nav('/stakeoriginals')}
                    color={'gray.400'}
                    pb={'3'}
                    spacing={'2'}
                    alignItems={'center'}
                  >
                    <HiFire fontSize={'1.4rem'} />
                    <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                      {' '}
                      Popular Events
                    </Heading>
                  </HStack>
                  <Stack
                    maxWidth={'fit-content'}
                    direction={'row'}
                    spacing={'6'}
                    color="white"
                    alignItems={'center'}
                  >
                    <FaGripHorizontal color="#B1BAD3" fontSize={'1rem'} />
                    <Select
            fontSize={'sm'}
            fontWeight={'500'}
            color={'white'}
            borderColor={'#4C667B'}
            _hover={{cursor:'pointer' }}
          >
            <option style={{ backgroundColor: 'black' }}>Winner</option>
            <option style={{ backgroundColor: 'black' }}>Total</option>
            <option style={{ backgroundColor: 'black' }}>Handicap</option>
          </Select>
                  </Stack>
                </Stack>
                <SportsDetailCard />
              </Stack>
            </TabPanel>
            <TabPanel paddingX={'0 !important'} className="my-bets">
              <MyBets />
            </TabPanel>
            <TabPanel paddingX={'0 !important'} className="favourites">
              <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                <Favourites />
              </Stack>
            </TabPanel>
            <TabPanel paddingX={'0 !important'} className="live-events">
              <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                <LiveEvents />
              </Stack>
            </TabPanel>
            <TabPanel className="starting-soon" paddingX={'0 !important'}>
              <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                <StartingSoon />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      {/* stats table */}
      <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }} pt={'4'}>
        <SportsStats />
      </Stack>
    </Stack>
  );
};

export default SportsHomeComp;
