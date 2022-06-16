import {
  Box,
  Center,
  color,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
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
    <Stack py={'12'} px={'28'} w={'100%'} bgColor={'#1A2C38'}>
      <Stack className="slider">
        <Slider {...settings}>
          <Center h={'55vh'} w={'100%'} px={'2'}>
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
          <Center h={'55vh'} w={'100%'} px={'2'}>
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
          <Center h={'55vh'} w={'100%'} px={'2'}>
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
          <Center h={'55vh'} w={'100%'} px={'2'}>
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
          <Center h={'55vh'} w={'100%'} px={'2'}>
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
      <Stack pt={'12'} className="searchbar">
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
            <AiOutlineSearch color="#b1bad3" fontSize={'1.3rem'} />
          </InputLeftElement>
          <Input
            color={'white'}
            focusBorderColor="none"
            bgColor={'#0F212E'}
            borderRadius={'full'}
            placeholder="Search your game"
            size="md"
          />
        </InputGroup>
      </Stack>
      <Stack  className="tabs">
        <Stack w={'fit-content'} bgColor={'#0F212E'}>
        <Tabs   p={'2'} variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* <p>one!</p> */}
            </TabPanel>
            <TabPanel>
              {/* <p>two!</p> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CasinoHomeComp;
