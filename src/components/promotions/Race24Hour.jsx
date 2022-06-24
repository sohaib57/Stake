import React from 'react'
import { Input, Image, Stack, VStack, TabList, Tab, Text, Tabs, TabPanel, TabPanels, PinInput, PinInputField, HStack, Center } from '@chakra-ui/react'
import green from '../../assets/images/greenSignal.jpg'

const Race24Hour = () => {

    return (
        <VStack width={'100%'}>
            <Stack width={'100%'} direction={'row'} justifyContent={'center'} >
                <Stack spacing={'5'}  >
                    <VStack spacing={'5'} py={'5'} >
                        <Center>
                            <Image width={'70px'} height={'70px'} src={green} />
                        </Center>
                        <Text fontSize={'lg'} color={'#FFFFFF'} fontWeight={'600'}   >
                            $100k Race - 24 Hours
                        </Text>

                        <HStack >
                            <Stack>
                                <PinInput size={'lg'} defaultValue='1'  >
                                    <PinInputField color={'white'} borderWidth={'2px'} borderColor='#2f4553' />
                                    <Text color={'#b1bad3'} fontWeight={'bold'} >Days</Text>

                                </PinInput>
                            </Stack>
                            <Stack>
                                <PinInput size={'lg'} defaultValue='2'>
                                    <PinInputField color={'white'} borderWidth={'2px'} borderColor='#2f4553' />
                                    <Text color={'#b1bad3'} fontWeight={'bold'} >Hours</Text>
                                </PinInput>
                            </Stack>

                            <Stack>
                                <PinInput size={'lg'} defaultValue='3'>
                                    <PinInputField color={'white'} borderWidth={'2px'} borderColor='#2f4553' />
                                    <Text color={'#b1bad3'} fontWeight={'bold'}  >Minutes</Text>
                                </PinInput>
                            </Stack>
                            <Stack>
                                <PinInput size={'lg'} defaultValue='4'>
                                    <PinInputField borderWidth={'2px'} borderColor='#2f4553' color={'white'} />
                                    <Text color={'#b1bad3'} fontWeight={'bold'} >Seconds</Text>
                                </PinInput>
                            </Stack>
                        </HStack>

                        <Text textAlign={'center'} color={'#a5afc7'} >
                            Join Stake's 24-hour $100,000 daily race! For every bet placed, sports or casino, you'll climb passed other racers in the top 5000 positions increasing your prize the higher you go! Upon completion of Stake races all prizes will be instantly paid out to your balance in the equivalent BTC value!
                        </Text>
                    </VStack>

                    <Stack>
                        <Text color={'#B1ACA7'} >Your Position</Text>
                        <Input borderWidth={'2px'} bg={'#2F4553'} color={'white'} placeholder='Start wagering to enter...' disabled cursor={'text'} />
                    </Stack>

                    <HStack justifyContent={'space-between'}  >
                        <Stack>
                            <Text color={'#B1ACA7'} >Your Current Prize</Text>
                            <Input borderWidth={'2px'} color={'white'} bg={'#2F4553'} placeholder='0.00000000' disabled cursor={'text'} />
                        </Stack>
                        <Stack>
                            <Text color={'#B1ACA7'} >Your Wagered</Text>
                            <Input borderWidth={'2px'} color={'white'} bg={'#2f4553'} placeholder='0.00000000' disabled cursor={'text'} />
                        </Stack>

                    </HStack>



                </Stack>
            </Stack>
        </VStack>


    )
}

export default Race24Hour