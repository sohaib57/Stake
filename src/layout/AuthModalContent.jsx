import React from 'react'
import { RiShareBoxFill } from 'react-icons/ri'
import { Image, chakra, Stack, VStack, TabList, Tab, Text, Tabs, TabPanel, TabPanels, PinInput, PinInputField, HStack, Center } from '@chakra-ui/react'

const AuthModalContent = () => {
    return (
        <Stack>
            <Tabs defaultIndex={2} width={'100%'} variant="soft-rounded" colorScheme="green" >

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
                                Register
                            </Text>
                        </Tab>
                        <Tab
                            w={'max-content'}
                            color={'white'}
                            _selected={{ color: 'white', bg: '#2F4553' }}
                            fontSize={{ base: 'sm', md: 'md' }}

                        >
                            <Text>
                                Sign In
                            </Text>

                        </Tab>
                    </TabList>
                </Stack>

                <TabPanels width={'100%'}  >
                    <TabPanel color={'white'} padding={'0px !important'} >
                        
                    </TabPanel>

                    <TabPanel color={'white'} padding={'0px !important'} >
                        
                    </TabPanel>
                </TabPanels>


            </Tabs >
        </Stack>

    )
}

export default AuthModalContent