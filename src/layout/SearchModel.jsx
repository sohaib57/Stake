import React from 'react';
import {
  Button,
  Heading,
  Stack,
  HStack,
  VStack,
  Select,
  Input,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { ImFire } from 'react-icons/im';
import CardSlider from '../components/ui/card slider/CardSlider';

const SearchModel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        display={{ base: 'none', md: 'inherit', lg: 'inherit' }}
        onClick={onOpen}
        cursor={'pointer'}
      >
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

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'}>
        <ModalOverlay />

        <ModalContent>
          <ModalBody bgColor={'#000000ed'}>
            <HStack spacing={0} mt={3}>
              <InputGroup>
                <Input
                  bgColor={'black'}
                  border={'1px solid #2f4553'}
                  borderLeftRadius={'50px'}
                  placeholder="Search your event"
                  fontSize={'sm'}
                  fontWeight={'700'}
                  borderRight={'none'}
                  _focus={{}}
                  _focusVisible={{}}
                />
                <InputRightAddon
                  borderRightRadius={'none'}
                  borderLeft={'none'}
                  width={'fit-content'}
                  px={5}
                  bgColor={'black'}
                  children={
                    <ModalCloseButton mb={'8px'} _focus={{}} color={'white'} />
                  }
                />
              </InputGroup>
              <Select
                border={'1px solid #2f4553'}
                width={{ base: '50%', sm: '35%' }}
                fontSize={'sm'}
                fontWeight={'600'}
                bgColor={'black'}
                borderRightRadius={'50px'}
                color={'white'}
                bg={'transparent'}
                _focusVisible={{
                  boxShadow: 'none',
                }}
              >
                <option value="option1" className="select">
                  Sports
                </option>
                <option value="option2" className="select">
                  Casino
                </option>
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

            <Stack
            pt={'100px'}
                className="Recommended"
                px={{ base: '2', md: '8', lg: '12', xl: '16' }}
              >
                <HStack
                  w={'fit-content'}
                  _hover={{ cursor: 'pointer' }}
                  color={'gray.400'}
                  pb={'3'}
                  spacing={'2'}
                  alignItems={'center'}
                >
                  <ImFire fontSize={'1.3rem'} />
                  <Heading fontWeight={'500'} color={'white'} fontSize={'lg'}>
                    {' '}
                    Recommended
                  </Heading>
                </HStack>
                <CardSlider />
              </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModel;
