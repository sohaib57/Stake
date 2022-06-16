import { Heading, Input, InputGroup, InputLeftElement, Stack, Text, chakra, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import Star from '../../../assets/images/star.png'
import FavouriteLogo from '../../../assets/images/favouriteLogo.png'
import LayoutComp from '../../../layout/LayoutComp'

const CasinoFavouriteComp = () => {
    return (
        <LayoutComp>
            {/* Favourite Logo section */}
            <Stack position={'relative'} minH={'28'} justify={'center'} bgImage={FavouriteLogo} bgRepeat={'no-repeat'} bgPos={'right'} bgColor={'#213743'}>
                <Heading position={'absolute'} left={'10'} textAlign={'center'} color={'white'}>Favourite</Heading>
            </Stack>
            <Stack w={'100%'} bgColor={'#1A2C38'} px={'6'}>
                <Stack py={'6'}>
                    {/* Search Section */}
                    <InputGroup border={'1px solid #2f4553'} borderRadius={'full'}>
                        <InputLeftElement pointerEvents={'none'} children={<RiSearch2Line color='#4C667B' size={'1.2em'} />} pl={'2'} />
                        <Input placeholder='Search your game' bgColor={'#0F212E'} borderRadius={'full'} _hover={{ borderColor: '#557086' }} />
                    </InputGroup>
                </Stack>
                <Text color={'#b1bad3'} textAlign={'center'} pb={'6'}>No favourites yet, use the <chakra.span fontWeight={'bold'}>✩</chakra.span> to favourite games.</Text>
                {/* Tabs Header */}
                <Stack >
                    <Tabs variant='unstyled'>
                        <TabList w={'fit-content'} bgColor={'#0F212E'} borderRadius={'full'}>
                            <Tab
                                color={'white'}
                                m={'1'}
                                _selected={{

                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                                _hover={{
                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                            > My Bets
                            </Tab>
                            <Tab
                                color={'white'}
                                m={'1'}
                                _selected={{

                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                                _hover={{
                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                            > All Bets
                            </Tab>
                            <Tab
                                color={'white'}
                                m={'1'}
                                _selected={{

                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                                _hover={{
                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                            > High Rollers
                            </Tab>
                            <Tab
                                color={'white'}
                                m={'1'}
                                _selected={{

                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                                _hover={{
                                    color: "white",
                                    bg: "#2F4553",
                                    borderRadius: 'full',
                                    m: '1'
                                }}
                            > Races
                            </Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
                            </TabPanel>
                            <TabPanel>
                                <p>two!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Stack>
        </LayoutComp>
    )
}

export default CasinoFavouriteComp