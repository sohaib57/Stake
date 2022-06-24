import { Grid, GridItem, Heading, Img, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import LayoutComp from '../../layout/LayoutComp'
import BHeader from '../../assets/images/BHeader.png'
import Tournament from '../../assets/images/tournament.png'
import BCard1 from '../../assets/images/Bcard1.png'
import BCard2 from '../../assets/images/Bcard2.png'
import BCard3 from '../../assets/images/Bcard3.png'
import BCard4 from '../../assets/images/Bcard4.png'
import BCard5 from '../../assets/images/Bcard5.png'
import BCard6 from '../../assets/images/Bcard6.png'
import '../ui/BlogCard.css'
import { IoIosArrowForward } from 'react-icons/io'



const BlogComp = () => {
    return (
        <>
            <LayoutComp>
                {/* Blog Header */}
                <Stack bgColor={'#1A2C38'}>
                    <Stack
                        position={'relative'}
                        minH={'28'}
                        justify={'center'}
                        bgImage={BHeader}
                        bgRepeat={'no-repeat'}
                        bgPos={'right'}
                        bgColor={'#213743'}
                    >
                        <Heading
                            position={'absolute'}
                            left={'10'}
                            textAlign={'center'}
                            color={'white'}
                            size={'md'}
                        >
                            Blog
                        </Heading>
                    </Stack>
                    <Stack direction={'row'} py={'9'} pl={'9'}>
                        {/* Tournament Image */}
                        <Stack flex={'3'} className={'arrow'}>
                            <Img src={Tournament} />
                        </Stack>
                        <Spacer flex={'0'} />
                        {/* Tournament Info Text */}
                        <Stack flex={'2'} color={'#909cb2'}>
                            <Heading size={'md'} color={'#FFF'} lineHeight={'2rem'}>
                                Tennis Tips and Predictions: <br />
                                Wimbledon 2022 Tournament Preview
                            </Heading>
                            <Text fontSize={'md'} >
                                Wimbledon is back and Tennis Fans are going to have a bittersweet taste in their mouth for this year’s tournament.
                            </Text>
                        </Stack>
                    </Stack>
                    {/* Category Cards */}
                    <Grid templateColumns={'repeat(3, 1fr)'} h={'auto'} gap={'4'} py={'7'} px={'9'}>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard1} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard2} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard3} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard4} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard5} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                        <GridItem>
                            <Stack  direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                                <Img src={BCard6} boxSize={'24'} borderLeftRadius={'md'} />
                                <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                                    <Text color={'white'}>HEllo</Text>
                                    <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                                </Stack>
                            </Stack>
                        </GridItem>
                    </Grid>
                </Stack>

            </LayoutComp>
        </>
    )
}

export default BlogComp