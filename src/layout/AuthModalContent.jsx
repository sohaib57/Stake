import React from 'react'
import { RiShareBoxFill } from 'react-icons/ri'
import { Image, chakra, Stack, VStack, TabList, Tab, Text, Tabs, TabPanel, TabPanels, PinInput, PinInputField, HStack, Center, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const AuthModalContent = ({ i }) => {
    return (
        <Stack>
            <Tabs defaultIndex={i} width={'100%'} variant="soft-rounded" colorScheme="green" >

                <Stack width={'100%'} direction={'row'} justifyContent={'center'} >
                    <TabList
                        overflowX={'auto'}
                        borderRadius={'full'}
                        bgColor={'black'}
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
                        <Stack px={'2'} pt={'4'}>

                        </Stack>
                    </TabPanel>

                    <TabPanel color={'white'} padding={'0px !important'} >
                        <Stack spacing={'4'} px={'2'} pt={'4'}>
                            <FormControl isRequired>
                                <FormLabel htmlFor='email'>Email or Username</FormLabel>
                                <Input color={'white'}
                                    focusBorderColor="none"
                                    bgColor={'#000000ed'}
                                    borderRadius={'sm'}
                                    borderColor={'gray'}
                                    size="md"
                                    fontWeight={'500'}
                                    fontSize={'sm'}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel htmlFor='email'>Password</FormLabel>
                                <Input color={'white'}
                                    borderColor={'gray'}
                                    focusBorderColor="none"
                                    bgColor={'#000000ed'}
                                    borderRadius={'sm'}
                                    size="md"
                                    fontWeight={'500'}
                                    fontSize={'sm'}
                                />
                            </FormControl>
                            <Button _active={{}} _focus={{}} _hover={{}} padding={'7'} borderRadius={'sm'} bgColor={'#00e701'} color={'#013e01'}>Sign In</Button>
                        </Stack>
                    </TabPanel>
                </TabPanels>


            </Tabs >
        </Stack>

    )
}

export default AuthModalContent