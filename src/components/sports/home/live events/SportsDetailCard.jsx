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
} from '@chakra-ui/react';
import React from 'react';
import { IoMdStats } from 'react-icons/io';
const SportsDetailCard = () => {
  return (
    <Stack borderRadius={'md'} bgColor={'#213743'}>
      <Accordion allowMultiple>
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
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <Divider color={'#b1bad3'} />
            <Stack
              py={'4'}
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
                    <Text fontSize={'sm'} fontWeight="500">
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
                    <Text fontSize={'sm'} fontWeight="500">
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
                <Text
                  pb={'2'}
                  textAlign={'center'}
                  color={'#b1bad3'}
                  fontSize={'xs'}
                >
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
                      <Text fontSize={'sm'} fontWeight="500">
                        Orix Buffaloes
                      </Text>
                      <Text color={'#007bff'} fontSize={'sm'} fontWeight="700">
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
                      <Text fontSize={'sm'} fontWeight="500">
                        Orix Buffaloes
                      </Text>
                      <Text color={'#007bff'} fontSize={'sm'} fontWeight="700">
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default SportsDetailCard;
