import React from 'react'
import { Stack, Text, Center, Image } from '@chakra-ui/react'
import favourite from '../../../assets/images/favouriteLogo.png'

const ViewAllHeader = () => {
    return (
        <Stack margin={'0px !important'} width={'100%'} bg={'#213743'} justifyContent={'space-between'} direction={'row'} px={'8'}  >

            <Center >
                <Text fontSize={'3xl'} fontWeight={'600'} color={'white'}>
                    Challenges
                </Text>

            </Center>

            <Stack margin={'0px !important'} >
                <Image src={favourite} />

            </Stack>


        </Stack>

    )
}

export default ViewAllHeader