import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const Card = ({ img }) => {
  return (
    <Center py={'3'} px={'2'} h={'32vh'} w={'100%'}>
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
    </Center>
  );
};

export default Card;
