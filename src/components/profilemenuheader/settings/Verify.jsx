import React from 'react'
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
} from '@chakra-ui/react';

const Verify = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bg={'black'} >
            <Stack direction={'column'} spacing={'4'} color={'white'}>


                {/* Level 1 */}

                <Accordion
                    p={'1'}
                    width={'inherit'}
                    boxShadow="md"
                    allowMultiple
                    bg={'#2f3640'}

                >
                    <AccordionItem border={'0px !important'}>
                        <AccordionButton width={'100%'}>
                            <Stack
                                width={'full'}
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <HStack>
                                    <Text>Level 1</Text>
                                </HStack>

                                <AccordionIcon color={'white'} />
                            </Stack>
                        </AccordionButton>
                        <AccordionPanel borderTop={'1px solid grey'} pb={4}>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>


                {/* Level 2 */}

                <Accordion
                    p={'1'}
                    width={'inherit'}
                    boxShadow="md"
                    allowMultiple
                    bg={'#2f3640'}

                >
                    <AccordionItem border={'0px !important'}>
                        <AccordionButton width={'100%'}>
                            <Stack
                                width={'full'}
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <HStack>
                                    <Text>Level 2</Text>
                                </HStack>

                                <AccordionIcon color={'white'} />
                            </Stack>
                        </AccordionButton>
                        <AccordionPanel borderTop={'1px solid grey'} pb={4}>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                {/* Level 3 */}

                <Accordion
                    p={'1'}
                    width={'inherit'}
                    boxShadow="md"
                    allowMultiple
                    bg={'#2f3640'}

                >
                    <AccordionItem border={'0px !important'}>
                        <AccordionButton width={'100%'}>
                            <Stack
                                width={'full'}
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <HStack>
                                    <Text>Level 3</Text>
                                </HStack>

                                <AccordionIcon color={'white'} />
                            </Stack>
                        </AccordionButton>
                        <AccordionPanel borderTop={'1px solid grey'} pb={4}>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                {/* Level 4 */}

                <Accordion
                    p={'1'}
                    width={'inherit'}
                    boxShadow="md"
                    allowMultiple
                    bg={'#2f3640'}

                >
                    <AccordionItem border={'0px !important'}>
                        <AccordionButton width={'100%'}>
                            <Stack
                                width={'full'}
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <HStack>
                                    <Text>Level 4</Text>
                                </HStack>

                                <AccordionIcon color={'white'} />
                            </Stack>
                        </AccordionButton>
                        <AccordionPanel borderTop={'1px solid grey'} pb={4}>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Stack>
        </Stack>
    )
}

export default Verify