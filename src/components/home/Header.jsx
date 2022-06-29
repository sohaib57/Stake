import React from 'react'
import { Heading, HStack, Image, Progress, Stack, Text } from '@chakra-ui/react'
import { BsStar } from 'react-icons/bs'
import welcometeam from '../../assets/images/top.png'
const Header = () => {
    return (
        <Stack margin={'0px !important'} width={'100%'} bg={'#0f212e'} textColor={'white'} >
            <Stack direction={'row'} height={'100%'} justifyContent={'space-between'} >
                {/* Left div */}
                <Stack width={{ base: '100%', lg: '50%' }}   >
                    <Stack width={{ base: '100%', lg: '70%' }} px={'10'} py={'16'} >
                        <Heading color={'white'} fontSize='lg' pb={'2'} lineHeight={'1.5'} fontWeight={'700'} >
                            Welcome back, Sohaib57
                        </Heading>
                        <Stack>
                            <HStack justifyContent={'space-between'} color={'#fff'} lineHeight={'1.5'} fontWeight={'600'} >
                                <Text>
                                    Your VIP Progress
                                </Text>
                                <Text>
                                    0.00%
                                </Text>
                            </HStack>

                            <Progress borderRadius="1rem" bg={'#2F4553'} />

                            <HStack justifyContent={'space-between'} fontWeight={'600'} >

                                <HStack>
                                    <BsStar color='#2F4553' fontSize={'20px'} />
                                    <Text color={'#b1bad3'} > None </Text>
                                </HStack>


                                <HStack>
                                    <BsStar color='#BA9469' fontSize={'20px'} />
                                    <Text color={'#b1bad3'} >   Bronze </Text>
                                </HStack>


                            </HStack>

                        </Stack>

                    </Stack>
                </Stack>



                {/* Right div with a background */}
                <Stack display={{ base: 'none', lg: 'flex' }} mr={'12 !important'} width={'45%'} >
                    <Stack margin={'0px !important'} width={'100%'} height={'100%'} >
                        <Image height={'full'} width={'full'} src={welcometeam} />

                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Header