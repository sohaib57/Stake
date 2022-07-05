import React from 'react'
import {
    Button,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Center
} from '@chakra-ui/react';

const VerifyLevel2 = () => {
    return (
        <Stack borderRadius={'lg'} border={'1px solid #2f4553'}>
            <Stack p={'6'}>
                <Heading fontSize={'lg'} fontWeight={'600'} color={'white'}>
                    Verification
                </Heading>
                <Text py={'3'} fontSize={'sm'} color={'#b1bad3'}>
                    Please complete level one verification first.
                </Text>
                <Text py={'3'} fontSize={'sm'} color={'#b1bad3'}>
                    Please upload your proof of identity. All documents must be laying on a flat surface with all 4 corners inside the frame. All information should be clear and identifiable.
                </Text>
                <Divider />
                {/* form */}
                <Stack spacing={'3'}>

                    {/* Proof of Identity */}
                    <FormControl isRequired>
                        <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                            Proof of Identity (Front)
                        </FormLabel>
                        <Input
                            color={'white'}
                            focusBorderColor="none"
                            bgColor={'#000000e3'}
                            borderRadius={'sm'}
                            borderColor={'gray'}
                            size="md"
                            fontWeight={'500'}
                            fontSize={'sm'}
                        />
                    </FormControl>

                    {/*  Proof of Identity */}
                    <FormControl isRequired>
                        <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                            Proof of Identity (Back)
                        </FormLabel>
                        <Input
                            color={'white'}
                            focusBorderColor="none"
                            bgColor={'#000000e3'}
                            borderRadius={'sm'}
                            borderColor={'gray'}
                            size="md"
                            fontWeight={'500'}
                            fontSize={'sm'}
                        />
                    </FormControl>
                    <Center>
                        Followsing file types are accepted: .png, .jpg, .pdf
                    </Center>
                </Stack>
            </Stack>
            <Divider />
            <Stack px={'6'} py={'3'}>
                <Stack
                    alignItems={'center'}
                    direction={'row'}
                    justifyContent={'space-between'}
                >
                    <Text fontSize={'sm'} color={'#b1bad3'}>
                        All data is safely stored and encrypted.
                    </Text>
                    <Button
                        _active={{}}
                        _focus={{}}
                        _hover={{}}
                        padding={'7'}
                        borderRadius={'md'}
                        bgColor={'#00e701'}
                        color={'#013e01'}
                        p={'6'}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default VerifyLevel2