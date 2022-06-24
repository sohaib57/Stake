import React from 'react'
import { RiShareBoxFill } from 'react-icons/ri'
import { Image, chakra, Stack, VStack, TabList, Tab, Text, Tabs, TabPanel, TabPanels, PinInput, PinInputField, HStack, Center } from '@chakra-ui/react'
import ProgressTab from './ProgressTab'
import BenefitsTab from './BenefitsTab'

const WeeklyGiveAwayModal = () => {

    return (

        <VStack width={'100%'}>
            <Tabs width={'100%'} variant="soft-rounded" colorScheme="green" >

                <Stack width={'100%'} direction={'row'} justifyContent={'center'} >
                    <TabList
                        overflowX={'auto'}
                        borderRadius={'full'}
                        bgColor={'#0F212E'}
                        p={'1'}
                        maxW={'fit-content'}
                    >
                        <Tab
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            w={'max-content'}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Progress
                            </Text>
                        </Tab>
                        <Tab
                            w={'max-content'}
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Benefits
                            </Text>

                        </Tab>
                        <Tab
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            w={'max-content'}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Giveaway
                            </Text>
                        </Tab>

                    </TabList>
                </Stack>

                <TabPanels width={'100%'}  >
                    <TabPanel color={'white'} padding={'0px !important'} >
                        <ProgressTab />
                    </TabPanel>

                    <TabPanel color={'white'} padding={'0px !important'} >
                        <BenefitsTab />
                    </TabPanel>


                    <TabPanel color={'white'} padding={'0px !important'} >

                        <VStack spacing={'5'} py={'5'}  >
                            <Text fontSize={'lg'} color={'#FFFFFF'} fontWeight={'600'}   >
                                $50k Weekly Giveaway
                            </Text>
                            <Text color={'#b1bad3'} >
                                6/18/2022 - 6/25/2022
                            </Text>

                            <HStack >
                                <Stack>
                                    <PinInput size={'lg'} defaultValue='1'  >
                                        <PinInputField borderWidth={'2px'} borderColor='#2f4553' />
                                        <Text color={'#b1bad3'} fontWeight={'bold'} >Days</Text>

                                    </PinInput>
                                </Stack>
                                <Stack>
                                    <PinInput size={'lg'} defaultValue='2'>
                                        <PinInputField borderWidth={'2px'} borderColor='#2f4553' />
                                        <Text color={'#b1bad3'} fontWeight={'bold'} >Hours</Text>
                                    </PinInput>
                                </Stack>

                                <Stack>
                                    <PinInput size={'lg'} defaultValue='3'>
                                        <PinInputField borderWidth={'2px'} borderColor='#2f4553' />
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
                                Wager to earn tickets into a giveaway where anybody can win. Just one ticket could see you sharing in $50,000 every single week. With $1,000 wagered equating to one ticket, earn as many tickets as possible to give yourself the best chance of winning big! Winners drawn on live stream every Saturday 2:00pm GMT at www.Dlive.tv/PrimeEdd
                            </Text>

                            <Text color={'#a5afc7'} >
                                Your number of enteries:
                                <Text display={'inline'} color='#FFFFFF !important' > 0 </Text>
                            </Text>

                            <Text textAlign={'center'} color={'#a5afc7'} >
                                For a detailed breakdown of the prize and payout structure, please visit the official announcement for
                                <chakra.span pl='1' color={'white'} margin={'0 !important'} display={'inline-block'} >
                                    this giveaway
                                </chakra.span>
                                <chakra.span pl={'2'} margin={'0 !important'} display={'inline-block'} >
                                    <RiShareBoxFill color={'white'} />
                                </chakra.span>
                            </Text>

                        </VStack>

                    </TabPanel>
                </TabPanels>


            </Tabs >
        </VStack>


    )
}

export default WeeklyGiveAwayModal