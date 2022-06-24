import React from 'react'
import { BsStar } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { RiVipDiamondFill } from 'react-icons/ri'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Text,
    Box,
    HStack,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,



} from '@chakra-ui/react'

const BenefitsTab = () => {
    return (
        <Stack width={'100%'} spacing={'4'} py={'5'}  >

            {/* Bronze */}
            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md' allowMultiple >

                <AccordionItem border={'0px !important'}  >
                    <AccordionButton width={'100%'}  >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <BsStar color='#BA9469' fontSize={'1rem'} />
                                <Text>
                                    Bronze
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>
                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Bonus from Support in currency of your choice</ListItem>
                            <ListItem>Rakeback enabled</ListItem>
                            <ListItem>Weekly bonuses</ListItem>
                            <ListItem>FMonthly bonuses</ListItem>
                            <ListItem>VIP Telegram channel access</ListItem>
                        </UnorderedList>

                    </AccordionPanel>
                </AccordionItem>

            </Accordion>

            {/* Silver */}
            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md'  allowMultiple >
                <AccordionItem border={'0px !important'} >
                    <AccordionButton width={'100%'} >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <BsStar color='#b1bad3' fontSize={'1rem'} />
                                <Text>
                                    Silver
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>
                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Bonus from Support in currency of your choice</ListItem>
                            <ListItem>Weekly & monthly bonuses increased</ListItem>
                        </UnorderedList>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* Gold */}
            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md' allowMultiple >
                <AccordionItem border={'0px !important'}  >
                    <AccordionButton width={'100%'}  >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <BsStar color='#C7AB10' fontSize={'1rem'} />
                                <Text>
                                    Gold
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>

                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Bonus from Support in currency of your choice</ListItem>
                            <ListItem>Weekly & monthly bonuses increased</ListItem>
                        </UnorderedList>

                    </AccordionPanel>

                </AccordionItem>
            </Accordion>

            {/* Platinum I - III */}
            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md' allowMultiple >
                <AccordionItem border={'0px !important'}   >
                    <AccordionButton width={'100%'} >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <AiFillStar color={'#6FDDE7'} fontSize={'1rem'} />
                                <Text>
                                    Platinum I - III
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>
                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Bonus from Support in currency of your choice</ListItem>
                            <ListItem>Weekly & monthly bonuses increased</ListItem>
                            <ListItem>14 - 42 Day, Daily bonus (Reload)</ListItem>
                        </UnorderedList>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* Platinum IV - VI */}
            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md' allowMultiple >
                <AccordionItem border={'0px !important'} >
                    <AccordionButton width={'100%'}  >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <AiFillStar color='#6fdde7' fontSize={'1rem'} />
                                <Text>
                                    Platinum IV - VI
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>
                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Dedicated VIP host</ListItem>
                            <ListItem>Bonus from VIP host in currency of your choice</ListItem>
                            <ListItem>Daily & weekly bonuses increased</ListItem>
                            <ListItem>Monthly bonuses</ListItem>
                        </UnorderedList>
                    </AccordionPanel>
                </AccordionItem>
                <Accordion />


            </Accordion>

            {/* Diamond */}

            <Accordion p={'1'} bg={'#213743'} width={'inherit'} boxShadow='md' allowMultiple >
                <AccordionItem border={'0px !important'}  >
                    <AccordionButton width={'100%'}  >
                        <Stack width={'full'} direction={'row'} justifyContent={'space-between'} >
                            <HStack>
                                <RiVipDiamondFill color='#6fdde7' fontSize={'1rem'} />
                                <Text>
                                    Diamond
                                </Text>
                            </HStack>

                            <AccordionIcon color={'white'} />
                        </Stack>
                    </AccordionButton>
                    <AccordionPanel borderTop={'1px solid grey'} pb={4}>
                        <UnorderedList>
                            <ListItem>Bonus from VIP host in currency of your choice</ListItem>
                            <ListItem>Exclusively customized benefits</ListItem>
                            <ListItem>Daily & weekly bonuses increased</ListItem>
                            <ListItem>Monthly bonuses</ListItem>
                        </UnorderedList>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

        </Stack >
    )
}

export default BenefitsTab