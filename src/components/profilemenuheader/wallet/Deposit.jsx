import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';


const Deposit = () => {
  return (
    <Stack borderRadius={'lg'} border={'1px solid #2f4553'}>
      <Stack p={'6'}>
        <Heading fontSize={'lg'} fontWeight={'600'} color={'white'}>
          Verification
        </Heading>
        <Text py={'3'} fontSize={'sm'} color={'#b1bad3'}>
          In the event your details change, level one verification can be
          updated at a later date
        </Text>
        <Divider />
        {/* form */}
        <Stack spacing={'3'}>
          {/* username */}
          <Stack direction={'row'}>
            <FormControl isRequired>
              <FormLabel
                fontSize={'sm'}
                fontWeight={'400'}
                color={'white'}
                htmlFor="email"
              >
                First name
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
            <FormControl isRequired>
              <FormLabel
                fontSize={'sm'}
                color={'white'}
                fontWeight={'400'}
                htmlFor="email"
              >
                Last name
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
          </Stack>
          {/* date of birth */}
          <FormControl isRequired>
            <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
              Date of Birth
            </FormLabel>
            <Stack direction={'row'}>
              <NumberInput
                borderColor={'gray'}
                _hover={{ borderColor: 'rgb(47,69,83)' }}
                _focus={{}}
                max={31}
                min={1}
              >
                <NumberInputField
                  placeholder="Date"
                  color={'white'}
                  focusBorderColor="none"
                  bgColor={'#000000f2'}
                  borderRadius={'sm'}
                  fontSize={'sm'}
                  id="amount"
                  fontWeight={'500'}
                />
                <NumberInputStepper
                  h={'26px !important'}
                  w={'18px !important'}
                  marginTop={'7px !important'}
                  marginRight={'5px !important'}
                  backgroundColor={'white !important'}
                  color={'black !important'}
                  borderRadius={'1px !important'}
                >
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput
                borderColor={'gray'}
                _hover={{ borderColor: 'rgb(47,69,83)' }}
                _focus={{}}
                max={12}
                min={1}
              >
                <NumberInputField
                  placeholder="Month"
                  color={'white'}
                  focusBorderColor="none"
                  bgColor={'#000000f2'}
                  borderRadius={'sm'}
                  fontSize={'sm'}
                  id="amount"
                  fontWeight={'500'}
                />
                <NumberInputStepper
                  h={'26px !important'}
                  w={'18px !important'}
                  marginTop={'7px !important'}
                  marginRight={'5px !important'}
                  backgroundColor={'white !important'}
                  color={'black !important'}
                  borderRadius={'1px !important'}
                >
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput
                borderColor={'gray'}
                _hover={{ borderColor: 'rgb(47,69,83)' }}
                _focus={{}}
                max={3000}
                min={1900}
              >
                <NumberInputField
                  placeholder="Year"
                  color={'white'}
                  focusBorderColor="none"
                  bgColor={'#000000f2'}
                  borderRadius={'sm'}
                  fontSize={'sm'}
                  id="amount"
                  fontWeight={'500'}
                />
                <NumberInputStepper
                  h={'26px !important'}
                  w={'18px !important'}
                  marginTop={'7px !important'}
                  marginRight={'5px !important'}
                  backgroundColor={'white !important'}
                  color={'black !important'}
                  borderRadius={'1px !important'}
                >
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Stack>
          </FormControl>
          {/* country */}
          <FormControl isRequired>
            <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
              Country
            </FormLabel>
            <Select
              backgroundColor={'black'}
              borderRadius={'sm'}
              borderColor={'gray'}
            >
              <option
                style={{ backgroundColor: '#000000ed', color: 'white' }}
                value="Pakistan"
              >
                Pakistan
              </option>
              <option
                style={{ backgroundColor: '#000000ed', color: 'white' }}
                value="United Kingdom"
              >
                United Kingdom
              </option>
              <option
                style={{ backgroundColor: '#000000ed', color: 'white' }}
                value="America"
              >
                America
              </option>
            </Select>
          </FormControl>
          {/* residential address */}
          <FormControl isRequired>
            <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
              Residential Address
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
          {/* city & postal code */}
          <Stack direction={'row'}>
            <FormControl isRequired>
              <FormLabel
                fontSize={'sm'}
                fontWeight={'400'}
                color={'white'}
                htmlFor="email"
              >
                City
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
            <FormControl isRequired>
              <FormLabel
                fontSize={'sm'}
                color={'white'}
                fontWeight={'400'}
                htmlFor="email"
              >
                Postal Code
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
          </Stack>
          {/* occupation */}
          <FormControl isRequired>
            <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
              Occupation (Your job/work)
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
            Continue
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Deposit;
