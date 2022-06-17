import {
  Box,
  Center,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../../assets/images/slider1.jfif';
import slider2 from '../../../assets/images/slider2.jfif';
import slider3 from '../../../assets/images/slider3.jfif';
import slider4 from '../../../assets/images/slider4.jfif';
import slider5 from '../../../assets/images/slider5.jfif';
import { IoIosArrowForward, IoIosRocket } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCherry } from 'react-icons/gi';
import { MdOutlineCasino } from 'react-icons/md';
import { AiOutlineGift } from 'react-icons/ai';
import { FaGg, FaChessQueen, FaFire } from 'react-icons/fa';
import { ImFire } from 'react-icons/im';
import LayoutComp from '../../../layout/LayoutComp';
import CardSlider from '../../ui/CardSlider';
import { Link } from 'react-router-dom';
import ProviderSlider from './ProviderSlider';
const CasinoHomeComp = () => {
  const settings = {
    nextArrow: <IoIosArrowForward color="white" />,
    prevArrow: <MdArrowBackIos color="white" />,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <LayoutComp>
      <Stack py={'12'} w={'100%'} bgColor={'#1A2C38'}>
        <Stack
          px={{ base: '0', md: '8', lg: '12', xl: '16' }}
          className="slider"
        >
          <Slider {...settings}>
            <Center h={'45vh'} w={'100%'} px={'2'}>
              <Box
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgImage={slider1}
                borderRadius={'3xl'}
                w={'100%'}
                h={'full'}
              ></Box>
            </Center>
            <Center h={'45vh'} w={'100%'} px={'2'}>
              <Box
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgImage={slider2}
                borderRadius={'3xl'}
                w={'100%'}
                h={'full'}
              ></Box>
            </Center>
            <Center h={'45vh'} w={'100%'} px={'2'}>
              <Box
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgImage={slider3}
                borderRadius={'3xl'}
                w={'100%'}
                h={'full'}
              ></Box>
            </Center>
            <Center h={'45vh'} w={'100%'} px={'2'}>
              <Box
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgImage={slider4}
                borderRadius={'3xl'}
                w={'100%'}
                h={'full'}
              ></Box>
            </Center>
            <Center h={'45vh'} w={'100%'} px={'2'}>
              <Box
                bgPos={'center'}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                bgImage={slider5}
                borderRadius={'3xl'}
                w={'100%'}
                h={'full'}
              ></Box>
            </Center>
          </Slider>
        </Stack>
        <Stack
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          display={{ base: 'none', md: 'flex' }}
          pt={'12'}
          className="searchbar"
        >
          <InputGroup
            borderColor={'gray'}
            _hover={{ borderColor: 'rgb(47,69,83)' }}
          >
            <InputLeftElement
              pl={'2'}
              pointerEvents="none"
              borderRadius={'full'}
              bgColor={'transparent'}
            >
              <AiOutlineSearch color="#b1bad3" fontSize={'1.2rem'} />
            </InputLeftElement>
            <Input
              color={'white'}
              focusBorderColor="none"
              bgColor={'#0F212E'}
              borderRadius={'full'}
              placeholder="Search your game"
              size="md"
              fontWeight={'500'}
              fontSize={'sm'}
            />
          </InputGroup>
        </Stack>
        <Stack pt={'8'} className="tabs">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              marginInline={{ base: '2', md: '8', lg: '12', xl: '16' }}
              marginBottom={'3'}
              overflowX={'auto'}
              maxW={'fit-content'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
            >
              <Stack direction={'row'} p={'2'}>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <GiCherry />
                    <Text>Lobby</Text>
                  </HStack>
                </Tab>
                <Tab
                  w={'max-content'}
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <MdOutlineCasino />
                    <Text>Live Casino</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <FaGg />
                    <Text> Featured Slots</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <AiOutlineGift />
                    <Text> Game Shows</Text>
                  </HStack>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  w={'max-content'}
                  fontSize={{ base: 'sm', md: 'md' }}
                >
                  <HStack spacing={'2'}>
                    <ImFire />
                    <Text> Stake Originals</Text>
                  </HStack>
                </Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="stake-originals"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/stakeoriginals'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <ImFire fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Stake Originals
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="slots"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/stakeoriginals'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaGg fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Slots
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="provider"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/provider'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaChessQueen fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Providers
                      </Heading>
                    </HStack>
                  </Link>
                  <ProviderSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="live-casino"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/livecasino'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <MdOutlineCasino fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Live Casino
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="gameshows"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/gameshow'}
                  >
                    <HStack
                      // w={'fit-content'}
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <AiOutlineGift fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Game Shows
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="tablegames"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/tablegames'}
                  >
                    <HStack
                      // w={'fit-content'}
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaFire fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Table Games
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="tablegames"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/tablegames'}
                  >
                    <HStack
                      // w={'fit-content'}
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <IoIosRocket fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        New Releases
                      </Heading>
                    </HStack>
                  </Link>
                  <CardSlider />
                </Stack>
              </TabPanel>
              <TabPanel>
                {' '}
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="provider"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/provider'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaChessQueen fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Providers
                      </Heading>
                    </HStack>
                  </Link>
                  <ProviderSlider />
                </Stack>
              </TabPanel>
              <TabPanel>
                {' '}
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="provider"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/provider'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaChessQueen fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Providers
                      </Heading>
                    </HStack>
                  </Link>
                  <ProviderSlider />
                </Stack>
              </TabPanel>
              <TabPanel>
                {' '}
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="provider"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/provider'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaChessQueen fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Providers
                      </Heading>
                    </HStack>
                  </Link>
                  <ProviderSlider />
                </Stack>
              </TabPanel>
              <TabPanel>
                {' '}
                <Stack
                  px={{ base: '2', md: '8', lg: '12', xl: '16' }}
                  className="provider"
                >
                  <Link
                    style={{ width: 'fit-content', paddingLeft: '5px' }}
                    to={'/provider'}
                  >
                    <HStack
                      color={'gray.400'}
                      pb={'3'}
                      spacing={'2'}
                      alignItems={'center'}
                    >
                      <FaChessQueen fontSize={'1.3rem'} />

                      <Heading
                        fontWeight={'500'}
                        color={'white'}
                        fontSize={'lg'}
                      >
                        {' '}
                        Providers
                      </Heading>
                    </HStack>
                  </Link>
                  <ProviderSlider />
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default CasinoHomeComp;
