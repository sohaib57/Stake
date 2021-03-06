import React, { useState } from 'react';
import {
  Stack,
  Img,
  Select,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';
import { Layout } from 'antd';
import Footer from './Footer';
import Sidebar from './Sidebar';
import cryptoBox from '../assets/images/cryptoBox.jpg';
import 'antd/dist/antd.css';
import './style.css';
import MobileHeader from './MobileHeader';
import AuthModalContent from './AuthModalContent';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaHeadset } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { SiGooglechat } from 'react-icons/si';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { TbAffiliate, TbReceipt } from 'react-icons/tb';
import { GiBasketballBall } from 'react-icons/gi';
import { HiOutlineLogout } from 'react-icons/hi';
import { MdNotifications, MdSettings } from 'react-icons/md';
import {
  BsCardChecklist,
  BsChatDotsFill,
  BsFillTrophyFill,
} from 'react-icons/bs';
import SearchModel from './SearchModel';
import StatisticsModal from '../components/profilemenuheader/statistics/StatisticsModal';
import WalletModal from '../components/profilemenuheader/wallet/WalletModal';
import VaultModal from '../components/profilemenuheader/vault/VaultModal';
import WeeklyGiveAwayModal from '../components/promotions/WeeklyGiveAwayModal';
import Chat from './Chat';
import Bets from './Bets';
import SelectCurrency from '../components/ui/select/SelectCurrency'
const { Header, Content } = Layout;

