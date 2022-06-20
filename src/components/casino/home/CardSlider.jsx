import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardslider1 from '../../../assets/images/cardslider1.jfif';
import cardslider2 from '../../../assets/images/cardslider2.jfif';
import cardslider3 from '../../../assets/images/cardslider3.jfif';
import cardslider4 from '../../../assets/images/cardslider4.jfif';
import cardslider5 from '../../../assets/images/cardslider5.jfif';
import cardslider6 from '../../../assets/images/cardslider6.jfif';
import cardslider7 from '../../../assets/images/cardslider7.jfif';
import { Box, Center, Stack } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide : 4 ,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
  };
  return (
    <Stack
      pb={'10'}
      marginTop={'0 !important'}
      bgColor={'#1A2C38'}
      px={{ base: '0', md: '8', lg: '12', xl: '24' }}
      className="slider"
    >
      <Slider {...settings}>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider1}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider2}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider6}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider5}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider4}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider3}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider1}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider7}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider3}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider2}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
        <Center h={'30vh'} w={'100%'} px={'2'}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={cardslider3}
            borderRadius={'3xl'}
            w={'100%'}
            h={'full'}
          ></Box>
        </Center>
      </Slider>
    </Stack>
  );
};

export default CardSlider;
