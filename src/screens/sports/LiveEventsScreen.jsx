import { Stack } from '@chakra-ui/react';
import React from 'react';
import LiveEvents from '../../components/sports/home/LiveEvents';
import SportsStats from '../../components/sports/home/SportsStats';
import LayoutComp from '../../layout/LayoutComp';
import useDocumentTitle from '../../utils/useDocumentTitle'

const LiveEventsScreen = () => {

useDocumentTitle('Live Soccer Batting - Picks, Odds')

  return (
    <LayoutComp>
      <Stack
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        py={'4'}
        bgColor={'#1A2C38'}
      >
        <LiveEvents />
        <SportsStats />
      </Stack>
    </LayoutComp>
  );
};

export default LiveEventsScreen;
