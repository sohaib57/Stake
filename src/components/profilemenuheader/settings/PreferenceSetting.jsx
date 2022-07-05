import React from 'react'
import { Switch, Img, Stack, Heading, Text, Input, Divider, Button, ButtonGroup, IconButton, HStack } from '@chakra-ui/react'

const PreferenceSetting = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>

                {/* Privacy */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Privacy</Heading>
                        <Text>
                            User privacy is one of the core values of Stake. These settings allow you to be completely anonymous from the rest of the players.
                        </Text>
                        <Divider />
                        <Stack>
                            <Stack direction={{ base: 'column', lg: 'row' }} alignItems={'flex-start'}>
                                <Switch size='md' />
                                <Stack>
                                    <Text>
                                        Enable Ghost Mode
                                    </Text>
                                    <Text>
                                        Your bets won't appear in public bet feed and bet preview
                                    </Text>
                                </Stack>
                            </Stack>

                            <Stack direction={{ base: 'column', lg: 'row' }} alignItems={'flex-start'}>
                                <Switch size='md' />
                                <Stack>
                                    <Text>
                                        Enable Ghost Mode
                                    </Text>
                                    <Text>
                                        Your bets won't appear in public bet feed and bet preview
                                    </Text>
                                </Stack>
                            </Stack>

                            <Stack direction={{ base: 'column', lg: 'row' }} alignItems={'flex-start'}>
                                <Switch size='md' />
                                <Stack>
                                    <Text>
                                        Enable Ghost Mode
                                    </Text>
                                    <Text>
                                        Your bets won't appear in public bet feed and bet preview
                                    </Text>
                                </Stack>
                            </Stack>


                        </Stack>

                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            pr={'3'}
                        >
                            <Text pl={'4'} color={'white'} >
                                Please allow up to 30 seconds for update to take effect.
                            </Text>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                {/* Community */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Community</Heading>
                        <Divider />
                        <Stack>
                            <Stack direction={{ base: 'column', lg: 'row' }} alignItems={'flex-start'}>
                                <Switch size='md' />
                                <Stack>
                                    <Text>
                                        Exclude from rain
                                    </Text>
                                    <Text>
                                        Prevents you from receiving a rain in chat
                                    </Text>
                                </Stack>
                            </Stack>
                        </Stack>

                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            pr={'3'}
                        >
                            <Text pl={'4'} color={'white'} >
                                Please allow up to 30 seconds for update to take effect.
                            </Text>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Self Exclusion */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Community</Heading>
                        <Text>
                            Need a break from Stake? To start the automated self exclusion process, please click the button below to receive confirmation instructions via email.
                        </Text>
                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={{ base: 'column', lg: 'row' }}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            pr={'3'}
                        >
                            <Text pl={'4'} color={'white'} >
                                Learn more about Self Exclusion
                            </Text>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Request Self Exclusion
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default PreferenceSetting