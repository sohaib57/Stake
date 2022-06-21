import { Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import error from '../assets/images/error.png';
const NoMatchScreen = () => {
  return (
    <Stack spacing={'10'} bgColor={'#213743'} h={'100vh'} py={'24'} alignItems={'center'} w={'100%'}  px={'12'}>
      <Image borderRadius={'xl'} w={'50%'} h={'70%'} src={error} />
      <Heading color={'white'} fontSize={'xl'} fontWeight={'500'}>Page Not Found</Heading>
      <Outlet/>
    </Stack>
  );
};

export default NoMatchScreen;
