import {
  Stack,
  Text,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  Divider,
  Image,
  chakra,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { RiShareBoxFill } from 'react-icons/ri';
import bitcoin from '../assets/images/bitcoin.svg';
import bit from '../assets/images/bit.svg';
import dogecoin from '../assets/images/dogecoin.svg';
import ethereum from '../assets/images/ethereum.svg';
import litecoin from '../assets/images/litecoin.svg';
import eos from '../assets/images/eos.svg';
import eighteen from '../assets/images/eighteen.svg';
import ripple from '../assets/images/ripple.svg';
import gumble from '../assets/images/gumble.svg';
import tron from '../assets/images/tron.svg';
import sponser1 from '../assets/images/sponser1.svg';
import sponser2 from '../assets/images/sponser2.svg';
import sponser3 from '../assets/images/sponser3.svg';
import sponser4 from '../assets/images/sponser4.png';
import sponser5 from '../assets/images/sponser5.png';
import stake from '../assets/images/stake.png';
const Footer = () => {
  return (
    <Stack
      py={'12'}
      px={{ base: '4', sm: '6', md: '8', lg: '16' }}
      w={'100%'}
      bgColor={'#071D2A'}
      marginTop={'0 !important'}
    >
      <SimpleGrid
        pb={'6'}
        className="links"
        w={'full'}
        minChildWidth={'120px'}
        spacing={'40px'}
      >
        <Stack className="sports">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            Sports
          </Heading>
          <Stack spacing={'0.8'}>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Home
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Live
              </Text>
            </Link>
            <Link to={'/sportsrules'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Sports Rules
              </Text>
            </Link>
          </Stack>
        </Stack>
        <Stack className="casino">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            Casino
          </Heading>
          <Stack spacing={'0.8'}>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Games
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                VIP Club
              </Text>
            </Link>
            <Link to={'/sportsrules'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Promotions
              </Text>
            </Link>
          </Stack>
        </Stack>
        <Stack className="support">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            Support
          </Heading>
          <Stack spacing={'0.8'}>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Fairness
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Affiliate
              </Text>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Gamble Aware
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Official Mirrors
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                LiveSupport
              </Text>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Help Center
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
          </Stack>
        </Stack>
        <Stack className="community">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            Community
          </Heading>
          <Stack spacing={'0.8'}>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Blog
              </Text>
            </Link>

            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Forum
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Facebook
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Twitter
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Instagram
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Youtube
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Shop
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
          </Stack>
        </Stack>
        <Stack className="about-us">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            About Us
          </Heading>
          <Stack spacing={'0.8'}>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Privacy Policy
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Licenses
              </Text>
            </Link>
            <Link to={'/'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                AML Policy
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Terms of Service
              </Text>
            </Link>
            <Link to={'/live'}>
              <Text
                _hover={{ color: 'white' }}
                fontWeight={'500'}
                fontSize={'sm'}
                color={'#b1bad3'}
              >
                Self Exclusion
              </Text>
            </Link>
            <Link to={'/sportsrules'}>
              <HStack>
                <Text
                  _hover={{ color: 'white' }}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  color={'#b1bad3'}
                >
                  Primedice
                </Text>
                <RiShareBoxFill fontSize={'1rem'} color="#b1bad3" />
              </HStack>
            </Link>
          </Stack>
        </Stack>
        <Stack className="language">
          <Heading pb={'2'} fontSize={'md'} color={'white'}>
            Language
          </Heading>
          <Stack spacing={'1.5'}>
            <Select
              w={'fit-content'}
              _active={{}}
              _hover={{ cursor: 'pointer' }}
              variant={'unstyled'}
              size={'md'}
              color={'white'}
            >
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option1"
              >
                English
              </option>
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option2"
              >
                French
              </option>
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option3"
              >
                Dutch
              </option>
            </Select>
            <Text
              _hover={{ color: 'white' }}
              fontWeight={'500'}
              fontSize={'sm'}
              color={'white'}
            >
              Odds
            </Text>
            <Select
              w={'fit-content'}
              _active={{}}
              _hover={{ cursor: 'pointer' }}
              variant={'unstyled'}
              size={'md'}
              color={'white'}
            >
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option1"
              >
                Decimal
              </option>
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option2"
              >
                Fractional
              </option>
              <option
                style={{ color: 'black', fontWeight: '400' }}
                value="option3"
              >
                American
              </option>
            </Select>
          </Stack>
        </Stack>
      </SimpleGrid>
      <Divider />
      <SimpleGrid
        pr={{ base: '4', md: '0' }}
        py={'8'}
        className="crypto"
        w={'full'}
        minChildWidth="110px"
        spacingX="48px"
        spacingY={'40px'}
      >
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={bitcoin} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={eos} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={ethereum} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={ripple} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={dogecoin} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={litecoin} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={tron} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={bit} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={gumble} />
        </Stack>
        <Stack width={'24'}>
          <Image h={'full'} w={'full'} src={eighteen} />
        </Stack>
      </SimpleGrid>
      <Divider />
      <SimpleGrid
        px={'2'}
        pt={'8'}
        className="crypto"
        w={'full'}
        minChildWidth="110px"
        spacingX="48px"
        spacingY={'40px'}
      >
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={sponser3} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={sponser4} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={sponser1} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={sponser2} />
        </Stack>
        <Stack width={'32'}>
          <Image h={'full'} w={'full'} src={sponser5} />
        </Stack>
      </SimpleGrid>
      <Stack alignItems={'center'} className={'copyright'}>
        <Stack w={'44'}>
          <Link to={'/'}>
            {' '}
            <Image h={'full'} w={'full'} src={stake} />
          </Link>
        </Stack>
        <Text textAlign={'center'} mt={'0 !important'} color={'#b1bad3'} fontSize={{sm:'sm',md:'md'}}>
          © 2022 Stake.com | All Rights Reserved.
        </Text>
        <Text textAlign={'center'} lineHeight={'1'} color={'#b1bad3'} fontSize={{sm:'sm',md:'md'}}>
          1 BTC = $20,404.00
        </Text>
      </Stack>
      <Stack py={'8'} textAlign={'center'}>
        <Text lineHeight={'1.5'} color={'#b1bad3'} fontSize={'xs'}>
          Stake is owned and operated by Medium Rare N.V., registration number:
          145353, registered address: Fransche Bloemweg, 4 Willemstad Curaçao.
          Contact us at support@stake.com. Payment agent company is Medium Rare
          Limited with address 7-9 Riga Feraiou, LIZANTIA COURT, Office 310,
          Agioi Omologites, 1087 Nicosia, Cyprus and Registration number: HE
          410775 Stake is authorized and regulated by the Government of Curacao
          and operates under License No. 8048/JAZ issued to Antillephone. Stake
          has passed all compliance and is legally authorized to conduct gaming
          operations for all games of chance and wagering.
        </Text>
      </Stack>
      <Text fontSize={'xs'} textAlign={'center'} color={'#b1bad3'}>
        Support<chakra.span color={'white'}> support@stake.com</chakra.span> |
        Partners <chakra.span color={'white'}>partners@stake.com</chakra.span> |
        Press <chakra.span color={'white'}>press@stake.com</chakra.span>
      </Text>
    </Stack>
  );
};

export default Footer;
