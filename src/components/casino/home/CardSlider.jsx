import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../../assets/images/slider1.jfif';
import slider2 from '../../../assets/images/slider2.jfif';
import slider3 from '../../../assets/images/slider3.jfif';
import slider4 from '../../../assets/images/slider4.jfif';
import slider5 from '../../../assets/images/slider5.jfif';
import { Box, Center, Stack } from '@chakra-ui/react';
const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <Stack px={{base:'0',md:'8',lg:'12',xl:'24'}} className="slider">
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
  )
}

export default CardSlider