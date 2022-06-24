import {
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
  HStack,
  Badge,
  Text,
  Link,
  Circle,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdStats } from 'react-icons/io';
const SportsDetailCard = () => {
  return (
    <Stack borderRadius={'md'} bgColor={'#213743'}>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem borderTop={'none'} borderBottom={'none'}>
          <AccordionButton py={'4'} _hover={{}} color={'white'}>
            <Box
              fontWeight={'600'}
              fontSize={'sm'}
              color={'#d5dceb'}
              flex="1"
              textAlign="left"
            >
              Japan / Professional Baseball
            </Box>
            <Circle mr={'4'} size="23px" fontWeight={'600'} bg="#2F4553" color="white">
              <Text fontSize={'xs'}>3</Text>
            </Circle>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <Divider color={'#b1bad3'} />
            <Stack
              pt={'4'}
              pb={'2'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent={'space-between'}
            >
              <Stack className="left-section" w={{ base: '100%', md: '40%' }}>
                <HStack pb={'2'}>
                  <Badge
                    borderRadius={'sm'}
                    backgroundColor="#FE2247"
                    color={'white'}
                    fontSize={'xs'}
                    textTransform={'capitalize'}
                  >
                    Live
                  </Badge>
                  <Text color={'#b1bad3'} fontSize={'xs'}>
                    6th Inning Bottom
                  </Text>
                </HStack>
                <Stack
                  w={'full'}
                  justifyContent={'space-between'}
                  direction={'row'}
                >
                  <Link to={'/'}>
                    <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                      Orix Buffaloes
                    </Text>
                  </Link>
                  <HStack spacing={'5'}>
                    <Text color={'#FF9D00'} fontWeight={'600'} fontSize={'md'}>
                      3
                    </Text>
                    <IoMdStats color="#d5dceb" fontSize={'1rem'} />
                  </HStack>
                </Stack>
                <Stack
                  lineHeight={'1'}
                  w={'full'}
                  justifyContent={'space-between'}
                  direction={'row'}
                >
                  <Link to={'/'}>
                    <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                      Fukuoka Softbank Hawks
                    </Text>
                  </Link>
                  <Text
                    pr={'9'}
                    color={'#FF9D00'}
                    fontWeight={'600'}
                    fontSize={'md'}
                  >
                    0
                  </Text>
                </Stack>
              </Stack>
              <Stack w={{ base: '100%', md: '55%' }} className="right-section">
                <Text pb={'2'} color={'#b1bad3'} fontSize={'xs'}>
                  Winner (Incl. Extra Innings)
                </Text>
                <Stack
                  spacing={'2'}
                  alignItems={'center'}
                  direction={{ base: 'column-reverse', md: 'row' }}
                >
                  <Stack w={'full'} spacing={'2'} direction={'row'}>
                    <Stack
                      borderRadius={'md'}
                      spacing={'1.4'}
                      _hover={{ cursor: 'pointer', bgColor: '#00254d' }}
                      py={'1'}
                      px={'3'}
                      bgColor={'#071824'}
                      w={{ base: '50%', md: '45%' }}
                    >
                      <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                        Orix Buffaloes
                      </Text>
                      <Text color={'#007bff'} fontSize={'sm'} fontWeight="600">
                        1.04
                      </Text>
                    </Stack>
                    <Stack
                      borderRadius={'md'}
                      spacing={'1.4'}
                      _hover={{ cursor: 'pointer', bgColor: '#00254d' }}
                      py={'1'}
                      px={'3'}
                      bgColor={'#071824'}
                      w={{ base: '50%', md: '45%' }}
                    >
                      <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                        Fukuoka Softbank Hawks
                      </Text>
                      <Text color={'#007bff'} fontSize={'sm'} fontWeight="600">
                        1.04
                      </Text>
                    </Stack>
                  </Stack>
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#b1bad3'}>
                    +12
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              py={'4'}
              direction={{ base: 'column', md: 'row' }}
              justifyContent={'space-between'}
            >
              <Stack className="left-section" w={{ base: '100%', md: '40%' }}>
                <Stack
                  alignItems={'center'}
                  spacing={'8'}
                  w={'100%'}
                  direction={'row'}
                >
                  <HStack minW={'fit-content'} pb={'2'}>
                    <Badge
                      borderRadius={'sm'}
                      backgroundColor="#FE2247"
                      color={'white'}
                      fontSize={'xs'}
                      textTransform={'capitalize'}
                    >
                      Live
                    </Badge>
                    <Text color={'#b1bad3'} fontSize={'xs'}>
                      5th Inning Bottom
                    </Text>
                  </HStack>
                  <Divider display={{ base: 'none', md: 'inherit' }} />
                </Stack>
                <Stack
                  w={'full'}
                  justifyContent={'space-between'}
                  direction={'row'}
                >
                  <Link to={'/'}>
                    <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                      Hiroshima Toyo Carp
                    </Text>
                  </Link>
                  <HStack spacing={'5'}>
                    <Text color={'#FF9D00'} fontWeight={'600'} fontSize={'md'}>
                      2
                    </Text>
                    <IoMdStats color="#d5dceb" fontSize={'1rem'} />
                  </HStack>
                </Stack>
                <Stack
                  lineHeight={'1'}
                  w={'full'}
                  justifyContent={'space-between'}
                  direction={'row'}
                >
                  <Link to={'/'}>
                    <Text fontSize={'sm'} fontWeight="500" color={'white'}>
                      Hanshin Tigers
                    </Text>
                  </Link>
                  <Text
                    pr={'9'}
                    color={'#FF9D00'}
                    fontWeight={'600'}
                    fontSize={'md'}
                  >
                    2
                  </Text>
                </Stack>
              </Stack>
              <Stack w={{ base: '100%', md: '55%' }} className="right-section">
                <Stack
                  alignItems={'center'}
                  spacing={'8'}
                  w={'100%'}
                  direction={'row'}
                >
                  <Text
                    minW={'fit-content'}
                    w={{ base: '100%', md: 'fit-content' }}
                    pb={'2'}
                    textAlign={'center'}
                    color={'#b1bad3'}
                    fontSize={'xs'}
                  >
                    Winner (Incl. Extra Innings)
                  </Text>
                  <Divider display={{ base: 'none', md: 'inherit' }} />
                </Stack>
                <Stack
                  spacing={'2'}
                  alignItems={'center'}
                  direction={{ base: 'column-reverse', md: 'row' }}
                >
                  <Stack w={'full'} spacing={'2'} direction={'row'}>
                    <Stack
                      borderRadius={'md'}
                      spacing={'1.4'}
                      py={'1'}
                      px={'3'}
                      bgColor={'#071824'}
                      w={{ base: '50%', md: '45%' }}
                    >
                      <Text color={'#36444E'} fontSize={'sm'} fontWeight="600">
                        Hiroshima Toyo Carp
                      </Text>
                      <Text color={'#36444E'} fontSize={'sm'} fontWeight="600">
                        Suspended
                      </Text>
                    </Stack>
                    <Stack
                      borderRadius={'md'}
                      spacing={'1.4'}
                      py={'1'}
                      px={'3'}
                      bgColor={'#071824'}
                      w={{ base: '50%', md: '45%' }}
                    >
                      <Text color={'#36444E'} fontSize={'sm'} fontWeight="600">
                        Hanshin Tigers
                      </Text>
                      <Text color={'#36444E'} fontSize={'sm'} fontWeight="600">
                        Suspended
                      </Text>
                    </Stack>
                  </Stack>
                  <Text fontSize={'sm'} fontWeight={'700'} color={'#b1bad3'}>
                    +12
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default SportsDetailCard;
