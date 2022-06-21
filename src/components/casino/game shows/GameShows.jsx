import React from 'react';
import {
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineGift } from 'react-icons/ai';
import cardslider7 from '../../../assets/images/cardslider7.jfif';
import Card from '../../ui/card/Card';
const GameShows = () => {
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
        <AiOutlineGift fontSize={'1.3rem'} />
        <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
          {' '}
          Game Shows
        </Heading>
      </HStack>
      <SimpleGrid
        w={'full'}
        minChildWidth={'130px'}
        spacingX={'2px'}
      >
        <Card img={cardslider7} />
        <Card img={cardslider7} />
        <Card img={cardslider7} />
        <Card img={cardslider7} />
        <Card img={cardslider7} />
        <Card img={cardslider7} />
        <Card img={cardslider7} />
      </SimpleGrid>
    </Stack>
  );
};

export default GameShows;
