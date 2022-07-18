import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import {
  Stack,
  VStack,
  HStack,
  Text,
  Button,
  Box,
  Link,
  Divider,
  Badge,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { IoIosRocket, IoIosBaseball } from 'react-icons/io';
import { IoFootballOutline } from 'react-icons/io5';
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
  FaCarSide,
  FaGg,
  FaFire,
  FaBaseballBall,
  FaSkiing,
  FaBasketballBall,
  FaSkiingNordic,
  FaBowlingBall,
  FaMotorcycle,
  FaFootballBall,
  FaVolleyballBall,
  FaGift,
  FaHeadSideMask,
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
  GiCardAceHearts,
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
import { GiDigitalTrace } from 'react-icons/gi';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { useDisclosure } from '@chakra-ui/react';
import Race24Hour from '../components/promotions/Race24Hour';
import WeeklyGiveAwayModal from '../components/promotions/WeeklyGiveAwayModal';

const MenuBar = () => {
  const nav = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const {
    isOpen: isWeeklyGiveAwayModalOpen,
    onOpen: onOpenWeeklyGiveAwayModal,
    onClose: onCloseWeeklyGiveAwayModal,
  } = useDisclosure();
  const {
    isOpen: isRevocationModalOpen,
    onOpen: onOpenRevocationModal,
    onClose: onCloseRevocationModal,
  } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');
  const [scrollBehavior2, setScrollBehavior2] = React.useState('inside');
  return (
    <>
      <VStack justifyContent={'center'} ref={btnRef} onClick={onOpen}>
        <BsList color="white" size={18} />
        <Text
          color="white"
          fontWeight={'700'}
          fontSize={'xs'}
          mt={'0 !important'}
        >
          Menu
        </Text>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Stack bgColor={'black'}>
            <DrawerCloseButton color={'white'} />
            <DrawerHeader
              p={2}
              borderBottom={'1px solid #071824'}
              boxShadow={'lg'}
            >
              <Stack direction={'row'} className="sidebar-button">
                <Button
                  onClick={() => nav('/casino/home')}
                  _hover={{
                    bgColor: '#071824',
                  }}
                  bgColor={'#071824'}
                  color={'white'}
                  leftIcon={<GiCardAceHearts />}
                  fontSize={'sm'}
                  borderRadius={'50px'}
                >
                  Casino
                </Button>
                <Button
                  onClick={() => nav('/sports/home')}
                  _hover={{
                    bgColor: 'transparent',
                  }}
                  bgColor={'transparent'}
                  color={'white'}
                  leftIcon={<GiBasketballBall />}
                  fontSize={'sm'}
                >
                  Sport
                </Button>
              </Stack>
            </DrawerHeader>
          </Stack>

          <DrawerBody bgColor={'black'}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={'sm'}
                      color={'white'}
                      fontWeight={'700'}
                    >
                      Casino
                    </Box>
                    <AccordionIcon color={'white'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    fontSize={'sm'}
                    color={'white'}
                    fontWeight={'700'}
                    direction={'column'}
                  >
                    <HStack
                      onClick={() => nav('/casino-favourite')}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                      p={2}
                    >
                      <Link>
                        <AiOutlineStar color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                        Favourites
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/recent')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiBackwardTime color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Recent
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/challenges')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiTargetShot color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Challenges
                      </Link>
                    </HStack>
                    <Divider border={' 0.1px solid #2f4553'} />
                    <HStack
                      onClick={() => nav('/casino/group/stake-originals')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <ImFire color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Stake Originals
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/stake-exclusives')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaGg color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Stake Exclusives
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/slots')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <BsBookmarkStarFill color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Slots
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/live-casino')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdOutlineCasino color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Live Casino
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/game-shows')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <AiOutlineGift color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Game Shows
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/new-releases')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <IoIosRocket color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        New Releases
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/feature-buy-in')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <BiRocket color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Feature Buy-in
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/table-games')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaFire color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Table Games
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/blackjack')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSpades color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Blackjack
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/baccarat')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiCardAceHearts color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Baccarat
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/casino/group/roulette')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiBurningDot color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Roulette
                      </Link>
                    </HStack>
                    <Divider border={' 0.1px solid #2f4553'} />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={'sm'}
                      color={'white'}
                      fontWeight={'700'}
                    >
                      Sport
                    </Box>
                    <AccordionIcon color={'white'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    fontSize={'sm'}
                    color={'white'}
                    fontWeight={'700'}
                    direction={'column'}
                  >
                    <HStack
                      onClick={() => nav('/sports/my-bets')}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                      p={2}
                    >
                      <Link>
                        <RiNewspaperLine color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                        My Bets
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/live-events')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <AiFillPlayCircle color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Live Events
                      </Link>
                      <Badge
                        bgColor={'#1f8bff'}
                        borderRadius={'50px'}
                        fontSize={'sm'}
                        color={'#080808'}
                        px={2}
                      >
                        18
                      </Badge>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/upcoming')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdTimer color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Starting Soon
                      </Link>
                    </HStack>
                    <Divider border={' 0.1px solid #2f4553'} />
                    <HStack
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Popular
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/baseball/usa/mlb')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <IoIosBaseball color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        MLB
                      </Link>
                    </HStack>

                    <Divider border={' 0.1px solid #2f4553'} />
                    <HStack
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Top Sports
                      </Link>
                    </HStack>

                    <HStack
                      onClick={() => nav('/sports/soccer')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSoccerBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Soccer
                      </Link>
                    </HStack>

                    <Divider border={' 0.1px solid #2f4553'} />
                    <HStack
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        All Sports
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/alpine-skiing')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaSkiing color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Alpine Skiing
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/american-football')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiAmericanFootballHelmet color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        American Football
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/aussie-rules')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiAmericanFootballBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Aussie Rules
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/badminton')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSnitchQuidditchBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Badminton
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/baseball')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <IoIosBaseball color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Baseball
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/basketball')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaBasketballBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Basketball
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/biathlon')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaSkiingNordic color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Biathlon
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/bowls')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaBowlingBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Bowls
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/boxing')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <RiBoxingFill color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Boxing
                      </Link>
                    </HStack>

                    <HStack
                      onClick={() => nav('/sports/counter-strike')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <SiCounterstrike color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Counter-Strike
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/cricket')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdSportsCricket color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Cricket
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/cross-country')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSupersonicArrow color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Cross-Country
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/cycling')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <BiCycling color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Cycling
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/darts')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiDart color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Darts
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/dota-2')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiAbstract060 color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Dota 2
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/electronic-leagues')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <SiGeneralelectric color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Electronic Leagues
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/fifa')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <SiFifa color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        FIFA
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/formula-1')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiTrophy color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Formula 1
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/futsal')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <IoFootballOutline color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Futsal
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/gaelic-hurling')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiHockey color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Gaelic Hurling
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/golf')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiGolfTee color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Golf
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/handball')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdSportsHandball color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Handball
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/ice-hockey')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiHockey color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Ice Hockey
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/indy-racing')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiAbstract093 color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Indy Racing
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/league-of-legends')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdLegendToggle color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        League of Legends
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/mma')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <RiBoxingLine color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        MMA
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/motorcycle-racing')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaMotorcycle color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Motorcycle Racing
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/pesapallo')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiBaseballBat color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Pesapallo
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/politics-entertainment')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiExpander color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Politics & Entertainment
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/rainbow-six')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <RiRainbowLine color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Rainbow Six
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/rugby')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaFootballBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Rugby
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/ski-jumping')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSkier color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Ski Jumping
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/snooker')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiBallPyramid color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Snooker
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/soccer')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiSoccerBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Soccer
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/stock-car-racing')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaCarSide color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Stock Car Racing
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/table-tennis')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiPingPongBat color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Table Tennis
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/tennis')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaBaseballBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Tennis
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/volleyball')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaVolleyballBall color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Volleyball
                      </Link>
                    </HStack>
                    <HStack
                      onClick={() => nav('/sports/waterpolo')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <GiWaterPolo color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Waterpolo
                      </Link>
                    </HStack>
                    <Divider border={' 0.1px solid #2f4553'} />
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
                    <Divider border={' 0.1px solid #2f4553'} />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={'sm'}
                      color={'white'}
                      fontWeight={'700'}
                    >
                      Promotions
                    </Box>
                    <AccordionIcon color={'white'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    fontSize={'sm'}
                    color={'white'}
                    fontWeight={'700'}
                    direction={'column'}
                  >
                    <HStack
                      onClick={onOpenWeeklyGiveAwayModal}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                      p={2}
                    >
                      <Link>
                        <RiCoupon5Line color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                        $50k Weekly Giveaway
                      </Link>
                    </HStack>
                    {/* WeeklyGiveAway */}
                    <Modal
                      onClose={onCloseWeeklyGiveAwayModal}
                      finalFocusRef={btnRef}
                      isOpen={isWeeklyGiveAwayModalOpen}
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

                    <HStack
                      onClick={onOpenRevocationModal}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <BiTimer color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                        $100k Race - 24 Hours
                      </Link>
                    </HStack>
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
                    <HStack
                       onClick={() => nav('/promotions')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaGift color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        View All
                      </Link>
                    </HStack>
                    <Divider border={' 0.1px solid #2f4553'} />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize={'sm'}
                      color={'white'}
                      fontWeight={'700'}
                    >
                      Sponsorships
                    </Box>
                    <AccordionIcon color={'white'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack
                    fontSize={'sm'}
                    color={'white'}
                    fontWeight={'700'}
                    direction={'column'}
                  >
                    <HStack
                    onClick={() => nav('/drake')}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                      p={2}
                    >
                      <Link>
                        <BsEmojiHeartEyesFill color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                          color: 'white',
                        }}
                      >
                        Drake
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/watford')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Watford FC
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/kun-aguero')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Kun Agüero
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/ufc')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        UFC
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/adesanya')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Israel Adesanya
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/jose-aldo')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        José Aldo
                      </Link>
                    </HStack>
                    <HStack
                    onClick={() => nav('/alexa-grasso')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Alexa Grasso
                      </Link>
                    </HStack>
                    <HStack
                     onClick={() => nav('/inoue')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Boxing in Japan
                      </Link>
                    </HStack>
                    <HStack
                     onClick={() => nav('/brazil-rugby-league')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Brazil Rugby League
                      </Link>
                    </HStack>
                    <HStack
                     onClick={() => nav('/fittipaldi-brothers')}
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <FaHeadSideMask color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Fittipaldi Brothers
                      </Link>
                    </HStack>

                    <Divider border={' 0.1px solid #2f4553'} />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton>
                    <Stack direction={'column'} gap={2}>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize={'sm'}
                        color={'white'}
                        fontWeight={'700'}
                        onClick={() => nav('/blog')}
                        cursor={'pointer'}
                      >
                        Blog
                      </Box>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize={'sm'}
                        color={'white'}
                        fontWeight={'700'}
                      >
                        Live Support
                      </Box>
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
                          <option value="option1"  className="select">English</option>
                          <option value="option2"  className="select">Deutsch</option>
                          <option value="option3"  className="select">Español</option>
                          <option value="option4"  className="select">Français</option>
                          <option value="option5"  className="select">हिन्दी</option>
                          <option value="option6"  className="select">Indonesi</option>
                        </Select>
                      </Stack>
                    </Stack>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuBar;
