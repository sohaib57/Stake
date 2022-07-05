import React, { useState } from 'react';
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
  Switch,
  Text,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  useDisclosure,
} from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const VaultModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toggle, setToggle] = useState(false);
  const iconToggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <>
      <Text
        textAlign={'center'}
        _hover={{ cursor: 'pointer' }}
        fontWeight={'500'}
        fontSize={'sm'}
        color={'black'}
        onClick={onOpen}
      >
        Vault
      </Text>
      <Modal
        size={'lg'}
        isCentered
        scrollBehavior="inside"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={'#000000e3'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <HStack>
                <FaWallet color="#B1BAD3" fontSize={'0.9rem'} />
                <Text fontWeight={'500'} fontSize={'md'} color={'white'}>
                  Vault
                </Text>
              </HStack>
              <ModalCloseButton _hover={{}} color={'white'} />
            </Stack>
          </ModalHeader>
          <ModalBody p={'0 !important'} pt={'2'} bg={'#000000e3'}>
            <Tabs
              defaultIndex={0}
              width={'100%'}
              variant="soft-rounded"
              colorScheme="green"
            >
              <Stack px={'6'} justifyContent={'center'} direction={'row'}>
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
                    minW={'fit-content'}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Deposit</Text>
                  </Tab>
                  <Tab
                    minW={'fit-content'}
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Withdraw</Text>
                  </Tab>
                </TabList>
              </Stack>
              <TabPanels width={'100%'}>
                {/* deposit */}
                <TabPanel color={'white'} padding={'0px !important'}>
                  <Stack px={'6'}>
                    <HStack
                      mt={'5 !important'}
                      justifyContent={'center'}
                      spacing={'4'}
                    >
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
                    <HStack
                      marginBottom={'0 !important'}
                      justifyContent={'space-between'}
                    >
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
                            children={
                              <SiBitcoinsv
                                color="#F7931A"
                                fontSize={'1.2rem'}
                              />
                            }
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
                    <Button
                      marginTop={'5 !important'}
                      _active={{}}
                      _focus={{}}
                      _hover={{}}
                      borderRadius={'sm'}
                      bgColor={'#00e701'}
                      color={'#013e01'}
                      p={'7'}
                    >
                      Deposit to Vault
                    </Button>
                  </Stack>
                  <Stack
                    spacing={'4'}
                    alignItems={'center'}
                    marginTop={'5 !important'}
                    px={'12'}
                    py={'6'}
                    bgColor={'black'}
                  >
                    <Text fontSize={'sm'} color={'#b1bad3'}>
                      Improve your account security with Two-Factor
                      Authentication
                    </Text>
                    <Button fontSize={'md'} w={{base:'50%',md:'25%'}} colorScheme={'blue'}>
                      Enable 2FA
                    </Button>
                  </Stack>
                </TabPanel>
                {/* withdraw */}
                <TabPanel color={'white'} padding={'0px !important'}>
                  <Stack px={'6'}>
                    <HStack
                      mt={'5 !important'}
                      justifyContent={'center'}
                      spacing={'4'}
                    >
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
                    <HStack
                      marginBottom={'0 !important'}
                      justifyContent={'space-between'}
                    >
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
                            children={
                              <SiBitcoinsv
                                color="#F7931A"
                                fontSize={'1.2rem'}
                              />
                            }
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
                    {/* password */}
                    <FormControl isRequired>
                      <FormLabel
                        fontSize={'sm'}
                        fontWeight={'400'}
                        htmlFor="email"
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
                            <AiFillEye
                              color={'white.300'}
                              fontSize={'1.2rem'}
                            />
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
                      marginTop={'5 !important'}
                      _active={{}}
                      _focus={{}}
                      _hover={{}}
                      borderRadius={'sm'}
                      bgColor={'#00e701'}
                      color={'#013e01'}
                      p={'7'}
                    >
                      Withdraw from Vault
                    </Button>
                  </Stack>
                  <Stack
                    spacing={'4'}
                    alignItems={'center'}
                    marginTop={'5 !important'}
                    px={'12'}
                    py={'6'}
                    bgColor={'black'}
                  >
                    <Text fontSize={'sm'} color={'#b1bad3'}>
                      Improve your account security with Two-Factor
                      Authentication
                    </Text>
                    <Button fontSize={'md'} w={{base:'50%',md:'25%'}} colorScheme={'blue'}>
                      Enable 2FA
                    </Button>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VaultModal;
