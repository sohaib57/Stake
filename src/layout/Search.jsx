import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Select,
  Input,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <VStack justifyContent={'center'} onClick={onOpen} ref={btnRef}>
        <BsSearch color="white" size={15} />
        <Text
          color="white"
          fontWeight={'700'}
          fontSize={'sm'}
          mt={'0 !important'}
        >
          Search
        </Text>
      </VStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Stack bgColor={'#0f212e'}>
            <DrawerCloseButton color={'white'} />
            <DrawerHeader
              p={5}
              borderBottom={'1px solid #071824'}
              boxShadow={'lg'}
            >
              <HStack>
                <BsSearch color="white" size={15} />
                <Text
                  color="white"
                  fontWeight={'700'}
                  fontSize={'12px'}
                  mt={'0 !important'}
                >
                  Search
                </Text>
              </HStack>
            </DrawerHeader>
          </Stack>

          <DrawerBody bgColor={'#1a2c38'}>
            <HStack spacing={0} mt={3}>
              <Input
                bgColor={'#0f212e'}
                border={'1px solid #2f4553'}
                borderLeftRadius={'50px'}
                placeholder="Search your event"
                fontSize={'sm'}
                fontWeight={'700'}
              />
              <Select
                border={'1px solid #2f4553'}
                width={{ base: '50%', sm: '35%' }}
                fontSize={'sm'}
                fontWeight={'600'}
                bgColor={'#0f212e'}
                borderRightRadius={'50px'}
                color={'white'}
                bg={'transparent'}
                className="select"
                _focusVisible={{
                  boxShadow: 'none',
                }}
              >
                <option value="option1">Sports</option>
                <option value="option2">Casino</option>
              </Select>
            </HStack>
            <Text
              fontSize={'sm'}
              fontWeight={'600'}
              color={'white'}
              textAlign={'center'}
              mt={5}
            >
              Search requires at least 3 characters.
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Search;
