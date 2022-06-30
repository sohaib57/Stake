import { useState, useRef } from 'react'
import { Modal, ModalOverlay, ModalHeader, ModalFooter, ModalContent, ModalCloseButton, ModalBody } from '@chakra-ui/react'
import { SiBitcoin } from 'react-icons/si'
import { AiOutlineStar } from 'react-icons/ai'
import { RiContactsBook2Fill } from 'react-icons/ri'
import { SimpleGrid, Stack, Image, Text, HStack, Tooltip, chakra, useDisclosure } from '@chakra-ui/react'
import gulag from '../../../../assets/images/GULAG.jfif'
import CreatedByModal from './CreatedByModal'

const Card = () => {

    const [isHovering, setHovering] = useState('')

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')


    const btnRef = useRef(null)

    function handleMouseEnter() {

        setHovering(true)

    }
    function handleMouseLeave() {

        setHovering(false)

    }


    return (

        <Stack
            style={{
                position: 'relative',
                top: 0,
                top: isHovering ? '-10px' : '0px',
                transition: 'top ease 0.5s',

            }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <Stack width={'100%'}  >
                <Image src={gulag} borderTopRadius={'lg'} >

                </Image>
                <Stack bg={'#213743'} p={'4'} margin={'0px !important'} borderBottomRadius={'lg'} >
                    <Text fontSize={'md'} fontWeight={700} color={'#fff'} >
                        Remember Gulag
                    </Text>
                    {/* <HStack spacing={'0 !important'}  > */}
                    <Text color={'#b1bad3'} margin={'0px !important'}> First to hit 13,000 with min $0.10 <chakra.span width={'fit-content'} margin={'0 !important'} display={'inline-block'} > <SiBitcoin color='#ff9d00' /></chakra.span> bet
                    </Text>
                    {/* </HStack> */}
                    <Text color={'#b1bad3'} >
                        Prize
                    </Text>
                    <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="Hey, I'm here!" aria-label='A tooltip'>
                        <HStack color={'#fff'} >
                            <Text>$730.72 </Text>
                            <SiBitcoin color={'#00e701'} />
                        </HStack>
                    </Tooltip>
                    <Text color={'#b1bad3'} >
                        Created By
                    </Text>

                    <HStack>
                        <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="Bronze" aria-label='A tooltip' >

                            <chakra.span>
                                <AiOutlineStar color={'#ffb949'} size={'1rem'} />
                            </chakra.span>
                        </Tooltip>
                        <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="SportsbookManager" aria-label='A tooltip'  >
                            <chakra.span color={'#108F45'} fontSize={'1rem'} fontWeight={700} >
                                S
                            </chakra.span>
                        </Tooltip>
                        <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="SupportSenior" aria-label='A tooltip'  >
                            <chakra.span color={'#108F45'} fontSize={'1rem'} fontWeight={700} >
                                S
                            </chakra.span>
                        </Tooltip>
                        <Tooltip bg={'white'} textAlign={'center'} color={'black'} placement='top' label="CommunityManager" aria-label='A tooltip'  >
                            <chakra.span fontSize={'1rem'} color={'#D98B0D'} fontWeight={700} >
                                C
                            </chakra.span>
                        </Tooltip>
                        <chakra.span onClick={onOpen} color={'white'} fontSize={'1rem'} fontWeight={700} >
                            Caelum
                        </chakra.span>
                    </HStack>

                    {/* Caelum Modal */}

                    <Modal
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        isOpen={isOpen}
                        scrollBehavior={scrollBehavior}
                        size={'lg'}

                    >
                        <ModalOverlay />
                        <ModalContent bg={'#1A2C38'} >
                            <ModalHeader>
                                <Stack direction={'row'} alignItems={'center'} >
                                    <RiContactsBook2Fill color={'#B1BAD3'} />
                                    <Text color={'white'} >  Caelum </Text>
                                </Stack>
                            </ModalHeader>
                            <ModalCloseButton bg={'white'} color={'black'} />
                            <ModalBody  >
                                <CreatedByModal />
                            </ModalBody>

                        </ModalContent>
                    </Modal>




                </Stack>
            </Stack>
        </Stack>
    )
}

export default Card