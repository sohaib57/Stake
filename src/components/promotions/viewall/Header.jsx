import React from 'react';
import { Stack, Text, Center, Image } from '@chakra-ui/react';

const Header = ({ text, img }) => {
  return (
    <Stack
      margin={'0px !important'}
      width={'100%'}
      bg={'#000000e3'}
      justifyContent={'space-between'}
      direction={'row'}
      px={'8'}
    >
      <Center>
        <Text fontSize={'x-large'} fontWeight={'600'} color={'white'}>
          {text}
        </Text>
      </Center>

      <Stack margin={'0px !important'}>
        <Image src={img} />
      </Stack>
    </Stack>
  );
};

export default Header;
