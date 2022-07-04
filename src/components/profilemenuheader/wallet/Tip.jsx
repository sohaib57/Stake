import {
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
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {SiBitcoinsv} from 'react-icons/si'
const Tip = () => {
  return (
    <Stack>
      <HStack justifyContent={'center'} spacing={'4'}>
        <Text fontSize={'md'} fontWeight={'600'}>
          Currency
        </Text>
        <Select
          w={'25%'}
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
      <Stack spacing={'0'} direction={'row'} alignItems={'flex-start'}>
        <Text>Amount</Text>
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
          <InputRightElement children={<SiBitcoinsv color='#F7931A'/>}/>
          </InputGroup>
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
    </Stack>
  );
};

export default Tip;
