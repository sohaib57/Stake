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
} from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import BuyCrypto from './BuyCrypto';
import Tip from './Tip';
const WalletModal = () => {
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
        Wallet
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
                  Wallet
                </Text>
              </HStack>
              <ModalCloseButton _hover={{}} color={'white'} />
            </Stack>
          </ModalHeader>
          <ModalBody pt={'2'} bg={'#000000e3'}>
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
                  <Tab
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    minW={'fit-content'}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Buy Crypto</Text>
                  </Tab>
                  <Tab
                    minW={'fit-content'}
                    color={'white'}
                    _selected={{ color: 'white', bg: '#2F4553' }}
                    fontSize={'sm'}
                    fontWeight={'500'}
                  >
                    <Text>Tip</Text>
                  </Tab>
                </TabList>
              </Stack>

              <TabPanels width={'100%'}>
                {/* deposit */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Deposit />
                </TabPanel>
                {/* withdraw */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Withdraw />
                </TabPanel>
                {/* buy crypto */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <BuyCrypto />
                </TabPanel>
                {/* tip */}
                <TabPanel color={'white'} paddingX={'0px !important'}>
                  <Tip />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletModal;
