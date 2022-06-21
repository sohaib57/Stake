import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BsCardChecklist } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';
import { IoTimer } from 'react-icons/io5';
import { AiFillCheckCircle } from 'react-icons/ai';

const Bets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <VStack justifyContent={'center'} onClick={onOpen} ref={btnRef}>
        <BsCardChecklist color="white" size={15} />
        <Text
          color="white"
          fontWeight={'700'}
          fontSize={'12px'}
          mt={'0 !important'}
        >
          Bets
        </Text>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Stack bgColor={'#0f212e'}>
            <DrawerCloseButton color={'white'} />
            <DrawerHeader
              p={1}
              borderBottom={'1px solid #071824'}
              boxShadow={'lg'}
            >
              <Stack>
                <Select
                  border={'none'}
                  width={'fit-content'}
                  fontSize={'sm'}
                  fontWeight={'700'}
                  pl={2}
                  color={'white'}
                  bg={'transparent'}
                  className="select"
                  _focusVisible={{
                    boxShadow: 'none',
                  }}
                >
                  <option value="option1">My Bets</option>
                  <option value="option2">Bet Slip</option>
                </Select>
              </Stack>
            </DrawerHeader>
          </Stack>

          <DrawerBody bgColor={'#0f212e'}>
            <Stack pt={'8'} className="tabs">
              <Tabs variant="soft-rounded" colorScheme="green">
                <TabList
                  marginInline={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  mb={3}
                  overflowX={'auto'}
                  maxW={'fit-content'}
                  borderRadius={'full'}
                  bgColor={'#1a2c38'}
                >
                  <Stack direction={'row'} p={'2'}>
                    <Tab
                      color={'white'}
                      _selected={{ color: 'white', bg: '#2F4553' }}
                      w={'max-content'}
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      <HStack spacing={'2'}>
                        <IoTimer />
                        <Text>Active</Text>
                      </HStack>
                    </Tab>
                    <Tab
                      w={'max-content'}
                      color={'white'}
                      _selected={{ color: 'white', bg: '#2F4553' }}
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      <HStack spacing={'2'}>
                        <AiFillCheckCircle />
                        <Text>Settled</Text>
                      </HStack>
                    </Tab>
                  </Stack>
                </TabList>
                <TabPanels borderTop={'1px solid #213743'}>
                  <TabPanel>
                    <Stack
                      px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                      textAlign={'center'}
                    >
                      <Text
                        color={'#b1bad3'}
                        fontSize={'sm'}
                        fontWeight={'600'}
                      >
                        Bet Slip is Empty
                      </Text>
                      <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                        Start Betting Now!
                      </Text>
                    </Stack>
                  </TabPanel>
                  <TabPanel>
                    <Stack
                      px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                      textAlign={'center'}
                    >
                      <Text
                        color={'#b1bad3'}
                        fontSize={'sm'}
                        fontWeight={'600'}
                      >
                        Bet Slip is Empty
                      </Text>
                      <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                        Start Betting Now!
                      </Text>
                    </Stack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Stack>
          </DrawerBody>
          <DrawerFooter bgColor={'#213743'}>
            <Button
              width={'100%'}
              bgColor={'#2f4553'}
              color={'#d5dceb'}
              _active={{
                bgColor: '#2f4553',
              }}
              _hover={{
                bgColor: '#2f4553',
              }}
            >
              View All
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Bets;
