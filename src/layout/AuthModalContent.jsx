import React, { useState } from 'react';
import {
  chakra,
  Stack,
  TabList,
  Tab,
  Text,
  Tabs,
  TabPanel,
  TabPanels,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
  Divider,
} from '@chakra-ui/react';
import { BsFillChatDotsFill, BsSearch, BsTwitch } from 'react-icons/bs';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ForgotPasswordModal from './ForgotPasswordModal';

const AuthModalContent = ({ i }) => {
  const [toggle, setToggle] = useState(false);
  const iconToggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <Stack>
      <Tabs
        defaultIndex={i}
        width={'100%'}
        variant="soft-rounded"
        colorScheme="green"
      >
        <Stack width={'100%'} direction={'row'} justifyContent={'center'}>
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
              <Text>Register</Text>
            </Tab>
            <Tab
              w={'max-content'}
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <Text>Sign In</Text>
            </Tab>
          </TabList>
        </Stack>

        <TabPanels width={'100%'}>
          {/* Register */}
          <TabPanel color={'white'} padding={'0px !important'}>
            <Stack spacing={'4'} px={'2'} py={'4'}>
              {/* email */}
              <FormControl isRequired>
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
              {/* username */}
              <FormControl isRequired>
                <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                  Username
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
              {/* password */}
              <FormControl isRequired>
                <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                  Password
                </FormLabel>
                <InputGroup
                  borderColor={'gray'}
                  _hover={{ borderColor: 'rgb(47,69,83)' }}
                >
                  <InputRightElement
                    onClick={() => iconToggler()}
                    _hover={{ cursor: 'pointer' }}
                    // pointerEvents=""
                    borderRadius={'full'}
                    bgColor={'transparent'}
                  >
                    {toggle ? (
                      <AiFillEye color={'white.300'} fontSize={'1.2rem'} />
                    ) : (
                      <AiFillEyeInvisible
                        color={'white.300'}
                        fontSize={'1.2rem'}
                      />
                    )}
                  </InputRightElement>
                  <Input
                    color={'white'}
                    focusBorderColor="none"
                    bgColor={'#000000f2'}
                    borderRadius={'sm'}
                    size="md"
                    fontSize={'sm'}
                  />
                </InputGroup>
              </FormControl>
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
              {/* code */}
              <FormControl isRequired>
                <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                  Code (Optional)
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
              <Checkbox
                size={'md'}
                _hover={{ cursor: 'pointer' }}
                colorScheme=""
                defaultChecked
              >
                <Text color={'#A7B0C8'} fontSize={'xs'}>
                  By clicking the checkbox, you are indicating that you have
                  read and acknowledge the {' '}
                  <chakra.span _hover={{ cursor: 'pointer', color: 'white' }}>
                     Terms & Conditions{' '}
                  </chakra.span>
                </Text>
              </Checkbox>
              {/* play now */}
              <Button
                _active={{}}
                _focus={{}}
                _hover={{}}
                padding={'7'}
                borderRadius={'sm'}
                bgColor={'#00e701'}
                color={'#013e01'}
              >
                Play Now
              </Button>
            </Stack>
            <Stack
              px={'2!important'}
              pb={'3'}
              flexDirection={'column'}
              justifyContent={'center'}
              spacing={'3'}
            >
               <Stack px={'10'} alignItems={'baseline'} direction={'row'} w={'100%'} textAlign={'center'}>
                <Divider borderColor={'gray'}/>
                <Text color={'white'} marginBottom={'0 !important'}>
                  OR
                </Text>
                <Divider borderColor={'gray'}/>
              </Stack>
              <Stack justifyContent={'space-between'} direction={'row'}>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <FaFacebookF color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <FaGoogle color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <BsFillChatDotsFill color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <BsTwitch color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
              </Stack>
              <Text
                px={'7'}
                textAlign={'center'}
                color={'#A7B0C8'}
                fontSize={'xs'}
                fontWeight={'500'}
              >
                This site is protected by hCaptcha and the hCaptcha{' '}
                <chakra.span _hover={{ cursor: 'pointer', color: 'white' }}>
                  Privacy Policy{' '}
                </chakra.span>
                and{' '}
                <chakra.span _hover={{ cursor: 'pointer', color: 'white' }}>
                  Terms of Service
                </chakra.span>{' '}
                apply.
              </Text>
            </Stack>
          </TabPanel>
          {/* Sign In */}
          <TabPanel color={'white'} padding={'0px !important'}>
            <Stack spacing={'4'} px={'2'} py={'4'}>
              <FormControl isRequired>
                <FormLabel fontSize={'sm'} fontWeight={'400'} htmlFor="email">
                  Email or Username
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
              <FormControl isRequired>
                <FormLabel
                  fontSize={'md'}
                  fontWeight={'400'}
                  htmlFor="password"
                >
                  Password
                </FormLabel>
                <InputGroup
                  borderColor={'gray'}
                  _hover={{ borderColor: 'rgb(47,69,83)' }}
                >
                  <InputRightElement
                    onClick={() => iconToggler()}
                    _hover={{ cursor: 'pointer' }}
                    // pointerEvents=""
                    borderRadius={'full'}
                    bgColor={'transparent'}
                  >
                    {toggle ? (
                      <AiFillEye color={'white.300'} fontSize={'1.2rem'} />
                    ) : (
                      <AiFillEyeInvisible
                        color={'white.300'}
                        fontSize={'1.2rem'}
                      />
                    )}
                  </InputRightElement>
                  <Input
                    color={'white'}
                    focusBorderColor="none"
                    bgColor={'#000000f2'}
                    borderRadius={'sm'}
                    size="md"
                    fontSize={'sm'}
                  />
                </InputGroup>
              </FormControl>
              <Button
                _active={{}}
                _focus={{}}
                _hover={{}}
                padding={'7'}
                borderRadius={'sm'}
                bgColor={'#00e701'}
                color={'#013e01'}
              >
                Sign In
              </Button>
            </Stack>
            <Stack
              px={'2!important'}
              pb={'3'}
              flexDirection={'column'}
              justifyContent={'center'}
              spacing={'3'}
            >
              <Stack px={'10'} alignItems={'baseline'} direction={'row'} w={'100%'} textAlign={'center'}>
                <Divider borderColor={'gray'}/>
                <Text color={'white'} marginBottom={'0 !important'}>
                  OR
                </Text>
                <Divider borderColor={'gray'}/>
              </Stack>
              <Stack justifyContent={'space-between'} direction={'row'}>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <FaFacebookF color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <FaGoogle color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <BsFillChatDotsFill color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
                <Stack
                  _hover={{ cursor: 'pointer', opacity: '0.7' }}
                  borderRadius={'sm'}
                  bgColor={'#2F4553'}
                  w={'25%'}
                  alignItems={'center'}
                  py={'3'}
                >
                  <BsTwitch color="#FFFFFF" fontSize={'1.2rem'} />
                </Stack>
              </Stack>
              <Stack>
                <ForgotPasswordModal />
              </Stack>
              <Text
                px={'7'}
                textAlign={'center'}
                color={'#A7B0C8'}
                fontSize={'xs'}
                fontWeight={'500'}
              >
                This site is protected by hCaptcha and the hCaptcha{' '}
                <chakra.span _hover={{ cursor: 'pointer', color: 'white' }}>
                  Privacy Policy{' '}
                </chakra.span>
                and{' '}
                <chakra.span _hover={{ cursor: 'pointer', color: 'white' }}>
                  Terms of Service
                </chakra.span>{' '}
                apply.
              </Text>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default AuthModalContent;
