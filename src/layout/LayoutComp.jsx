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
} from '@chakra-ui/react';

import { Layout } from 'antd';
import Footer from './Footer';
import Sidebar from './Sidebar';
import cryptoBox from '../assets/images/cryptoBox.jpg';
import 'antd/dist/antd.css';
import './style.css';
import MobileHeader from './MobileHeader';
import { useNavigate } from 'react-router-dom';
import AuthModalContent from './AuthModalContent';
import ForgotPasswordModal from './ForgotPasswordModal';

const { Header, Content } = Layout;

const LayoutComp = ({ children }) => {
  const styles = {
    global: {
      '.chakra-divider': {
        borderColor: 'red !important',
        opacity: 1,
      },
    },
  };
  const [index, setIndex] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Stack>
              <HStack spacing={0}>
                <Select
                  borderLeftRadius={'5px'}
                  borderRightRadius={'none'}
                  bgColor={'#0C0C0C'}
                  border={'none'}
                  color={'white'}
                  _focusVisible={{
                    boxShadow: 'none',
                  }}
                >
                  <option value="option1" className="select">
                    0.00000000
                  </option>
                  <option value="option2" className="select">
                    0.00000001
                  </option>
                  <option value="option3" className="select">
                    0.00000002
                  </option>
                </Select>
                <Button
                  fontSize={'sm'}
                  borderRightRadius={'5px'}
                  borderLeftRadius={'none'}
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
              {/* <HStack display={{ base: 'none', md: 'inherit', lg: 'inherit' }}>
                <BsSearch color="white" size={15} />
                <Text
                  color="white"
                  fontWeight={'700'}
                  fontSize={'12px'}
                  mt={'0 !important'}
                >
                  Search
                </Text>
              </HStack> */}
              <Stack spacing={'4'} direction={'row'}>
                <Button
                  onClick={() => {
                    onOpen();
                    setIndex(1);
                  }}
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'700'}
                  variant={'link'}
                  _hover={{}}
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => {
                    onOpen();
                    setIndex(0);
                  }}
                  size={'md'}
                  color={'white'}
                  fontSize={'md'}
                  fontWeight={'700'}
                  colorScheme={'blue'}
                  _hover={{}}
                >
                  Register
                </Button>
              </Stack>

              {/* <Stack alignSelf={'center'} >
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
                    <MenuItem>Wallet</MenuItem>
                    <MenuItem>Vault</MenuItem>
                    <MenuItem>VIP</MenuItem>
                    <MenuItem>Affiliate</MenuItem>
                    <MenuItem>Statistics</MenuItem>
                    <MenuItem>Transactions</MenuItem>
                    <MenuItem>Sport Bets</MenuItem>
                    <MenuItem>Notifications</MenuItem>
                    <MenuItem onClick={()=>nav('/settings')}>Settings</MenuItem>
                    <MenuItem>Live Support</MenuItem>
                    <MenuItem>Logout</MenuItem>
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
                    <MenuItem>Chat</MenuItem>
                    <MenuItem>Bet Slip</MenuItem>
                  </MenuList>
                </Menu>
              </Stack> */}
            </Stack>
          </Stack>
          {/* Auth Modal */}
          <Modal scrollBehavior='inside' size={'lg'} isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton _hover={{}} color={'white'} />
              <ModalBody pt={'4'} bg={'#000000ed'}>
                <AuthModalContent i={index} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Header>
        <Content className="site-layout-background">
          <Stack
            style={{
              height: 'calc(100vh - 60px)',
            }}
            overflowY={'auto'}
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
