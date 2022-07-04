import React from 'react'
import { Stack, HStack, Button, Divider, Text, Tag, TagLabel, Heading, Select, Input } from '@chakra-ui/react'


const Offers = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>
                {/* Welcome Offer  */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Welcome</Heading>
                        <Text>
                            Welcome offers are only valid for first 24 hours after signing up.
                        </Text>

                        <Divider />
                        <Stack>
                            <Text>Code</Text>
                            <Input
                                w={{ base: '100%', lg: '50%' }}
                                color={'white'}
                                focusBorderColor="none"
                                bgColor={'#000000ed'}
                                borderRadius={'sm'}
                                borderColor={'gray'}
                                size="md"
                                fontWeight={'500'}
                                fontSize={'sm'}
                               
                            />
                        </Stack>
                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            pr={'3'}
                        >

                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Redeem Bonus Drop */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Redeem Bonus Drop</Heading>
                        <Text>
                            Find bonus drop codes on our social media's such as Twitter & Telegram
                        </Text>

                        <Divider />
                        <Stack>
                            <Text>Code</Text>
                            <Input
                                w={{ base: '100%', lg: '50%' }}
                                color={'white'}
                                focusBorderColor="none"
                                bgColor={'#000000ed'}
                                borderRadius={'sm'}
                                borderColor={'gray'}
                                size="md"
                                fontWeight={'500'}
                                fontSize={'sm'}
                                
                            />
                        </Stack>
                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={'row'}
                            justifyContent={'flex-end'}
                            pr={'3'}
                        >
                         
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Offers