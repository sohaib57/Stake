import { Stack } from '@chakra-ui/react'
import React from 'react'
import MyBets from '../../components/sports/home/MyBets'
import SportsStats from '../../components/sports/home/SportsStats'
import LayoutComp from '../../layout/LayoutComp'

const MyBetsScreen = () => {
  return (
    <LayoutComp>
        <Stack py={'4'} bgColor={'#1A2C38'}>
        <MyBets/>
        <Stack px={{ base: '2', md: '8', lg: '12', xl: '16' }}>
        <SportsStats/>
        </Stack>
        </Stack>
    </LayoutComp>
  )
}

export default MyBetsScreen