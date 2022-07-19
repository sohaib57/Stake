import {
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaChessQueen } from 'react-icons/fa';
import LayoutComp from '../../../layout/LayoutComp';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';
import Card from '../../ui/card/Card';
import ProviderSlider from '../home/provider/ProviderSlider';
import { useNavigate } from 'react-router-dom';
import CasinoStats from '../home/stats/CasinoStats';
const CasinoGroupLayout = ({ heading, headerImg, game }) => {
  const nav = useNavigate();
  return (  
    <LayoutComp>
      <Stack>
        {/* header */}
        <Stack
          bgColor={' #000000e3'}
          justifyContent={'space-between'}
          direction={'row'}
          px={{ base: '2', md: '8', lg: '12', xl: '14' }}
          py={'2'}
        >
          <Center>
            <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
              {heading}
            </Text>
          </Center>
          <Stack>
            <Image src={headerImg} />
          </Stack>
        </Stack>
        {/* body */}
        <Stack marginTop={'0 !important'} bgColor={'#000000ed'}>
          {/* search bar */}
          <Stack
            px={{ base: '2', md: '8', lg: '12', xl: '14' }}
            className="searchbar"
            display={{ base: 'none', md: 'flex' }}
            pt={'8'}
            pb={'6'}
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
                bgColor={'black'}
                borderRadius={'full'}
                placeholder="Search your game"
                size="md"
                fontWeight={'500'}
                fontSize={'sm'}
              />
            </InputGroup>
          </Stack>
          {/* filters */}
          <Stack
            px={{ base: '2', md: '8', lg: '12', xl: '14' }}
            pb={'2'}
            justifyContent={'space-between'}
            direction={'row'}
          >
            <Stack
              maxWidth={'fit-content'}
              direction={'row'}
              spacing={'4'}
              color="white"
              alignItems={'center'}
            >
              <HStack
                minW={'fit-content'}
                display={{ base: 'none', md: 'inherit' }}
                spacing={'2'}
              >
                <GoSettings color="#B1BAD3" fontSize={'1rem'} />
                <Text fontSize={'sm'} fontWeight={'500'}>
                  Filter By
                </Text>
              </HStack>
              <Select
                fontSize={'sm'}
                fontWeight={'500'}
                _hover={{ bg: 'black' , cursor:'pointer' }}
                _focusVisible={{}}
                bg={'black'}
                variant="filled"
                placeholder="Providers"
              >
                <option style={{ color: 'black' }}>B-Gaming</option>
                <option style={{ color: 'black' }}>Evolution</option>
                <option style={{ color: 'black' }}>Quick Spin</option>
              </Select>
            </Stack>
            <Stack
              maxWidth={'fit-content'}
              direction={'row'}
              spacing={'4'}
              color="white"
              alignItems={'center'}
            >
              <HStack
                minW={'fit-content'}
                display={{ base: 'none', md: 'inherit' }}
                spacing={'2'}
              >
                <GoSettings color="#B1BAD3" fontSize={'1rem'} />
                <Text fontSize={'sm'} fontWeight={'500'}>
                  Sort By
                </Text>
              </HStack>
              <Select
                fontSize={'sm'}
                fontWeight={'500'}
                _hover={{ bg: 'black' , cursor:'pointer' }}
                _focusVisible={{}}
                bg={'black'}
                variant="filled"
                placeholder="Popular"
              >
                <option style={{ color: 'black' }}>A-Z</option>
                <option style={{ color: 'black' }}>Z-A</option>
                <option style={{ color: 'black' }}>Featured</option>
              </Select>
            </Stack>
          </Stack>
          {/* cards */}
          <SimpleGrid
            px={{ base: '4', md: '10', lg: '14', xl: '12' }}
            w={'full'}
            minChildWidth={'130px'}
            spacingX={'0px'}
          >
            <Card img={game} />
            <Card img={game} />
            <Card img={game} />
            <Card img={game} />
            <Card img={game} />
            <Card img={game} />
            <Card img={game} />
          </SimpleGrid>
          {/* provider */}
          <Stack pt={'12'} px={{ base: '2', md: '8', lg: '12', xl: '14' }}>
            <HStack
              w={'fit-content'}
              _hover={{ cursor: 'pointer' }}
              onClick={() => nav('/providers')}
              color={'gray.400'}
              pb={'3'}
              spacing={'2'}
              alignItems={'center'}
            >
              <FaChessQueen fontSize={'1.3rem'} />

              <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                {' '}
                Providers
              </Heading>
            </HStack>
            {/* <ProviderSlider /> */}
          </Stack>
          {/* stats */}
          <Stack pb={'12'} px={{ base: '2', md: '8', lg: '12', xl: '14' }}>
            <CasinoStats />
          </Stack>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default CasinoGroupLayout;
