import {
  Button,
  Center,
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
import LayoutComp from '../../../layout/LayoutComp';
import stakeoriginal from '../../../assets/images/stakeoriginal.png';
import cardslider5 from '../../../assets/images/cardslider5.jfif';
import { AiOutlineSearch } from 'react-icons/ai';
import {GoSettings} from 'react-icons/go'
import Card from '../../../components/ui/card/Card';
const StakeOriginalsScreen = () => {
  return (
    <LayoutComp>
      <Stack>
        {/* header */}
        <Stack
          bgColor={'#213743'}
          justifyContent={'space-between'}
          direction={'row'}
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          py={'3'}
        >
          <Center>
            <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
              Stake Originals
            </Text>
          </Center>
          <Stack>
            <Image src={stakeoriginal} />
          </Stack>
        </Stack>
        {/* body */}
        <Stack
          px={{ base: '2', md: '8', lg: '12', xl: '16' }}
          marginTop={'0 !important'}
          bgColor={'#1A2C38'}
        >
          {/* search bar */}
          <Stack
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
                bgColor={'#0F212E'}
                borderRadius={'full'}
                placeholder="Search your game"
                size="md"
                fontWeight={'500'}
                fontSize={'sm'}
              />
            </InputGroup>
          </Stack>
          <Stack pb={'2'} justifyContent={'space-between'} direction={'row'}>
            <Button color={'white'} _hover={{}} _focus={{}} bgColor={'#071824'}>
              View All Providers
            </Button>
            <Stack
              maxWidth={'fit-content'}
              direction={'row'}
              spacing={'4'}
              color="white"
              alignItems={'center'}
            >
              <HStack spacing={'1.5'}>
              <GoSettings fontSize={'1.1rem'} />
              <Text fontSize={'md'}>SortBy</Text>
              </HStack>
              <Select
                _hover={{ bg: '#071824' }}
                _focusVisible={{}}
                bg={'#0F212E'}
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
          <SimpleGrid w={'full'} minChildWidth={'130px'} spacingX={'0px'}>
            <Card img={cardslider5} />
            <Card img={cardslider5} />
            <Card img={cardslider5} />
            <Card img={cardslider5} />
            <Card img={cardslider5} />
            <Card img={cardslider5} />
            <Card img={cardslider5} />
          </SimpleGrid>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default StakeOriginalsScreen;
