import React from 'react';
import {
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import cardslider4 from '../../../../assets/images/cardslider4.jfif';
import Card from '../../../ui/card/Card';
const StakeOriginalsComp = () => {
  const nav = useNavigate();
  return (
    <Stack
      px={{ base: '2', md: '8', lg: '12', xl: '16' }}
      className="live-casino"
    >
      <HStack
        onClick={() => nav('/casino/home/live-casino')}
        color={'gray.400'}
        spacing={'2'}
        alignItems={'center'}
      >
        <FaFire fontSize={'1.3rem'} />
        <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
          {' '}
          Stake Originals
        </Heading>
      </HStack>
      <SimpleGrid
        w={'full'}
        minChildWidth={'130px'}
        spacingX={'2px'}
      >
        <Card img={cardslider4} />
        <Card img={cardslider4} />
        <Card img={cardslider4} />
        <Card img={cardslider4} />
        <Card img={cardslider4} />
        <Card img={cardslider4} />
        <Card img={cardslider4} />
      </SimpleGrid>
    </Stack>
  );
};
export default StakeOriginalsComp;
