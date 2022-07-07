import React from 'react';
import {
  Stack,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  Button,
  Image,
  Select,
} from '@chakra-ui/react';
import { CgNotes } from 'react-icons/cg';
import stats from '../../../assets/images/dataAnalytics.png';
import racing from '../../../assets/images/racing.png';
import givaway from '../../../assets/images/givaway.png';
const StatisticsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        Statistics
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
                <CgNotes color="#B1BAD3" fontSize={'1.2rem'} />
                <Text fontWeight={'500'} fontSize={'md'} color={'white'}>
                  sufyan5788
                </Text>
              </HStack>
              <ModalCloseButton _hover={{}} color={'white'} />
            </Stack>
          </ModalHeader>
          <ModalBody pt={'2'} bg={'#000000e3'}>
            <Stack spacing={'1'} mb={'4 !important'} alignItems={'center'}>
              <Text _hover={{color:'white',cursor:'pointer'}} fontSize={'md'} color={'#b1bad3'}>
                sufyan5788
              </Text>
              <Text fontSize={'xs'} color={'#b1bad3'}>
                Joined on June 14, 2022
              </Text>
            </Stack>

            <Tabs
              defaultIndex={0}
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
                    minW={'fit-content'}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Statistics</Text>
                  </Tab>
                  <Tab
                    minW={'fit-content'}
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Trophies</Text>
                  </Tab>
                  <Tab
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    minW={'fit-content'}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Races</Text>
                  </Tab>
                  <Tab
                    minW={'fit-content'}
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Givaways</Text>
                  </Tab>
                </TabList>
              </Stack>

              <TabPanels width={'100%'}>
                {/* statistics */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Stack alignItems={'center'}>
                    <Image src={stats} w={'15%'} />
                    <Text color={'#b1bad3'}>
                      This user has no visible statistics.
                    </Text>
                  </Stack>
                </TabPanel>
                {/* trophies */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Stack alignItems={'center'} py={'2'}>
                    <Select
                      mb={'5 !important'}
                      w={'fit-content'}
                      fontSize={'sm'}
                      fontWeight={'500'}
                      color={'white'}
                      borderColor={'white !important'}
                      _hover={{ cursor: 'pointer' }}
                    >
                      <option style={{ backgroundColor: 'black' }}>
                        Luckiest
                      </option>
                      <option style={{ backgroundColor: 'black' }}>
                        Biggest
                      </option>
                    </Select>
                    <Image src={stats} w={'15%'} />
                    <Text color={'#b1bad3'}>
                      This user has no visible statistics.
                    </Text>
                  </Stack>
                </TabPanel>
                {/* races */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Stack py={'6'} alignItems={'center'}>
                    <Image src={racing} w={'25%'} />
                    <Text color={'#b1bad3'}>
                      No race participation data available.
                    </Text>
                  </Stack>
                </TabPanel>
                {/* givaways */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Stack py={'4'} alignItems={'center'}>
                    <Image src={givaway} w={'40%'} />
                    <Text color={'#b1bad3'}>No giveaways available</Text>
                    <Stack
                      w={'full'}
                      pt={'6'}
                      direction="row"
                      spacing={4}
                      justifyContent="center"
                    >
                      <Button
                        isDisabled
                        color={'#b1bad3'}
                        fontWeight={'600'}
                        variant="link"
                      >
                        Previous
                      </Button>
                      <Button
                        isDisabled
                        color={'#b1bad3'}
                        fontWeight={'600'}
                        variant="link"
                      >
                        Next
                      </Button>
                    </Stack>
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

export default StatisticsModal;
