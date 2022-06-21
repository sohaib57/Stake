import React from 'react';
import {
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaGg } from 'react-icons/fa';
import cardslider5 from '../../../assets/images/cardslider5.jfif';
import Card from '../../ui/card/Card';
const FeaturedSlots = () => {
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
        <FaGg fontSize={'1.3rem'} />
        <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
          {' '}
          Featured Slots
        </Heading>
      </HStack>
      <SimpleGrid
        w={'full'}
        minChildWidth={'130px'}
        spacingX={'2px'}
      >
        <Card img={cardslider5} />
        <Card img={cardslider5} />
        <Card img={cardslider5} />
        <Card img={cardslider5} />
        <Card img={cardslider5} />
        <Card img={cardslider5} />
        <Card img={cardslider5} />
      </SimpleGrid>
    </Stack>
  );
};

export default FeaturedSlots;
