import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCasino } from 'react-icons/md';
import cardslider3 from '../../../../assets/images/cardslider3.jfif';
import Card from '../../../ui/card/Card';
const LiveCasino = () => {
  const nav = useNavigate();
  return (
    <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
      <HStack
        onClick={() => nav('/casino/home/live-casino')}
        color={'gray.400'}
        spacing={'2'}
        alignItems={'center'}
      >
        <MdOutlineCasino fontSize={'1.3rem'} />
        <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
          {' '}
          Live Casino
        </Heading>
      </HStack>
      <SimpleGrid
        w={'full'}
        minChildWidth={'130px'}
        spacingX={'2px'}
      >
        <Card img={cardslider3} />
        <Card img={cardslider3} />
        <Card img={cardslider3} />
        <Card img={cardslider3} />
        <Card img={cardslider3} />
        <Card img={cardslider3} />
        <Card img={cardslider3} />
      </SimpleGrid>
    </Stack>
  );
};

export default LiveCasino;
