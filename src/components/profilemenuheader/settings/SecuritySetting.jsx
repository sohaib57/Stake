import React, { useState } from 'react'
import { Img, Stack, Heading, Text, Input, Divider, Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { AiFillCopy } from 'react-icons/ai'
import BarCode from '../../../assets/images/BarCode.png'


const SecuritySetting = () => {
    const [text, setText] = useState('K5RGM63TN5NDISRPGVYXS6TNIEZXU3LZEM7XEMRZHRUEG2LHGNQQ')

    const copy = async (e) => {

        e.preventDefault();

        await navigator.clipboard.writeText(text);
    }

    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>

                {/* Password  */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Password</Heading>
                        <Stack>
                            <Text>Old Password</Text>
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
                                placeholder="sohaibbutt57@gmail.com"
                            />
                            <Text>New Password</Text>
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
                                placeholder="sohaibbutt57@gmail.com"
                            />
                            <Text>Confirm Password</Text>
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
                                placeholder="sohaibbutt57@gmail.com"
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
                                Save
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>


                {/* Two Factor */}

                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Two Factor </Heading>

                        <Text>
                            To keep your account extra secure leave a two factor authentication enabled.
                        </Text>
                        <Divider />

                        <ButtonGroup size='md' isAttached variant='outline'>
                            <Button>K5RGM63TN5NDISRPGVYXS6TNIEZXU3LZEM7XEMRZHRUEG2LHGNQQ</Button>
                            <IconButton onClick={copy} icon={<AiFillCopy />} />
                        </ButtonGroup>

                        <Text>
                            Don't let anyone see this!
                        </Text>
                        <Img boxSize={'90px'} src={BarCode} />

                        <Stack>

                            <Text>Password</Text>
                            <Input
                                w={{ base: '100%', lg: '50%' }} s
                                color={'white'}
                                focusBorderColor="none"
                                bgColor={'#000000ed'}
                                borderRadius={'sm'}
                                borderColor={'gray'}
                                size="md"
                                fontWeight={'500'}
                                fontSize={'sm'}
                                placeholder="sohaibbutt57@gmail.com"
                            />
                            <Text>Two Factor Code</Text>
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
                                placeholder="sohaibbutt57@gmail.com"
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
                                Enable
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

            </Stack>
        </Stack>
    )
}

export default SecuritySetting