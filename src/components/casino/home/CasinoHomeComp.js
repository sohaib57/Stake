import {
  Box,
  Center,
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
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCherry } from 'react-icons/gi';
import { MdOutlineCasino } from 'react-icons/md';
import {
  AiFillThunderbolt,
  AiOutlineGift,
  AiOutlineFire,
} from 'react-icons/ai';
import LayoutComp from '../../../layout/LayoutComp';
import CardSlider from './CardSlider';
const CasinoHomeComp = () => {
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
    <LayoutComp>
      <Stack py={'12'} w={'100%'} bgColor={'#1A2C38'}>
        <Stack
          px={{ base: '0', md: '8', lg: '12', xl: '24' }}
          className="slider"
        >
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
        <Stack
          px={{ base: '2', md: '8', lg: '12', xl: '24' }}
          display={{ base: 'none', md: 'flex' }}
          pt={'12'}
          className="searchbar"
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
        <Stack
          px={{ base: '2', md: '8', lg: '12', xl: '24' }}
          py={'8'}
          className="tabs"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              overflowX={'auto'}
              maxW={'fit-content'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
            >
              <Stack direction={'row'} p={'2'}>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <GiCherry />
                    <Text>Lobby</Text>
                  </HStack>
                </Tab>
                <Tab
                  w={'max-content'}
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <MdOutlineCasino />
                    <Text>Live Casino</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <AiFillThunderbolt />
                    <Text> Featured Slots</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <AiOutlineGift />
                    <Text> Game Shows</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <AiOutlineFire />
                    <Text> Stake Originals</Text>
                  </HStack>
                </Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack className='stake-originals'>
        <CardSlider />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default CasinoHomeComp;
