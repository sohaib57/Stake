import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Stack, Img, Text, SimpleGrid, Heading , Center , Button } from '@chakra-ui/react'
import Bcard4 from '../../../assets/images/Bcard4.png'
import Bcard5 from '../../../assets/images/Bcard5.png'
import daily from '../../../assets/images/dailyRaces.jpg'
import giveAway from '../../../assets/images/giveAway.jpg'
import conquer from '../../../assets/images/conquerTheCasino.jpg'
import outLaws from '../../../assets/images/outLaws.jpg'
import stakeEddie from '../../../assets/images/stakeVsEddie.jpg'
import jurassic from '../../../assets/images/jurassicParty.png'
import levelUp from '../../../assets/images/levelUp.png'
import Multiplier from '../../../assets/images/MultiplierRace.jpg'
import casino from '../../../assets/images/casinoChallenge.jpg'
import evolution from '../../../assets/images/Evolution.jpg'
import pragmatic from '../../../assets/images/Pragmatic.jpg'
import grassSeason from '../../../assets/images/grassSeason.jpg'
import PromotionBlogCard from '../../ui/PromotionBlogCard'


const ViewAllBody = () => {
    return (
        <Stack p={{ base: '4', lg: '10' }} spacing={'4'} bg={'#1A2C38'} margin={'0px !important'} >

            <Stack direction={'row'} justifyContent={'space-between'} spacing={'6'}  >
                <Stack flex={'1'} direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                    <Img src={Bcard5} boxSize={'24'} borderLeftRadius={'md'} />
                    <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                        <Text color={'white'}>Casino</Text>
                        <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                    </Stack>
                </Stack>
                <Stack flex={'1'} direction={'row'} borderRadius={'md'} bgColor={'#213743'} h={'24'} align={'center'}>
                    <Img src={Bcard4} boxSize={'24'} borderLeftRadius={'md'} />
                    <Stack direction={'row'} justify={'space-between'} w={'full'} align={'center'} pr={'4'} color={'#B1BAD3'} fontWeight={'bold'}>
                        <Text color={'white'}>Sports</Text>
                        <IoIosArrowForward size={'1.5rem'} className={'navigator'} />
                    </Stack>
                </Stack>
            </Stack>

            <Stack width={'100%'} >
                <Heading py={'3'} size={'md'} color={'white'} >
                    Latest Promotions
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='20px'>
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={daily} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={giveAway} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={conquer} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={outLaws} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={stakeEddie} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={jurassic} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={levelUp} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={Multiplier} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={casino} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={evolution} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={pragmatic} />
                    <PromotionBlogCard fontSize={'lg'} heading={'Stakes Daily Races '} text={'Ends at 5:00 AM 12/31/2022'} img={grassSeason} />
                </SimpleGrid>

                <Center py={'4'}>
                    <Stack direction={'row'} >
                        <Button color={'#6B767E'} variant='link'>
                            Previous
                        </Button>
                        <Button color={'white'} variant='link'>
                            Next
                        </Button>
                    </Stack>
                </Center>

            </Stack>
        </Stack>
    )
}

export default ViewAllBody