import {
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
  ButtonGroup,
  Button,
  HStack,
  Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaGripHorizontal, FaSortAlphaDown } from 'react-icons/fa';
import { HiFire } from 'react-icons/hi';
import { IoChevronBack } from 'react-icons/io5';
import SportsDetailCard from '../../../components/sports/home/SportsDetailCard';
import SportsStats from '../../../components/sports/home/SportsStats';
import LayoutComp from '../../../layout/LayoutComp';

const SportsLayoutComp = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const iconToggler = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <LayoutComp>
      <Stack
        px={{ base: '2', md: '8', lg: '12', xl: '16' }}
        py={'4'}
        bgColor={'#1A2C38'}
      >
        <Stack direction={'row'}>
          <Stack
            _hover={{ cursor: 'pointer', backgroundColor: '#0f212e' }}
            direction={'row'}
            alignItems={'center'}
            borderRadius={'md'}
            maxW={'fit-content'}
            bgColor={'#0F212E'}
            py={'3'}
            px={'5'}
          >
            <IoChevronBack
              fontWeight={'700'}
              fontSize={'1.2rem'}
              color="white"
            />
          </Stack>

          <ButtonGroup maxW={'fit-content'} size="lg" isAttached>
            <Button
              _hover={{ bgColor: 'none' }}
              borderRightRadius={'md'}
              borderRight={'1px solid gray'}
              bgColor={'#0F212E'}
              color={'white'}
              isDisabled
            >
              {name}
            </Button>
            <Button
              onClick={() => iconToggler()}
              _hover={{ cursor: 'pointer' }}
              borderLeftRadius={'md'}
              bgColor={'#3D5564'}
            >
              {toggle ? (
                <BsStarFill color={'white'} />
              ) : (
                <BsStar color={'white'} />
              )}
            </Button>
          </ButtonGroup>
        </Stack>
        <Tabs pb={'6'} variant="soft-rounded">
          <Stack
            direction={'row'}
            py={'6'}
            align={'center'}
            justify={'space-between'}
          >
            <TabList
              overflowX={'auto'}
              w={'fit-content'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
            >
              <Stack direction={'row'} p={'2'}>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  minW={'fit-content'}
                  fontSize={'sm'}
                >
                  <Text>Live & Upcoming</Text>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  minW={'fit-content'}
                  fontSize={'sm'}
                >
                  <Text>Outrights</Text>
                </Tab>
                <Tab
                  color={'white'}
                  _selected={{ color: 'white', bg: '#2F4553' }}
                  minW={'fit-content'}
                  fontSize={'sm'}
                >
                  <Text>All Baseball</Text>
                </Tab>
              </Stack>
            </TabList>
            {/* Table rows listing */}
            <Stack
              maxWidth={'fit-content'}
              direction={'row'}
              spacing={{ base: '2', md: '4', lg: '6' }}
              color="white"
              alignItems={'center'}
            >
              <FaGripHorizontal color="#B1BAD3" fontSize={'1rem'} />
              <Select
                fontSize={'sm'}
                fontWeight={'500'}
                _hover={{ bg: '#071824', cursor: 'pointer' }}
                _focusVisible={{}}
                bg={'#0F212E'}
                variant="filled"
              >
                <option style={{ color: 'black' }}>Winner</option>
                <option style={{ color: 'black' }}>Total</option>
                <option style={{ color: 'black' }}>Handicap</option>
              </Select>
            </Stack>
          </Stack>
          <TabPanels>
            {/* live & upcoming */}
            <TabPanel padding={'0'}>
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                pb={'3'}
                spacing={'2'}
                alignItems={'center'}
              >
                <HiFire fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Popular
                </Heading>
              </HStack>
              <SportsDetailCard />
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                py={'6'}
                spacing={'2'}
                alignItems={'center'}
              >
                <FaSortAlphaDown fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Alphabetical
                </Heading>
              </HStack>
              <SportsDetailCard />
            </TabPanel>
            {/* outrights */}
            <TabPanel padding={'0'}>
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                pb={'3'}
                spacing={'2'}
                alignItems={'center'}
              >
                <HiFire fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Popular
                </Heading>
              </HStack>
              <SportsDetailCard />
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                py={'6'}
                spacing={'2'}
                alignItems={'center'}
              >
                <FaSortAlphaDown fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Alphabetical
                </Heading>
              </HStack>
              <SportsDetailCard />
            </TabPanel>
            {/* All Badseball */}
            <TabPanel padding={'0'}>
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                pb={'3'}
                spacing={'2'}
                alignItems={'center'}
              >
                <HiFire fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Popular
                </Heading>
              </HStack>
              <SportsDetailCard />
              <HStack
                w={'fit-content'}
                color={'gray.400'}
                py={'6'}
                spacing={'2'}
                alignItems={'center'}
              >
                <FaSortAlphaDown fontSize={'1.4rem'} />
                <Heading fontWeight={'500'} color={'white'} fontSize={'md'}>
                  {' '}
                  Alphabetical
                </Heading>
              </HStack>
              <SportsDetailCard />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <SportsStats />
      </Stack>
    </LayoutComp>
  );
};

export default SportsLayoutComp;
