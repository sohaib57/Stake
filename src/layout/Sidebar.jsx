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
  HStack,
  Stack,
  Button,
  Select,
  Text,
} from '@chakra-ui/react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { GiDigitalTrace } from 'react-icons/gi';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  StarOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { GiCardAceHearts } from 'react-icons/gi';
import { AiTwotoneHeart } from 'react-icons/ai';
import 'antd/dist/antd.css';
import './style.css';
import WeeklyGiveAwayModal from '../components/promotions/WeeklyGiveAwayModal';
import Race24Hour from '../components/promotions/Race24Hour';
import { Layout, Menu, Divider, Badge } from 'antd';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
import './style.css';
import { IoIosRocket, IoIosBaseball } from 'react-icons/io';
import { IoFootballOutline, IoNewspaperOutline } from 'react-icons/io5';
import {
  MdOutlineCasino,
  MdTimer,
  MdSportsCricket,
  MdSportsBasketball,
  MdSportsHandball,
  MdLegendToggle,
} from 'react-icons/md';
import { AiOutlineGift } from 'react-icons/ai';
import {
  SiCounterstrike,
  SiGeneralelectric,
  SiFifa,
  SiWattpad,
} from 'react-icons/si';
import {
  BsList,
  BsBookmarkStarFill,
  BsEmojiHeartEyesFill,
} from 'react-icons/bs';
import { AiOutlineStar, AiFillPlayCircle } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';
import {
  FaGg,
  FaFire,
  FaBaseballBall,
  FaSkiing,
  FaBasketballBall,
  FaSkiingNordic,
  FaBowlingBall,
  FaMotorcycle,
  FaFootballBall,
  FaCarSide,
  FaVolleyballBall,
  FaGift,
  FaHandshake,
  FaHeadSideMask,
  FaHeadset,
} from 'react-icons/fa';
import { BiRocket, BiFootball, BiCycling, BiTimer } from 'react-icons/bi';
import {
  RiNewspaperLine,
  RiBoxingFill,
  RiHonorOfKingsFill,
  RiBoxingLine,
  RiRainbowLine,
  RiCoupon5Line,
} from 'react-icons/ri';
import {
  GiBasketballBall,
  GiBackwardTime,
  GiTargetShot,
  GiCardJackClubs,
  GiBurningDot,
  GiPingPongBat,
  GiHockey,
  GiAmericanFootballHelmet,
  GiAmericanFootballBall,
  GiSnitchQuidditchBall,
  GiSupersonicArrow,
  GiDart,
  GiSpades,
  GiAbstract060,
  GiAbstract093,
  GiTrophy,
  GiGolfTee,
  GiBaseballBat,
  GiExpander,
  GiSkier,
  GiBallPyramid,
  GiSoccerBall,
  GiWaterPolo,
} from 'react-icons/gi';
// import Select from 'react-select';