const LayoutComp = ({ children }) => {
  const [index, setIndex] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRevocationModalOpen,
    onOpen: onOpenRevocationModal,
    onClose: onCloseRevocationModal,
  } = useDisclosure();
  const {
    isOpen: isOpenLogout,
    onOpen: onOpenLogout,
    onClose: onCloseLogout,
  } = useDisclosure();
  const { onOpen: onOpenStatistics } = useDisclosure();
  const nav = useNavigate();
  return (
    <Layout
      style={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Sidebar />

      <Layout className="site-layout">
        <Header
          className=".site-header-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Stack
            margin={'0px !important'}
            direction={'row'}
            justifyContent={'space-between'}
          >
            <Stack pl={{ md: '8' }}>
              <Img
                src={cryptoBox}
                cursor={'pointer'}
                height={'59px'}
                alt="stake"
                onClick={() => nav('/')}
              />
            </Stack>
            <Stack pt={3}>
              <HStack w={'fit-content'} spacing={0} lineHeight={1}>
                <SelectCurrency/>
                <Button
                  fontSize={'sm'}
                  // borderRightRadius={'5px'}
                  // borderLeftRadius={'none'}
                  borderRadius={'none'}
                  bgColor={'#007bff'}
                  _hover={{
                    bgColor: '#007bff',
                  }}
                  _active={{
                    bgColor: '#007bff',
                  }}
                  color={'white'}
                >
                  Wallet
                </Button>
              </HStack>
            </Stack>

            <Stack
              direction={'row'}
              spacing={5}
              alignItems={'center'}
              pr={{ base: '2', md: '10' }}
            >
              <SearchModel />

              {/* <Stack spacing={'4'} direction={'row'}>
                <Button onClick={() => {
                  onOpen()
                  setIndex(1)
                }} color={'white'} fontSize={'md'} fontWeight={'700'} variant={'link'} _hover={{}}>Sign In</Button>
                <Button onClick={() => {
                  onOpen()
                  setIndex(0)
                }} size={'md'} color={'white'} fontSize={'md'} fontWeight={'700'} colorScheme={'blue'} _hover={{}}>Register</Button>
              </Stack> */}

              <Stack alignSelf={'center'}>
                <Menu>
                  <MenuButton
                    as={Button}
                    minW={'0 !important'}
                    p={'0 !important'}
                    bgColor={'transparent'}
                    _hover={{
                      bgColor: 'transparent',
                    }}
                    _active={{
                      bgColor: 'transparent',
                    }}
                  >
                    <FaUserAlt size={15} color={'white'} />
                  </MenuButton>
                  <MenuList lineHeight={6} minW={'fit-content'}>
                    <MenuItem>
                      <WalletModal />
                    </MenuItem>
                    <MenuItem>
                      <VaultModal />
                    </MenuItem>
                    <MenuItem onClick={onOpenRevocationModal}>
                      <HStack>
                        <BsFillTrophyFill />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          VIP
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem onClick={() => nav('/affiliate')}>
                      <HStack>
                        <TbAffiliate />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Affiliate
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <StatisticsModal />
                    </MenuItem>
                    <MenuItem onClick={() => nav('/transactions')}>
                      <HStack>
                        <BsCardChecklist />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Transactions
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem onClick={() => nav('/sports/my-bets')}>
                      <HStack>
                        <GiBasketballBall />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Sport Bets
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <MdNotifications />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Notifications
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem onClick={() => nav('/settings')}>
                      <HStack>
                        <MdSettings />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Settings
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <FaHeadset />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Live Support
                        </Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem onClick={() => onOpenLogout()}>
                      <HStack>
                        <HiOutlineLogout />
                        <Text
                          textAlign={'center'}
                          fontWeight={'600'}
                          fontSize={'sm'}
                          color={'black'}
                        >
                          Logout
                        </Text>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
              <Stack>
                <Menu display={{ base: 'none', lg: 'inherit' }}>
                  <MenuButton
                    display={{ base: 'none', lg: 'inherit' }}
                    p={'0 !important'}
                    minW={'0 !important'}
                    as={Button}
                    bgColor={'transparent'}
                    _hover={{
                      bgColor: 'transparent',
                    }}
                    _active={{
                      bgColor: 'transparent',
                    }}
                  >
                    <SiGooglechat size={15} color={'white'} />
                  </MenuButton>
                  <MenuList lineHeight={6} minW={'fit-content'}>
                    <MenuItem>
                      <Chat />
                    </MenuItem>
                    <MenuItem>
                      <Bets />
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Stack>
          </Stack>
          {/* Auth Modal */}
          <Modal
            scrollBehavior="inside"
            size={'lg'}
            isCentered
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton _hover={{}} color={'white'} />
              <ModalBody pt={'4'} bg={'#000000ed'}>
                <AuthModalContent i={index} />
              </ModalBody>
            </ModalContent>
          </Modal>
          {/* VIP Modal */}
          <Modal
            onClose={onCloseRevocationModal}
            isOpen={isRevocationModalOpen}
            scrollBehavior={'inside'}
            size={'lg'}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader bg={'#000000f2'}>
                <Stack direction={'row'} alignItems={'center'}>
                  <RiContactsBook2Fill color={'#B1BAD3'} />
                  <Text color={'white'}> VIP </Text>
                </Stack>
              </ModalHeader>
              <ModalCloseButton bg={'white'} color={'black'} />
              <ModalBody bg={'#000000ed'}>
                <WeeklyGiveAwayModal />
              </ModalBody>
              <ModalFooter bg={'#000000f2'} justifyContent={'center'}>
                <Text color={'white'}>Learn more about being a Stake VIP</Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* logout modal */}
          <Modal
            isCentered
            onClose={onCloseLogout}
            isOpen={isOpenLogout}
            scrollBehavior={'inside'}
            size={'lg'}
          >
            <ModalOverlay />
            <ModalContent bg={'#071824'}>
              <ModalHeader>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <HStack>
                    <FiLogOut color="#B1BAD3" fontSize={'1.1rem'} />
                    <Text fontWeight={'500'} fontSize={'md'} color={'white'}>
                      Logout
                    </Text>
                  </HStack>
                  <ModalCloseButton _hover={{}} color={'white'} />
                </Stack>
              </ModalHeader>
              <ModalBody py={'6'}>
                <Stack>
                  <Text textAlign={'center'} fontSize={'sm'} color={'#babad3'}>
                    Don???t forget to check out our huge selection of casino and
                    sports promotions before you leave!
                  </Text>
                  <Button
                    onClick={() => {
                      onOpen();
                      setIndex(1);
                      onCloseLogout();
                    }}
                    marginTop={'5 !important'}
                    _active={{}}
                    _focus={{}}
                    _hover={{}}
                    borderRadius={'sm'}
                    bgColor={'#fe2247'}
                    color={'white'}
                    p={'5'}
                  >
                    Logout
                  </Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Header>
        <Content className="site-layout-background">
          <Stack
            style={{
              height: 'calc(100vh - 60px)',
            }}
            overflowY={'scroll'}
          >
            {children}
            <Footer />
            <MobileHeader />
          </Stack>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComp;
