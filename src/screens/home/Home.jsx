import { Stack } from '@chakra-ui/react'
import React from 'react'
import Features from '../../components/home/Features'
import Header from '../../components/home/Header'
import LayoutComp from '../../layout/LayoutComp'

const Home = () => {
    return (
        <LayoutComp>
            <Stack width={'100%'} margin={'0px !important'} bg={'#1a2c38'} >
                <Header />
                <Features />

            </Stack>
        </LayoutComp>
    )
}

export default Home