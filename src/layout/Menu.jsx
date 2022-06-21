import React from 'react';
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
import { BsList, BsBookmarkStarFill , BsEmojiHeartEyesFill,} from 'react-icons/bs';
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
  FaVolleyballBall,
  FaGift,
  FaHeadSideMask
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
import { useDisclosure } from '@chakra-ui/react';

const MenuBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <VStack justifyContent={'center'} ref={btnRef} onClick={onOpen}>
        <BsList color="white" size={18} />
        <Text
          color="white"
          fontWeight={'700'}
          fontSize={'12px'}
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
          <Stack bgColor={'#0f212e'}>
            <DrawerCloseButton color={'white'} />
            <DrawerHeader
              p={2}
              borderBottom={'1px solid #071824'}
              boxShadow={'lg'}
            >
              <Stack direction={'row'} className="sidebar-button">
                <Button
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

          <DrawerBody bgColor={'#0f212e'}>
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
                        ATP Eastbourne, Great Britain Men Singles
                      </Link>
                    </HStack>
                    <HStack
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
                        ATP Mallorca, Spain Men Singles
                      </Link>
                    </HStack>
                    <HStack
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
                        WTA Eastbourne, Great Britain Women Singles
                      </Link>
                    </HStack>
                    <HStack
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
                        Liga Pro
                      </Link>
                    </HStack>
                    <HStack
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <BiFootball color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Chinese Super League
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
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <MdSportsBasketball color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        Gaelic Football
                      </Link>
                    </HStack>
                    <HStack
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
                      p={2}
                      _active={{
                        borderRadius: '50px',
                        bgColor: '#071824',
                      }}
                    >
                      <Link>
                        <RiHonorOfKingsFill color={'white'} size={16} />
                      </Link>
                      <Link
                        _hover={{
                          textDecoration: 'none',
                        }}
                      >
                        King of Glory
                      </Link>
                    </HStack>
                    <HStack
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
                    <HStack
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
                        }}
                      >
                        $100k Race - 24 Hours
                      </Link>
                    </HStack>
                    <HStack
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
