import React from 'react';
import { Stack, VStack, Text } from '@chakra-ui/react';

import { GiBasketballBall } from 'react-icons/gi';
import Menu from './Menu';
import Search from './Search';
import Chat from './Chat';
import Bets from './Bets';

const MobileHeader = () => {
  return (
    <Stack
      width={'100%'}
      bgColor={'#071d2a'}
      height={'20%'}
      display={{ base: 'inherit', md: 'none', lg: 'none' }}
      position={'fixed'}
      bottom={'0'}
      direction={'row'}
      px={10}
      justifyContent={'space-between'}
    >
      <Menu />

      <Search />

      <Chat />

      <Bets />
      <VStack justifyContent={'center'}>
        <GiBasketballBall color="white" size={20} />
        <Text
          color="white"
          fontWeight={'700'}
          fontSize={'12px'}
          mt={'0 !important'}
        >
          Sport
        </Text>
      </VStack>
    </Stack>
  );
};

export default MobileHeader;
