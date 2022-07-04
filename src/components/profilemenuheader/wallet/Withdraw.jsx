import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { RiShareBoxFill } from 'react-icons/ri';
const Withdraw = () => {
  return (
    <Stack borderRadius={'lg'} border={'1px solid #2f4553'}>
      <Stack p={'6'}>
        <Heading fontSize={'lg'} fontWeight={'600'} color={'white'}>
          Email
        </Heading>
        <Text py={'3'} fontSize={'sm'} color={'#b1bad3'}>
          In order to withdraw you need to verify your email.
        </Text>
        <Divider />
        {/* email */}
        <FormControl pt={'2'} isRequired>
          <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
            Email
          </FormLabel>
          <Input
            color={'white'}
            focusBorderColor="none"
            bgColor={'#000000ed'}
            borderRadius={'sm'}
            borderColor={'gray'}
            size="md"
            fontWeight={'500'}
            fontSize={'sm'}
          />
        </FormControl>
      </Stack>
      <Divider />
      <Stack
        alignItems={'center'}
        direction={'row'}
        justifyContent={'space-between'}
        px={'6'}
        py={'3'}
      >
        <Button
          rightIcon={<RiShareBoxFill />}
          backgroundColor={'#007bff'}
          _hover={{}}
          fontSize={'md'}
        >
          Open Gmail
        </Button>
        <Stack alignItems={'center'} direction={'row'} spacing={'6'}>
          <Button
            color={'white'}
            fontSize={'md'}
            fontWeight={'500'}
            variant={'link'}
            _hover={{}}
          >
            Resend Email
          </Button>
          <Button
            isDisabled
            _active={{}}
            _focus={{}}
            _hover={{}}
            borderRadius={'md'}
            bgColor={'#00e701'}
            color={'#013e01'}
            p={'4'}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Withdraw;
