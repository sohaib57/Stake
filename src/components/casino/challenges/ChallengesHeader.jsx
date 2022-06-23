import React from 'react'
import { Stack, Center, Image, Heading, Text } from '@chakra-ui/react'
import challenges from '../../../assets/images/challenges-1-748d4def.png'

const ChallengesHeader = () => {
    return (

        <Stack width={'100%'} bg={'#213743'} justifyContent={'space-between'} direction={'row'} px={'8'} py={'2'} >

            <Center >
                <Text fontSize={'3xl'} fontWeight={'600'} color={'white'}>
                    Challenges
                </Text>

            </Center>

            <Stack >
                <Image height={'110px'} width={'140px'} src={challenges} />

            </Stack>


        </Stack>
    )
}

export default ChallengesHeader