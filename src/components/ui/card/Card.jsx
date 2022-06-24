import { Box, Center, IconButton, Stack } from '@chakra-ui/react';
import React from 'react';
import { FaPlay } from 'react-icons/fa';
import '../card slider/CardSlider.css';
const Card = ({ img }) => {
  return (
    <Center
      position={'relative'}
      className="container"
      py={'3'}
      px={'2'}
      h={'32vh'}
      w={'100%'}
    >
      <Box
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgImage={img}
        borderRadius={'xl'}
        w={'100%'}
        h={'full'}
        className="arrow"
      ></Box>
      <Stack className="middle">
        <FaPlay fontSize={'2rem'} color="white" className="button" />
      </Stack>
    </Center>
  );
};

export default Card;
