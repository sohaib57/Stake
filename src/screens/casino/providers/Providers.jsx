import {
  Center,
  Image,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import LayoutComp from '../../../layout/LayoutComp';
import stakeExclusive from '../../../assets/images/stakeExclusive.png';
import { AiOutlineSearch } from 'react-icons/ai';
import providerslider1 from '../../../assets/images/providerslider1.jfif';
import providerslider2 from '../../../assets/images/providerslider2.jfif';
import providerslider3 from '../../../assets/images/providerslider3.png';
import providerslider4 from '../../../assets/images/providerslider4.png';
import providerslider5 from '../../../assets/images/providerslider5.png';
import providerslider6 from '../../../assets/images/providerslider6.png';
import providerslider7 from '../../../assets/images/providerslider7.png';
import providerslider8 from '../../../assets/images/providerslider8.png';
import providerslider9 from '../../../assets/images/providerslider9.png';
import providerslider10 from '../../../assets/images/providerslider10.png';
import providerslider11 from '../../../assets/images/providerslider11.png';
import providerslider12 from '../../../assets/images/providerslider12.png';
import CasinoStats from '../../../components/casino/home/stats/CasinoStats';
import { useNavigate } from 'react-router-dom';
const Providers = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      {/* header */}
      <Stack
        bgColor={'#000000e3'}
        justifyContent={'space-between'}
        direction={'row'}
        px={{ base: '2', md: '8', lg: '12', xl: '14' }}
        py={'2'}
      >
        <Center>
          <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
            Provider
          </Text>
        </Center>
        <Stack>
          <Image src={stakeExclusive} />
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
              bgColor={'#000000f2 '}
              borderRadius={'full'}
              placeholder="Search your game"
              size="md"
              fontWeight={'500'}
              fontSize={'sm'}
            />
          </InputGroup>
        </Stack>
        {/* cards */}
        <SimpleGrid
          pb={'6'}
          px={{ base: '4', md: '10', lg: '14', xl: '12' }}
          w={'full'}
          minChildWidth={'150px'}
          spacingX={'0px'}
          spacingY={'10px'}
        >
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider1}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider2}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider3}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider4}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider5}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider6}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider7}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider8}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider9}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider10}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider11}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
          <Center
            py={'3'}
            h={'80px'}
            w={'100%'}
            onClick={() => nav('/casino/group/no-limit-city')}
            px={{ base: '1', md: '2' }}
          >
            <Box
              bgPos={'center'}
              bgRepeat={'no-repeat'}
              bgSize={'cover'}
              bgImage={providerslider12}
              borderRadius={'xl'}
              w={'100%'}
              h={'full'}
              className="arrow"
            ></Box>
          </Center>
        </SimpleGrid>
        {/* stats */}
        <Stack py={'6'} px={{ base: '4', md: '10', lg: '14', xl: '12' }}>
          <CasinoStats />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default Providers;
