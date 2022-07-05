import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { SiBitcoinsv } from 'react-icons/si';
const Tip = () => {
  return (
    <Stack>
      <HStack justifyContent={'center'} spacing={'4'}>
        <Text fontSize={'md'} fontWeight={'600'}>
          Currency
        </Text>
        <Select
          w={{base:'50%',md:'25%'}}
          bgColor={'black'}
          placeholder="USD"
          borderRadius={'sm'}
        >
          <option
            style={{ backgroundColor: 'black', color: 'white' }}
            value="option1"
          >
            USD
          </option>
          <option
            style={{ backgroundColor: 'black', color: 'white' }}
            value="option2"
          >
            EUR
          </option>
          <option
            style={{ backgroundColor: 'black', color: 'white' }}
            value="option3"
          >
            JPY
          </option>
        </Select>
      </HStack>
      <FormControl isRequired>
        <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
          Name
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
      <HStack marginBottom={'0 !important'} justifyContent={'space-between'}>
        <Text fontWeight={'600'} fontSize={'sm'}>
          Amount
        </Text>
        <Text fontWeight={'600'} fontSize={'sm'}>
          $0.00
        </Text>
      </HStack>

      <Stack
        marginTop={'1 !important'}
        spacing={'0'}
        direction={'row'}
        alignItems={'flex-start'}
      >
        <FormControl isRequired>
          <InputGroup>
            <NumberInput
              placeholder="0"
              size={'md'}
              w={'100%'}
              borderColor={'blackAlpha.600'}
              _focus={{}}
              max={1000000}
              min={0.00151739}
            >
              <NumberInputField
                color={'white'}
                focusBorderColor="none"
                bgColor={'#000000f2'}
                borderRadius={'sm'}
                fontSize={'sm'}
                id="amount"
                fontWeight={'600'}
              />
              <NumberInputStepper
                h={'23px !important'}
                w={'13px !important'}
                marginTop={'9px !important'}
                marginRight={'35px !important'}
                backgroundColor={'white !important'}
                color={'black !important'}
                borderRadius={'1px !important'}
              >
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <InputRightElement
              children={<SiBitcoinsv color="#F7931A" fontSize={'1.2rem'} />}
            />
          </InputGroup>
        </FormControl>
        <Stack w={'20%'} bgColor={'blackAlpha.600'}>
          <Button
            _hover={{}}
            bgColor={'gray'}
            color={'white'}
            borderRadius={'sm'}
            fontSize={'md'}
            fontWeight={'600'}
          >
            Min
          </Button>
        </Stack>
      </Stack>
      <HStack marginTop={'5 !important'} spacing={'4'}>
        <Switch colorScheme={'green'} size="md" />
        <Stack spacing={'0.8'}>
          <Text fontSize={'md'} fontWeight={'500'}>
            Public
          </Text>
          <Text color={'#b1bad3'} fontSize={'sm'}>
            Tip will appear in global chat as a message
          </Text>
        </Stack>
      </HStack>
      <Button
        marginTop={'5 !important'}
        _active={{}}
        _focus={{}}
        _hover={{}}
        borderRadius={'md'}
        bgColor={'#00e701'}
        color={'#013e01'}
        p={'7'}
      >
        Send Tip
      </Button>
    </Stack>
  );
};

export default Tip;
