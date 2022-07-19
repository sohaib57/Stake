import React from 'react';
import Slider from 'react-slick';
import '../../../ui/card slider/CardSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import providerslider1 from '../../../../assets/images/providerslider1.jfif';
import providerslider2 from '../../../../assets/images/providerslider2.jfif';
import providerslider3 from '../../../../assets/images/providerslider3.png';
import providerslider4 from '../../../../assets/images/providerslider4.png';
import providerslider5 from '../../../../assets/images/providerslider5.png';
import providerslider6 from '../../../../assets/images/providerslider6.png';
import providerslider7 from '../../../../assets/images/providerslider7.png';
import providerslider8 from '../../../../assets/images/providerslider8.png';
import providerslider9 from '../../../../assets/images/providerslider9.png';
import providerslider10 from '../../../../assets/images/providerslider10.png';
import providerslider11 from '../../../../assets/images/providerslider11.png';
import providerslider12 from '../../../../assets/images/providerslider12.png';
import { Box, Center, Stack } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
const ProviderSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows : false,
        },
      },

    ],
  };
  return (
    <Stack
      // pb={'10'}
      marginTop={'0 !important'}
      bgColor={'inherit'}
      className="slider"
    >
      <Slider {...settings}>
        <Center py={'3'} h={'80px'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider1}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider2}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider3}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider5}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider4}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider6}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider7}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider8}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider9}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider10}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider11}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
        <Center h={'80px'} py={'3'} w={'100%'} px={{base:'1',md:'2'}}>
          <Box
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            bgImage={providerslider12}
            borderRadius={'xl'}
            w={'100%'}
            h={'full'}
            className="arrow"
          ></Box>
        </Center>
      </Slider>
    </Stack>
  );
};

export default ProviderSlider;
