import React from 'react'
import { Stack, Tabs, TabList, Tab, Text, TabPanels, TabPanel, HStack, Tooltip, chakra, Select } from '@chakra-ui/react'
import { AiOutlineStar, AiFillEyeInvisible, AiFillWallet } from 'react-icons/ai'
const CreatedByModal = () => {
    return (

        <Stack  spacing={'4'} margin={'0px !important'} alignItems={'center'} px={{ base: '2', lg: '6' }} pt={'2'}  >

            <HStack>
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="Bronze" aria-label='A tooltip' >

                    <chakra.span>
                        <AiOutlineStar color={'#ffb949'} size={'1rem'} />
                    </chakra.span>
                </Tooltip>
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="SportsbookManager" aria-label='A tooltip'  >
                    <chakra.span color={'#108F45'} fontSize={'1rem'} fontWeight={700} >
                        S
                    </chakra.span>
                </Tooltip>
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="SupportSenior" aria-label='A tooltip'  >
                    <chakra.span color={'#108F45'} fontSize={'1rem'} fontWeight={700} >
                        S
                    </chakra.span>
                </Tooltip>
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="CommunityManager" aria-label='A tooltip'  >
                    <chakra.span fontSize={'1rem'} color={'#D98B0D'} fontWeight={700} >
                        C
                    </chakra.span>
                </Tooltip>
                <chakra.span color={'white'} fontSize={'1rem'} fontWeight={700} >
                    Caelum
                </chakra.span>
            </HStack>

            <Text color={'#b1bad3'} >
                Joined on March 23, 2020
            </Text>

            <HStack  justifyContent={'space-between'}  >
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="Tip" >
                    <span>
                        <AiFillWallet size={'1.2rem'} color={'#b1bad3'} />
                    </span>
                </Tooltip>
                <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="Ignore" >
                    <span>
                        <AiFillEyeInvisible size={'1.2rem'} color={'#b1bad3'} />
                    </span>
                </Tooltip>
            </HStack>

            <Tabs variant="soft-rounded" colorScheme="green">

                <Stack direction={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
                    <TabList
                        overflowX={'auto'}
                        borderRadius={'full'}
                        bgColor={'black'}
                        p={'1'}
                    >
                        <Tab
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            w={'max-content'}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Statistics
                            </Text>
                        </Tab>
                        <Tab
                            w={'max-content'}
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Trophies
                            </Text>

                        </Tab>
                        <Tab
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            w={'max-content'}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Races
                            </Text>
                        </Tab>

                    </TabList>


                </Stack>

                <TabPanels>
                    <TabPanel>
                    </TabPanel>
                    <TabPanel>
                        <Stack alignItems={'center'} >
                            <Select maxWidth={'fit-content'} color={'white'} bg={'black'} borderColor={'#e2e8f0'} variant='outline' >
                                <option _hover={{}} style={{ color: 'white', backgroundColor: 'black' }}>Luckiest</option>
                                <option _hover={{}} style={{ color: 'white', backgroundColor: 'black' }}  >biggest</option>

                            </Select>
                        </Stack>
                    </TabPanel>
                    <TabPanel>



                    </TabPanel>

                </TabPanels>
            </Tabs >


        </Stack >



    )
}

export default CreatedByModal