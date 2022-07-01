import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Stack, Text, Center, UnorderedList, ListItem, Img, Tag, TagLabel, HStack } from '@chakra-ui/react'
import dailyRaces from '../../../../../assets/images/dailyRaces.jpg'

const StakeRaces = () => {

    const nav = useNavigate('')

    return (
        <Stack width={'100%'} bg={'#000000ed'} py={'6'} >
            <Center width={'100%'} >
                <Stack px={'3'} justifyContent={'left'} width={{ base: '100%', lg: '50%' }} color={'#b1bad3'} spacing={'3'} >
                    <Img src={dailyRaces} />
                    <Text  >
                        December 31, 2022
                    </Text>
                    <Text fontSize={'2xl'} color={'#FFFFFF'} >
                        Stake's Daily Races
                    </Text>
                    <Text>
                        Wager now to join Stake's Daily $100,000 Race!
                    </Text>
                    <Text>
                        For every bet placed, sports or casino, you’ll climb up the Daily Race Leaderboard!
                    </Text>
                    <Text>
                        Top 5,000 racers every day will recieve prizes, based on your leaderboard position!
                    </Text>
                    <Text>
                        View the race leaderboard at the bottom of the sports or casino pages.
                    </Text>
                    <Text fontSize={'large'} color={'#FFFFFF'} >
                        How to Enter
                    </Text>
                    <UnorderedList pl={'4'}>
                        <ListItem>Simply wager and play on Stake! Once you have started wagering, you are immediately entered in the race!</ListItem>
                    </UnorderedList>
                    <HStack>
                        <Tag
                            bg={'#071824'}
                            borderRadius='full'
                            variant='solid'
                            onClick={() => nav('/promotions/category/casino')}

                        >
                            <TagLabel>Casino</TagLabel>
                        </Tag>
                        <Tag
                            bg={'#071824'}
                            borderRadius='full'
                            variant='solid'
                            onClick={() => nav('/promotions/category/sports')}
                        >
                            <TagLabel>Sports</TagLabel>
                        </Tag>
                    </HStack>
                </Stack>
            </Center>

        </Stack>
    )
}

export default StakeRaces