import React from 'react';
import {
  Stack,
  Img,
  Select,
  HStack,
  Button,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
const ForgotPasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        textAlign={'center'}
        _hover={{ cursor: 'pointer' }}
        fontWeight={'500'}
        fontSize={'sm'}
        color={'white'}
        onClick={onOpen}
      >
        Forgot Password
      </Text>
      <Modal size={'sm'} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={'#000000e3'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <HStack>
                <AiFillSetting color="#B1BAD3" fontSize={'1.5rem'} />
                <Text fontWeight={'500'} fontSize={'md'} color={'white'}>
                  Forgot Password
                </Text>
              </HStack>
              <ModalCloseButton _hover={{}} color={'white'} />
            </Stack>
          </ModalHeader>

          <ModalBody pt={'8'} bg={'#000000ed'}>
            <FormControl isRequired>
              <FormLabel htmlFor="email" color={'#B1BAD3'}>
                Email
              </FormLabel>
              <Input
                color={'white'}
                focusBorderColor="none"
                bgColor={'#000000ed'}
                borderRadius={'sm'}
                borderColor={'gray'}
                size="md"
                fontWeight={'500'}
                fontSize={'sm'}
              />
            </FormControl>
            <Button
              mt={'6'}
              mb={'4'}
              py={'7'}
              w={'full'}
              _active={{}}
              _focus={{}}
              _hover={{}}
              borderRadius={'sm'}
              bgColor={'#00e701'}
              color={'#013e01'}
            >
              Recover Password
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ForgotPasswordModal;
