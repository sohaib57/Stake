import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Select,
  Input,
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
} from '@chakra-ui/react';
import { BsChatDotsFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { useDisclosure } from '@chakra-ui/react';

const Chat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        onClick={onOpen}
        ref={btnRef}
        color={{base: 'white', md: 'black'}}
      >
        <BsChatDotsFill color={{base: 'white', md: 'black'}} size={15} />
        <Text
          color={{ base: 'white', md: 'black' }}
          fontWeight={'700'}
          fontSize={{ base: 'xs', md: 'sm' }}
          mt={'0 !important'}
        >
          Chat
        </Text>
      </Stack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base:'full',md:'sm'}}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Stack bgColor={'#000000ed'}>
            <DrawerCloseButton color={'white'} />
            <DrawerHeader
              p={1}
              borderBottom={'1px solid #071824'}
              boxShadow={'lg'}
            >
              <Stack>
                <Select
                  placeholder="Chat: Sports"
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
                    English
                  </option>
                  <option value="option2" className="select">
                    Deutsch
                  </option>
                  <option value="option3" className="select">
                    Espa??ol
                  </option>
                  <option value="option3" className="select">
                    Fran??ais
                  </option>
                  <option value="option3" className="select">
                    ??????????????????
                  </option>
                  <option value="option3" className="select">
                    Indonesi
                  </option>
                </Select>
              </Stack>
            </DrawerHeader>
          </Stack>

          <DrawerBody bgColor={'#000000ed'}>
            <Stack gap={2}>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
              <Stack bgColor={'black'} p={2} rounded={'md'}>
                <HStack>
                  <AiOutlineStar color={'#ffb949'} size={16} />
                  <Text color={'#b1bad3'} fontSize={'sm'} fontWeight={'600'}>
                    caveman01:
                  </Text>
                  <Text color={'white'} fontSize={'sm'} fontWeight={'600'}>
                    good afternoon kurt
                  </Text>
                </HStack>
              </Stack>
            </Stack>
          </DrawerBody>
          <DrawerFooter bgColor={'black'}>
            <Stack width={'100%'} direction={'column'}>
              <Stack width={'100%'}>
                <Input
                  width={'100%'}
                  bgColor={'black'}
                  border={'1px solid #2f4553'}
                  placeholder="Type your message"
                  fontSize={'sm'}
                  fontWeight={'600'}
                />
              </Stack>
              <Stack width={'100%'} direction={'row'}>
                <HStack>
                  <GoPrimitiveDot color="#1fff20" />
                  <Text color={'#b1bad3'} fontSize={'xs'} fontWeight={'700'}>
                    Online: 8,765
                  </Text>
                </HStack>
                <Spacer />
                <HStack gap={2}>
                  <Text color={'#b1bad3'} fontSize={'xs'} fontWeight={'700'}>
                    160
                  </Text>
                  <RiFilePaper2Fill color="#b1bad3" />
                  <Button bgColor={'#1fff20'} size={'sm'}>
                    Send
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chat;
