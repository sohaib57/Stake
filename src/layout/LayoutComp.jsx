import React from 'react';
import { Stack, Img, Select, HStack, Button, Text } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { SiGooglechat } from 'react-icons/si';
import { Layout } from 'antd';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Stake from '../assets/images/stake.png';
import 'antd/dist/antd.css';
import './style.css';
import MobileHeader from './MobileHeader';

const { Header, Content } = Layout;

const LayoutComp = ({ children }) => {
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
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack>
              <Img src={Stake} alt="stake" width={130} />
            </Stack>

            <Stack>
              <HStack spacing={0}>
                <Select
                  borderLeftRadius={'5px'}
                  borderRightRadius={'none'}
                  bgColor={'#0f212e'}
                  border={'none'}
                  color={'white'}
                >
                  <option value="option1">0.00000000</option>
                  <option value="option2">0.00000001</option>
                  <option value="option3">0.00000002</option>
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
              alignItems={'baseline'}
              pr={{ base: '2', md: '10' }}
            >
              <HStack display={{ base: 'none', md: 'inherit', lg: 'inherit' }}>
                <BsSearch color="white" size={15} />
                <Text
                  color="white"
                  fontWeight={'700'}
                  fontSize={'12px'}
                  mt={'0 !important'}
                >
                  Search
                </Text>
              </HStack>

              <Stack>
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
                    <MenuItem>Settings</MenuItem>
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
              </Stack>
            </Stack>
          </Stack>
          {/* <Stack direction={'row'} pr={10}>
            <Stack>

              <Img src={Stake} alt="stake" width={130} />

            </Stack>
            <Spacer />

            <div className="button-section">
              <Button type="text">Sign In</Button>

              <Button type="primary">Register</Button>
            </div>
          </Stack> */}
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
