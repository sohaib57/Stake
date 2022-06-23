import { Image, Text, VStack } from '@chakra-ui/react'
import dice from '../../../../assets/images/dice.png'
import React from 'react'

const MyClaimed = () => {
    return (
        <>
            <VStack pb={'100px'}>
                <Image src={dice} height={'100px'} width={'100px'} />

                <Text color={'#D9DCDE'} >
                    We are unable to find any challenges
                </Text>
                <Text color={'#8E99AF'} >
                    They may not be available to your region
                </Text>
            </VStack>


        </>
    )
}

export default MyClaimed