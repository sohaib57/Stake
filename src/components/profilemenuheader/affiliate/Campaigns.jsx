import React from 'react'
import {
  Stack, Select, Text, Table, Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Center,
  Button,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input
} from '@chakra-ui/react'

const Campaigns = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
      <Stack direction={'column'} spacing={'4'}>



        {/* Campaigns Table */}


        <TableContainer>
          <Table variant='striped' colorScheme='black'>
            <Thead>
              <Tr>
                <Th textAlign={'center'} >Username</Th>
                <Th textAlign={'center'} >Registered</Th>
                <Th textAlign={'center'} >Total Deposits</Th>
                <Th textAlign={'center'} >Last Deposit</Th>
                <Th textAlign={'center'} >Wagered</Th>
                <Th textAlign={'center'} >Commission</Th>
              </Tr>
            </Thead>
            <Tbody>


            </Tbody>

          </Table>
        </TableContainer>

        {/* Accordion */}

        <Accordion
          p={'1'}
          width={'inherit'}
          boxShadow="md"
          allowMultiple
          bg={'#2f3640'}

        >
          <AccordionItem border={'0px !important'}>
            <AccordionButton width={'100%'}>
              <Stack
                width={'full'}
                direction={'row'}
                justifyContent={'space-between'}
                color='white'
              >
                <HStack >
                  <Text>SohaibAshraf</Text>
                </HStack>
                <Text>
                  Commission: 0.00000000
                </Text>
                <AccordionIcon color={'white'} />
              </Stack>
            </AccordionButton>
            <AccordionPanel borderTop={'1px solid grey'} pb={4}>
              <Stack width={'100%'} color='white' >
                <SimpleGrid columns={[2, null, 5]} spacing='40px'>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                  <Stack>
                    <Text>
                      Campaign Hits
                    </Text>
                    <Text>
                      0
                    </Text>

                  </Stack>
                </SimpleGrid>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {/* Previous and next button */}

        <Center>
          <Stack direction={'row'} color={'black'}   >
            <Button  >
              Previous
            </Button>
            <Button>
              Next
            </Button>
          </Stack>
        </Center>


        {/* Modal Button */}

        <Button onClick={onOpen} width={'fit-content'} >  Create New Campaign </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  bg={'black'} color={'white'}>
            <ModalHeader>Create Campaign</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack >

                <Text>
                  Campaign Name
                </Text>
                <Input />
                <Text>
                  Code (Campaign ID)
                </Text>
                <Input />

                <Button color={'black'} >
                  Create Campaign
                </Button>


              </Stack>

            </ModalBody>

          </ModalContent>
        </Modal>



      </Stack>
    </Stack>
  )
}

export default Campaigns