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
} from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../../assets/images/slider1.jfif';
import slider2 from '../../../assets/images/slider2.jfif';
import slider3 from '../../../assets/images/slider3.jfif';
import slider4 from '../../../assets/images/slider4.jfif';
import slider5 from '../../../assets/images/slider5.jfif';
import { IoIosArrowForward, IoIosRocket } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCherry } from 'react-icons/gi';
import { MdOutlineCasino } from 'react-icons/md';
import { AiOutlineGift } from 'react-icons/ai';
import { FaGg, FaChessQueen, FaFire } from 'react-icons/fa';
import { ImFire } from 'react-icons/im';
import CardSlider from '../../ui/card slider/CardSlider';
import { Link, useNavigate } from 'react-router-dom';
import ProviderSlider from '../home/provider/ProviderSlider';
import LiveCasino from '../home/live casino/LiveCasino';
import FeaturedSlots from '../home/features slots/FeaturedSlots';
import GameShows from '../home/game shows/GameShows';
import StakeOriginalsComp from '../home/Stake Originals/StakeOriginalsComp';
import CasinoStats from './stats/CasinoStats';
const CasinoHomeComp = () => {
  const nav = useNavigate();
  const settings = {
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Stack py={'12'} px={{ base: '4', md: '0' }} w={'100%'} bgColor={'#1A2C38'}>
      {/* slider */}
      <Stack px={{ base: '8', lg: '12', xl: '16' }} className="slider">
        <Slider {...settings}>
          <Center h={'45vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={slider1}
              borderRadius={'3xl'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'45vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={slider2}
              borderRadius={'3xl'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'45vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={slider3}
              borderRadius={'3xl'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'45vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={slider4}
              borderRadius={'3xl'}
              w={'100%'}
              h={'full'}
            ></Box>
          </Center>
          <Center h={'45vh'} w={'100%'} px={'2'}>
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={slider5}
              borderRadius={'3xl'}
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
        pt={'12'}
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
            bgColor={'#0F212E'}
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
            bgColor={'#0F212E'}
          >
            <Stack direction={'row'} p={'2'}>
              <Tab
                className="lobby"
                onClick={() => nav('/casino/home')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <GiCherry />
                  <Text>Lobby</Text>
                </HStack>
              </Tab>
              <Tab
                className="live-casino"
                onClick={() => nav('/casino/home/live-casino')}
                w={'max-content'}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <MdOutlineCasino />
                  <Text>Live Casino</Text>
                </HStack>
              </Tab>
              <Tab
                className="featured-slots"
                onClick={() => nav('/casino/home/featured-slots')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <FaGg />
                  <Text> Featured Slots</Text>
                </HStack>
              </Tab>
              <Tab
                className="game-shows"
                onClick={() => nav('/casino/home/game-shows')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <AiOutlineGift />
                  <Text> Game Shows</Text>
                </HStack>
              </Tab>
              <Tab
                className="stake-originals"
                onClick={() => nav('/casino/home/stake-originals')}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={'sm'}
              >
                <HStack spacing={'2'}>
                  <ImFire />
                  <Text> Stake Originals</Text>
                </HStack>
              </Tab>
            </Stack>
          </TabList>
          {/* tab paanels */}
          <TabPanels>
            <TabPanel className="lobby">
              {/* stake originals */}
              <Stack
                className="stake-originals"
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
              >
                <HStack
                  w={'fit-content'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/stakeoriginals')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <ImFire fontSize={'1.3rem'} />
                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Stake Originals
                  </Heading>
                </HStack>
                <CardSlider />
              </Stack>
              {/* slots */}
              <Stack
                className="slots"
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
              >
                <HStack
                  w={'fit-content'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/slots')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaGg fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Slots
                  </Heading>
                </HStack>
                <CardSlider />
              </Stack>
              {/* providers */}
              <Stack
                py={'4'}
                className="provider"
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
              >
                <HStack
                  w={'fit-content'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/casino/collection/provider')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaChessQueen fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Providers
                  </Heading>
                </HStack>
                <ProviderSlider />
              </Stack>
              {/* live casino */}
              <Stack
                className="live-casino"
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
              >
                <HStack
                  w={'fit-content'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/live-casino')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <MdOutlineCasino fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Live Casino
                  </Heading>
                </HStack>
                <CardSlider />
              </Stack>
              {/* game shows */}
              <Stack
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="gameshows"
              >
                <Link
                  style={{ width: 'fit-content', paddingLeft: '5px' }}
                  to={'/gameshow'}
                >
                  <HStack
                    // w={'fit-content'}
                    color={'gray.400'}
                    pb={'3'}
                    spacing={'2'}
                    alignItems={'center'}
                  >
                    <AiOutlineGift fontSize={'1.3rem'} />

                    <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                      {' '}
                      Game Shows
                    </Heading>
                  </HStack>
                </Link>
                <CardSlider />
              </Stack>
              {/* table games */}
              <Stack
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="tablegames"
              >
                <Link
                  style={{ width: 'fit-content', paddingLeft: '5px' }}
                  to={'/tablegames'}
                >
                  <HStack
                    // w={'fit-content'}
                    color={'gray.400'}
                    pb={'3'}
                    spacing={'2'}
                    alignItems={'center'}
                  >
                    <FaFire fontSize={'1.3rem'} />

                    <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                      {' '}
                      Table Games
                    </Heading>
                  </HStack>
                </Link>
                <CardSlider />
              </Stack>
              {/* new releases */}
              <Stack
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="tablegames"
              >
                <Link
                  style={{ width: 'fit-content', paddingLeft: '5px' }}
                  to={'/tablegames'}
                >
                  <HStack
                    // w={'fit-content'}
                    color={'gray.400'}
                    pb={'3'}
                    spacing={'2'}
                    alignItems={'center'}
                  >
                    <IoIosRocket fontSize={'1.3rem'} />

                    <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                      {' '}
                      New Releases
                    </Heading>
                  </HStack>
                </Link>
                <CardSlider />
              </Stack>
            </TabPanel>
            <TabPanel className="live-casino">
              <LiveCasino />
              <Stack pt={'10'} px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
                <HStack
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/casino/collection/provider')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaChessQueen fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Providers
                  </Heading>
                </HStack>
                <ProviderSlider />
              </Stack>
            </TabPanel>
            <TabPanel className="featured-slots">
              <FeaturedSlots />
              <Stack
                pt={'8'}
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="provider"
              >
                <HStack
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/casino/collection/provider')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaChessQueen fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Providers
                  </Heading>
                </HStack>

                <ProviderSlider />
              </Stack>
            </TabPanel>
            <TabPanel className="game-shows">
              <GameShows />
              <Stack
                pt={'8'}
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="provider"
              >
                <HStack
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/casino/collection/provider')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaChessQueen fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Providers
                  </Heading>
                </HStack>

                <ProviderSlider />
              </Stack>
            </TabPanel>
            <TabPanel className="stake-originals">
              <StakeOriginalsComp />
              <Stack
                pt={'8'}
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                className="provider"
              >
                <HStack
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => nav('/casino/collection/provider')}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <FaChessQueen fontSize={'1.3rem'} />

                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Providers
                  </Heading>
                </HStack>
                <ProviderSlider />
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
      {/* stats */}
      <Stack px={{ base: '8', lg: '12', xl: '16' }}>
        <CasinoStats />
      </Stack>
    </Stack>
  );
};

export default CasinoHomeComp;
