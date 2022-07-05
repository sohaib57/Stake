import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Stack,
    Text,
    HStack,

} from '@chakra-ui/react';
import Deposit from '../wallet/Deposit';
import VerifyLevel2 from './VerifyLevel2';
import VerifyLevel3 from './VerifyLevel3';
import VerifyLevel4 from './VerifyLevel4';

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
                            <Stack width={{ base: '100%', lg: '50%' }} >
                                <Deposit />
                            </Stack>
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
                            <Stack width={{ base: '100%', lg: '50%' }} >
                                <VerifyLevel2 />
                            </Stack>
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
                            <Stack width={{ base: '100%', lg: '50%' }} >
                                <VerifyLevel3 />
                            </Stack>
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
                            <Stack width={{ base: '100%', lg: '50%' }} >
                                <VerifyLevel4 />
                            </Stack>

                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Stack>
        </Stack>
    )
}

export default Verify