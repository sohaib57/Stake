import React from 'react'
import { Stack, Img, Text } from '@chakra-ui/react'
import earth from '../../../assets/images/earth.gif'

const IgnoredUsers = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>

                <Stack justifyContent={'center'} alignItems={'center'} >

                    <Stack alignItems={'center'} justifyContent={'center'} >
                        <Img boxSize={'150px'} src={earth} />
                        <Text color={'white'} >
                            No ignored users to show
                        </Text>
                    </Stack>



                </Stack>

            </Stack>
        </Stack>
    )
}

export default IgnoredUsers