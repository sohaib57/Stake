import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack, Stack, Button,
  Select,
  Text
} from '@chakra-ui/react'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { GiDigitalTrace } from 'react-icons/gi'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  StarOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Divider } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'antd/dist/antd.css';
import './style.css';
import WeeklyGiveAwayModal from '../components/promotions/WeeklyGiveAwayModal';
import Race24Hour from '../components/promotions/Race24Hour';

const { Sider } = Layout;

const Sidebar = () => {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    isOpen: isRevocationModalOpen,
    onOpen: onOpenRevocationModal,
    onClose: onCloseRevocationModal,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  const [scrollBehavior2, setScrollBehavior2] = React.useState('inside')

  const btnRef = React.useRef(null)


  return (
    <Stack display={{ base: 'none', md: 'inherit', lg: 'inherit' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="logo" /> */}
        <div className="siderbar-header">
          <Stack direction={'row'} className='sidebar-button'>
            <Button
              _hover={{
                bgColor: 'transparent'
              }}
              bgColor={'transparent'}
              color={'white'}
              leftIcon={<StarOutlined />}
              fontSize={'sm'}
            >
              Casino
            </Button>
            <Button
              _hover={{
                bgColor: 'transparent'
              }}
              bgColor={'transparent'}
              color={'white'}
              leftIcon={<StarOutlined />}
              fontSize={'sm'}
            >
              Sport
            </Button>
          </Stack>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}

        </div>

        <Menu
          mode="inline"
          className="menu-bar"
          style={{
            overflowX: 'hidden',
            overflowY: 'auto',
            height: '88vh',
            borderRight: 'none',
          }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <StarOutlined />
                <span>Casino</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Favourites
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Recent
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/casino/challenges')}
              >
                Challenges
              </button>
            </Menu.Item>
            <Divider />
            <Menu.Item
              onClick={() => nav('/casino/group/stake-originals')}
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button

                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Originals
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/stake-exclusives')}
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stake Exclusives
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/slots')}
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Slots
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/live-casino')}
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Casino
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/game-shows')}
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Game Shows
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/new-releases')}
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                New Releases
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/feature-buy-in')}
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Feature Buy-in
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/table-games')}
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Games
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/blackjack')}
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Blackjack
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/baccarat')}
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baccarat
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/casino/group/roulette')}
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Roulette
              </button>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <StarOutlined />
                <span>Sports</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                My Bets
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Events
              </button>

            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Starting Soon
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              Popular
            </p>
            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                ATP London, Great...
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                ATP Halle,Germany...
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                KBO League
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                NHL
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              Top Sports
            </p>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baseball
              </button>
            </Menu.Item>
            <Menu.Item
              key="11"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Basketball
              </button>
            </Menu.Item>
            <Menu.Item
              key="12"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Tennis
              </button>
            </Menu.Item>
            <Divider />
            <p
              style={{
                paddingLeft: 20,
                paddingBottom: 8,
              }}
            >
              All Sports
            </p>
            <Menu.Item
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Alpine Skiing
              </button>
            </Menu.Item>
            <Menu.Item
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                American Football
              </button>
            </Menu.Item>
            <Menu.Item
              key="15"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Aussie Rules
              </button>
            </Menu.Item>
            <Menu.Item
              key="16"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Badminton
              </button>
            </Menu.Item>
            <Menu.Item
              key="17"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baseball
              </button>
            </Menu.Item>
            <Menu.Item
              key="18"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Basketball
              </button>
            </Menu.Item>
            <Menu.Item
              key="19"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Beach Volley
              </button>
            </Menu.Item>
            <Menu.Item
              key="20"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Biathlon
              </button>
            </Menu.Item>
            <Menu.Item
              key="21"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Boxing
              </button>
            </Menu.Item>
            <Menu.Item
              key="22"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Counter-Strike
              </button>
            </Menu.Item>
            <Menu.Item
              key="23"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cricket
              </button>
            </Menu.Item>
            <Menu.Item
              key="24"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cross-Country
              </button>
            </Menu.Item>
            <Menu.Item
              key="25"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cycling
              </button>
            </Menu.Item>
            <Menu.Item
              key="26"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Darts
              </button>
            </Menu.Item>
            <Menu.Item
              key="27"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Dota 2
              </button>
            </Menu.Item>
            <Menu.Item
              key="28"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Electronic Leagues
              </button>
            </Menu.Item>
            <Menu.Item
              key="29"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                FIFA
              </button>
            </Menu.Item>
            <Menu.Item
              key="30"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Formula 1
              </button>
            </Menu.Item>
            <Menu.Item
              key="30"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Futsal
              </button>
            </Menu.Item>
            <Menu.Item
              key="31"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Gaelic Hurling
              </button>
            </Menu.Item>
            <Menu.Item
              key="32"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Golf
              </button>
            </Menu.Item>
            <Menu.Item
              key="33"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Handball
              </button>
            </Menu.Item>
            <Menu.Item
              key="34"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ice Hockey
              </button>
            </Menu.Item>
            <Menu.Item
              key="35"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Indy Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="36"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                League of Legends
              </button>
            </Menu.Item>
            <Menu.Item
              key="37"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                MMA
              </button>
            </Menu.Item>
            <Menu.Item
              key="38"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Motorcycle Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="39"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Pesapallo
              </button>
            </Menu.Item>
            <Menu.Item
              key="40"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Politics & Entertain...
              </button>
            </Menu.Item>
            <Menu.Item
              key="41"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rainbow Six
              </button>
            </Menu.Item>
            <Menu.Item
              key="42"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rugby
              </button>
            </Menu.Item>
            <Menu.Item
              key="43"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ski Jumping
              </button>
            </Menu.Item>
            <Menu.Item
              key="44"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                snooker
              </button>
            </Menu.Item>
            <Menu.Item
              key="45"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
              </button>
            </Menu.Item>
            <Menu.Item
              key="46"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stock Car Racing
              </button>
            </Menu.Item>
            <Menu.Item
              key="47"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="48"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              key="49"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Volleyball
              </button>
            </Menu.Item>
            <Menu.Item
              key="50"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Waterpolo
              </button>
            </Menu.Item>
            <Divider />
            <Stack>
              <Select
                placeholder="Odds: Decimal"
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
                <option value="option1">Decimal</option>
                <option value="option2">Fractional</option>
                <option value="option3">American</option>
                <option value="option3">Hong Kong</option>
                <option value="option3">Indonesian</option>
                <option value="option3">Malaysian</option>
              </Select>
            </Stack>
            <Divider />
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <StarOutlined />
                <span>Promotions</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}

                onClick={onOpen}

              >
                $50k Weekly Giveaway

              </button>
            </Menu.Item>

            {/* WeeklyGiveAway */}
            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
              size={'lg'}

            >
              <ModalOverlay />
              <ModalContent bg={'#1A2C38'} >
                <ModalHeader>
                  <Stack direction={'row'} alignItems={'center'} >
                    <RiContactsBook2Fill color={'#B1BAD3'} />
                    <Text color={'white'} >  VIP </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton bg={'white'} color={'black'} />
                <ModalBody  >
                  <WeeklyGiveAwayModal />
                </ModalBody>
                <ModalFooter bg={'#0F212E'} justifyContent={'center'} >
                  <Text color={'white'}  >
                    Learn more about being a Stake VIP
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>


            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={onOpenRevocationModal}
              >
                $100k Race - 24 Hours
              </button>
            </Menu.Item>


            {/* Race-Hour */}
            <Modal
              onClose={onCloseRevocationModal}
              finalFocusRef={btnRef}
              isOpen={isRevocationModalOpen}
              scrollBehavior={scrollBehavior2}
              size={'lg'}

            >
              <ModalOverlay />
              <ModalContent bg={'#1A2C38'} >
                <ModalHeader>
                  <Stack direction={'row'} alignItems={'center'} >
                    <GiDigitalTrace color={'#B1BAD3'} />
                    <Text color={'white'} >  Race </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton bg={'white'} color={'black'} />
                <ModalBody  >
                  <Race24Hour />
                </ModalBody>
                <ModalFooter bg={'#0F212E'} justifyContent={'center'} >
                  <Text color={'white'}  >
                    Learn more about being a Stake VIP
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/promotions')}
              >
                View All
              </button>
            </Menu.Item>
            <Divider />
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <StarOutlined />
                <span>Sponsorships</span>
              </span>
            }
          >
            <Menu.Item
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <StarOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Drake
              </button>
            </Menu.Item>
            <Menu.Item
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Watford FC
              </button>
            </Menu.Item>
            <Menu.Item
              key="3"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Kun Agüero
              </button>
            </Menu.Item>

            <Menu.Item
              key="4"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                UFC
              </button>
            </Menu.Item>
            <Menu.Item
              key="5"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Israel Adesanya
              </button>
            </Menu.Item>
            <Menu.Item
              key="6"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                José Aldo
              </button>
            </Menu.Item>
            <Menu.Item
              key="7"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Alexa Grasso
              </button>
            </Menu.Item>
            <Menu.Item
              key="8"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Boxing in Japan
              </button>
            </Menu.Item>
            <Menu.Item
              key="9"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Brazil Rugby League
              </button>
            </Menu.Item>
            <Menu.Item
              key="10"
              style={{
                paddingLeft: 20,
              }}
            >
              <FieldTimeOutlined />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Fittipaldi Brothers
              </button>
            </Menu.Item>
            <Divider />
          </SubMenu>
          <Menu
            className="menu-bar"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Blog',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Live Support',
              },
            ]}
          />
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
              <option value="option1">English</option>
              <option value="option2">Deutsch</option>
              <option value="option3">Español</option>
              <option value="option3">Français</option>
              <option value="option3">हिन्दी</option>
              <option value="option3">Indonesi</option>
            </Select>
          </Stack>
        </Menu>
      </Sider>
    </Stack>
  );
};

export default Sidebar;
