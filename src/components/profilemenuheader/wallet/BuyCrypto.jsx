import {
  Button,
  FormControl,
  FormLabel,
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
  Text,
} from '@chakra-ui/react';
import React from 'react';

const BuyCrypto = () => {
  return (
    <Stack spacing={'4'}>
      {/* buy bitcoin */}
      <Text fontSize={'sm'} fontWeight={'500'}> Buy Bitcoin</Text>
      <Stack spacing={'0'} direction={'row'} alignItems={'flex-start'}>
        <FormControl isRequired>
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
              h={'26px !important'}
              w={'15px !important'}
              marginTop={'7px !important'}
              marginRight={'8px !important'}
              backgroundColor={'white !important'}
              color={'black !important'}
              borderRadius={'1px !important'}
            >
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Stack w={'20%'} bgColor={'blackAlpha.600'}>
          <Select
            px="1"
            alignItems={'center'}
            justifyContent={'center'}
            bgColor={'transparent'}
            variant={'unstyled'}
            placeholder="BTC"
            height={'40px'}
            borderRadius={'sm'}
          >
            <option
              style={{ backgroundColor: 'black', color: 'white' }}
              value="option1"
            >
              BTC
            </option>
            <option
              style={{ backgroundColor: 'black', color: 'white' }}
              value="option2"
            >
              ETH
            </option>
            <option
              style={{ backgroundColor: 'black', color: 'white' }}
              value="option3"
            >
              LTC
            </option>
          </Select>
        </Stack>
      </Stack>
      {/* pay with usd */}
      <Text fontSize={'sm'} fontWeight={'500'}> Pay with USD</Text>
      <Stack spacing={'0'} direction={'row'} alignItems={'flex-start'}>
        <FormControl isRequired>
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
              h={'26px !important'}
              w={'15px !important'}
              marginTop={'7px !important'}
              marginRight={'8px !important'}
              backgroundColor={'white !important'}
              color={'black !important'}
              borderRadius={'1px !important'}
            >
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Stack w={'20%'} bgColor={'blackAlpha.600'}>
          <Select
            px="1"
            alignItems={'center'}
            justifyContent={'center'}
            bgColor={'transparent'}
            variant={'unstyled'}
            placeholder="USD"
            height={'40px'}
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
        </Stack>
      </Stack>
      <Button
        isDisabled
        _active={{}}
        _focus={{}}
        _hover={{}}
        borderRadius={'md'}
        bgColor={'#00e701'}
        color={'#013e01'}
        p={'7'}
      >
        Buy via MoonPay
      </Button>
    </Stack>
  );
};

export default BuyCrypto;
