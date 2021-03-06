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
  Text,
  Link,
  Img,
  Select,
} from '@chakra-ui/react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { GiDigitalTrace } from 'react-icons/gi';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { GiCardAceHearts } from 'react-icons/gi';
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
  MdSportsHandball,
  MdLegendToggle,
} from 'react-icons/md';
import { AiOutlineGift } from 'react-icons/ai';
import { SiCounterstrike, SiGeneralelectric, SiFifa } from 'react-icons/si';
import { BsBookmarkStarFill, BsEmojiHeartEyesFill } from 'react-icons/bs';
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
import { BiRocket, BiCycling, BiTimer } from 'react-icons/bi';
import {
  RiNewspaperLine,
  RiBoxingLine,
  RiRainbowLine,
  RiCoupon5Line,
} from 'react-icons/ri';
import {
  GiBasketballBall,
  GiBackwardTime,
  GiTargetShot,
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
// import flag from '../assets/images/gb.svg';

const { Sider } = Layout;
// const options = [
//   {
//     value: 'chocolate',
//     label: 'Chocolate',
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         id="flag-icon-css-gb"
//         width="512"
//         height="512"
//       >
//         <defs>
//           <clipPath id="a">
//             <path fill-opacity=".7" d="M250 0h500v500H250z" />
//           </clipPath>
//         </defs>
//         <g clip-path="url(#a)" transform="translate(-256) scale(1.024)">
//           <g stroke-width="1pt">
//             <path fill="#006" d="M0 0h1000v500H0z" />
//             <path
//               fill="#fff"
//               d="M0 0v55.9L888.2 500H1000v-55.9L111.8.1H0zm1000 0v55.9L111.8 500H0v-55.9L888.2 0H1000z"
//             />
//             <path
//               fill="#fff"
//               d="M416.7 0v500h166.6V0H416.7zM0 166.7v166.6h1000V166.7H0z"
//             />
//             <path
//               fill="#c00"
//               d="M0 200v100h1000V200H0zM450 0v500h100V0H450zM0 500l333.3-166.7H408L74.5 500H0zM0 0l333.3 166.7h-74.5L0 37.3V0zm592.1 166.7L925.5 0h74.5L666.7 166.7H592zm408 333.3L666.6 333.3h74.5L1000 462.7V500z"
//             />
//           </g>
//         </g>
//       </svg>
//     ),
//   },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];



const Sidebar = () => {
  // const [selectedOption, setSelectedOption] = useState();
  const nav = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
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
          <div className="sidebar-button">
            <Stack direction={'row'} spacing={0} alignItems={'baseline'}>
              <Stack
                direction={'row'}
                spacing={0}
                display={collapsed ? 'none' : 'inherit'}
              >
                <Stack direction={'row'} gap={2} marginLeft={5}>
                  <Link _hover={{}}>
                    <HStack onClick={() => nav('/casino/home')}>
                      <GiCardAceHearts color="white" />
                      <Text
                        color={'white'}
                        fontWeight={'700'}
                        fontSize={'13px'}
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Casino
                      </Text>
                    </HStack>
                  </Link>
                  <Link _hover={{}}>
                    <HStack onClick={() => nav('/sports/home')}>
                      <GiBasketballBall color="white" />
                      <Text
                        color={'white'}
                        fontWeight={'700'}
                        fontSize={'13px'}
                      >
                        Sports
                      </Text>
                    </HStack>
                  </Link>
                </Stack>
              </Stack>
              <Stack>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: 'trigger',
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </Stack>
            </Stack>
          </div>
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
                <Icon component={GiCardAceHearts} />
                <span>Casino</span>
              </span>
            }
          >
            <Menu.Item
              onClick={() => nav('/casino-favourite')}
              key="3"
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
              key="4"
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
              key="5"
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
              key="6"
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
              key="7"
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
              key="8"
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
              key="9"
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
              key="10"
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
              key="11"
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
              key="12"
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
              key="13"
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
              key="14"
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
              key="15"
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
              key="16"
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
                <Icon component={GiBasketballBall} />
                <span>Sports</span>
              </span>
            }
          >
            <Menu.Item
              onClick={() => nav('/sports/my-bets')}
              key="17"
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
              key="18"
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
              key="19"
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
              key="20"
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
              key="21"
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
              key="22"
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
              key="23"
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
              key="24"
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
              key="25"
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
              key="26"
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
              key="27"
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
              key="28"
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
              key="29"
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
              key="30"
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
              key="31"
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
              key="32"
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
              key="33"
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
              key="34"
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
              key="35"
              onClick={() => nav('/sports/darts')}
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
              key="36"
              onClick={() => nav('/sports/dota-2')}
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
              key="37"
              onClick={() => nav('/sports/electronic-leagues')}
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
              key="38"
              onClick={() => nav('/sports/fifa')}
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
              key="39"
              onClick={() => nav('/sports/formula-1')}
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
              key="40"
              onClick={() => nav('/sports/futsal')}
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
              key="41"
              onClick={() => nav('/sports/gaelic-hurling')}
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
              key="42"
              onClick={() => nav('/sports/golf')}
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
              key="43"
              onClick={() => nav('/sports/handball')}
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
              key="44"
              onClick={() => nav('/sports/ice-hockey')}
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
              key="45"
              onClick={() => nav('/sports/indy-racing')}
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
              key="46"
              onClick={() => nav('/sports/league-of-legends')}
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
              key="47"
              onClick={() => nav('/sports/mma')}
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
              key="48"
              onClick={() => nav('/sports/motorcycle-racing')}
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
              key="49"
              onClick={() => nav('/sports/pesapallo')}
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
              key="50"
              onClick={() => nav('/sports/politics-entertainment')}
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
              key="51"
              onClick={() => nav('/sports/rainbow-six')}
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
              key="52"
              onClick={() => nav('/sports/rugby')}
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
              key="53"
              onClick={() => nav('/sports/ski-jumping')}
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
              key="54"
              onClick={() => nav('/sports/snooker')}
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
              key="55"
              onClick={() => nav('/sports/soccer')}
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
              key="56"
              onClick={() => nav('/sports/stock-car-racing')}
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
              key="57"
              onClick={() => nav('/sports/table-tennis')}
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
              key="58"
              onClick={() => nav('/sports/tennis')}
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
              key="59"
              onClick={() => nav('/sports/volleyball')}
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
              key="60"
              onClick={() => nav('/sports/waterpolo')}
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
                <Icon component={AiOutlineGift} />
                <span>Promotions</span>
              </span>
            }
          >
            <Menu.Item
              key="61"
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
              <ModalContent>
                <ModalHeader bg={'#000000f2'}>
                  <Stack direction={'row'} alignItems={'center'}>
                    <GiDigitalTrace color={'#B1BAD3'} />
                    <Text color={'white'}> Race </Text>
                  </Stack>
                </ModalHeader>
                <ModalCloseButton bg={'white'} color={'black'} />
                <ModalBody bg={'#000000ed'}>
                  <Race24Hour />
                </ModalBody>
                <ModalFooter bg={'#000000f2'} justifyContent={'center'}>
                  <Text color={'white'}>
                    Learn more about being a Stake VIP
                  </Text>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Menu.Item
              key="63"
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
                <Icon component={FaHandshake} />
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
                Kun Ag??ero
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
                Jos?? Aldo
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
                icon: <IoNewspaperOutline />,
                label: 'Blog',
              },
            ]}
          />
          <Menu
            className="menu-bar"
            mode="inline"
            items={[
              {
                icon: <FaHeadset />,
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
                Espa??ol
              </option>
              <option value="option3" className="select">
                Fran??ais
              </option>
              <option value="option3" className="select">
                ??????????????????
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
              getOptionLabel={e => (
                <HStack>
                  <Img src={e.icon}/>
                  <span style={{ marginLeft: 5 }}>{e.label}</span>
                </HStack>
              )}
            /> */}
          </Stack>
        </Menu>
      </Sider>
    </Stack>
  );
};

export default Sidebar;