const { Sider } = Layout;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const Sidebar = () => {
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isRevocationModalOpen,
    onOpen: onOpenRevocationModal,
    onClose: onCloseRevocationModal,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const [scrollBehavior2, setScrollBehavior2] = React.useState('inside');

  const btnRef = React.useRef(null);

  const [show, setShow] = useState(true);
  return (
    <Stack
      display={{ base: 'none', md: 'inherit', lg: 'inherit' }}
      className="sider-body"
      style={{
        fontFamily: 'Poppins',
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="siderbar-header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        <div className="sidebar-button">
          <Menu
            onClick={() => nav('/casino/home')}
            className="menu-bar"
            mode="inline"
            items={[
              {
                key: '75',
                icon: <GiCardAceHearts />,
                label: 'Casino',
              },
            ]}
          />
          <Menu
            onClick={() => nav('/sports/home')}
            className="menu-bar"
            mode="inline"
            items={[
              {
                key: '76',
                icon: <GiBasketballBall />,
                label: 'Sports',
              },
            ]}
          />
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
              <span className="animation">
                <span>Casino</span>
              </span>
            }
          >
            <Menu.Item
              onClick={() => nav('/casino-favourite')}
              key="1"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={AiOutlineStar} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Favourites
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/recent')}
              key="2"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiBackwardTime} />
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
              <Icon component={GiTargetShot} />
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
              <Icon component={ImFire} />
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
              <Icon component={FaGg} />
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
              <Icon component={BsBookmarkStarFill} />
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
              <Icon component={MdOutlineCasino} />
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
              <Icon component={AiOutlineGift} />
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
              <Icon component={IoIosRocket} />
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
              <Icon component={BiRocket} />
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
              <Icon component={FaFire} />
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
              <Icon component={GiSpades} />
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
              <Icon component={GiCardAceHearts} />
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
              <Icon component={GiBurningDot} />
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
              <span className="animation">
                <span>Sports</span>
              </span>
            }
          >
            <Menu.Item
              onClick={() => nav('/sports/my-bets')}
              key="15"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={RiNewspaperLine} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                My Bets
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/live-events')}
              key="17"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={AiFillPlayCircle} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Live Events
              </button>
              <Badge
                style={{
                  backgroundColor: '#1f8bff',
                  color: '#080808',
                  boxShadow: 'none',
                  marginLeft: 6,
                }}
                count={show ? 16 : 0}
              />
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/upcoming')}
              key="18"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={MdTimer} />
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
              onClick={() => nav('/sports/baseball/usa/mlb')}
              key="19"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={IoIosBaseball} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                MLB
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
              onClick={() => nav('/sports/soccer')}
              key="9"
              style={{
                paddingLeft: 20,
                paddingBottom: 0,
              }}
            >
              <Icon component={GiSoccerBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
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
              onClick={() => nav('/sports/alpine-skiing')}
              key="13"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaSkiing} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Alpine Skiing
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/american-football')}
              key="14"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiAmericanFootballHelmet} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                American Football
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/aussie-rules')}
              key="15"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiAmericanFootballBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Aussie Rules
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/badminton')}
              key="16"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiSnitchQuidditchBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Badminton
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/baseball')}
              key="17"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={IoIosBaseball} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Baseball
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/basketball')}
              key="18"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaBasketballBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Basketball
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/biathlon')}
              key="19"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaSkiingNordic} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Biathlon
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/bowls')}
              key="20"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaBowlingBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Bowls
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/boxing')}
              key="21"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaBowlingBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Boxing
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/counter-strike')}
              key="22"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={SiCounterstrike} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Counter-Strike
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/cricket')}
              key="23"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={MdSportsCricket} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cricket
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/cross-country')}
              key="24"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiSupersonicArrow} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cross-Country
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/cycling')}
              key="25"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={BiCycling} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Cycling
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/darts')}
              key="34"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiDart} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Darts
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/dota-2')}
              key="35"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiAbstract060} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Dota 2
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/electronic-leagues')}
              key="36"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={SiGeneralelectric} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Electronic Leagues
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/fifa')}
              key="37"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={SiFifa} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                FIFA
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/formula-1')}
              key="38"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiTrophy} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Formula 1
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/futsal')}
              key="39"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={IoFootballOutline} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Futsal
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/gaelic-hurling')}
              key="40"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiHockey} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Gaelic Hurling
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/golf')}
              key="41"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiGolfTee} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Golf
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/handball')}
              key="42"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={MdSportsHandball} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Handball
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/ice-hockey')}
              key="43"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiHockey} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ice Hockey
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/indy-racing')}
              key="44"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiAbstract093} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Indy Racing
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/league-of-legends')}
              key="45"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={MdLegendToggle} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                League of Legends
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/mma')}
              key="46"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={RiBoxingLine} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                MMA
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/motorcycle-racing')}
              key="47"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaMotorcycle} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Motorcycle Racing
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/pesapallo')}
              key="48"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiBaseballBat} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Pesapallo
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/politics-entertainment')}
              key="49"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiExpander} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Politics & Entertain...
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/rainbow-six')}
              key="50"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={RiRainbowLine} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rainbow Six
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/rugby')}
              key="51"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaFootballBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Rugby
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/ski-jumping')}
              key="52"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiSkier} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Ski Jumping
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/snooker')}
              key="53"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiBallPyramid} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Snooker
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/soccer')}
              key="54"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiSoccerBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Soccer
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/stock-car-racing')}
              key="55"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaCarSide} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Stock Car Racing
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/table-tennis')}
              key="56"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiPingPongBat} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Table Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/tennis')}
              key="57"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaBaseballBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Tennis
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/volleyball')}
              key="58"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaVolleyballBall} />
              <button
                style={{
                  paddingLeft: 8,
                }}
              >
                Volleyball
              </button>
            </Menu.Item>
            <Menu.Item
              onClick={() => nav('/sports/waterpolo')}
              key="59"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={GiWaterPolo} />
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
                _focusVisible={{
                  boxShadow: 'none',
                }}
              >
                <option value="option1" className="select">
                  Decimal
                </option>
                <option value="option2" className="select">
                  Fractional
                </option>
                <option value="option3" className="select">
                  American
                </option>
                <option value="option3" className="select">
                  Hong Kong
                </option>
                <option value="option3" className="select">
                  Indonesian
                </option>
                <option value="option3" className="select">
                  Malaysian
                </option>
              </Select>
            </Stack>
            <Divider />
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span className="animation">
                <span>Promotions</span>
              </span>
            }
          >
            <Menu.Item
              key="60"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={RiCoupon5Line} />
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
              <ModalContent bg={'#1A2C38'}>
                <ModalHeader>
                  <Stack direction={'row'} alignItems={'center'}>
                    <RiContactsBook2Fill color={'#B1BAD3'} />
                    <Text color={'white'}> VIP </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton bg={'white'} color={'black'} />
                <ModalBody>
                  <WeeklyGiveAwayModal />
                </ModalBody>
                <ModalFooter bg={'#0F212E'} justifyContent={'center'}>
                  <Text color={'white'}>
                    Learn more about being a Stake VIP
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Menu.Item
              key="61"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={BiTimer} />
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
              <ModalContent bg={'#1A2C38'}>
                <ModalHeader>
                  <Stack direction={'row'} alignItems={'center'}>
                    <GiDigitalTrace color={'#B1BAD3'} />
                    <Text color={'white'}> Race </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton bg={'white'} color={'black'} />
                <ModalBody>
                  <Race24Hour />
                </ModalBody>
                <ModalFooter bg={'#0F212E'} justifyContent={'center'}>
                  <Text color={'white'}>
                    Learn more about being a Stake VIP
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Menu.Item
              key="62"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaGift} />
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
              <span className="animation">
                <span>Sponsorships</span>
              </span>
            }
          >
            <Menu.Item
              key="64"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={BsEmojiHeartEyesFill} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/drake')}
              >
                Drake
              </button>
            </Menu.Item>
            <Menu.Item
              key="65"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/watford')}
              >
                Watford FC
              </button>
            </Menu.Item>
            <Menu.Item
              key="66"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/kun-aguero')}
              >
                Kun Agüero
              </button>
            </Menu.Item>

            <Menu.Item
              key="67"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/ufc')}
              >
                UFC
              </button>
            </Menu.Item>
            <Menu.Item
              key="68"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/adesanya')}
              >
                Israel Adesanya
              </button>
            </Menu.Item>
            <Menu.Item
              key="69"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/jose-aldo')}
              >
                José Aldo
              </button>
            </Menu.Item>
            <Menu.Item
              key="70"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/alexa-grasso')}
              >
                Alexa Grasso
              </button>
            </Menu.Item>
            <Menu.Item
              key="71"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/inoue')}
              >
                Boxing in Japan
              </button>
            </Menu.Item>
            <Menu.Item
              key="72"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/brazil-rugby-league')}
              >
                Brazil Rugby League
              </button>
            </Menu.Item>
            <Menu.Item
              key="73"
              style={{
                paddingLeft: 20,
              }}
            >
              <Icon component={FaHeadSideMask} />
              <button
                style={{
                  paddingLeft: 8,
                }}
                onClick={() => nav('/fittipaldi-brothers')}
              >
                Fittipaldi Brothers
              </button>
            </Menu.Item>
            <Divider />
          </SubMenu>
          <Menu
            onClick={() => nav('/blog')}
            className="menu-bar"
            mode="inline"
            items={[
              {
                key: '73',

                label: 'Blog',
              },
            ]}
          />
          <Menu
            className="menu-bar"
            mode="inline"
            items={[
              {
                key: '74',
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
              _focusVisible={{
                boxShadow: 'none',
              }}
            >
              <option value="option1" className="select">
                English
              </option>
              <option value="option2" className="select">
                Deutsch
              </option>
              <option value="option3" className="select">
                Español
              </option>
              <option value="option3" className="select">
                Français
              </option>
              <option value="option3" className="select">
                हिन्दी
              </option>
              <option value="option3" className="select">
                Indonesi
              </option>
            </Select>
            {/* <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="select"
            />*/}
          </Stack>
        </Menu>
      </Sider>
    </Stack>
  );
};

export default Sidebar;
