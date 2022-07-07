import React from 'react'
import {
    Stack, Text, List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'


const RetentionProgram = () => {
    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}color={'white'} >
            <Stack direction={'column'} spacing={'4'}>
                <Text>
                    At Stake, first priority has always been and will always be player satisfaction. This is the core of our long term strategy for our users, interacting with the platform as players and as affiliates. We strive to achieve player satisfaction through unique programs and campaigns that reward our players.

                </Text>
                <Text>
                    These programs provide additional funds and incentives to our players which not only provides for a better gambling experience but also contributes to increasing your overall affiliate commission earnings.
                </Text>
                <Text>
                    These programs include:
                </Text>
                <UnorderedList  pl='6' >
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                <Text>
                    With this unique approach, your commission is based off of the house edge after these costs have been realised. Depending on the extent of what players receive as benefits, the house edge commission you receive will come out to roughly 45% less of the house edge advertised on any of our games.
                </Text>
                <Text>
                    If you would like a detailed breakdown on how these costs are calculated, feel free to contact support to be put in touch with an affiliate manager.
                </Text>

                <Stack border={'1px dotted white'} >
                    <Text p={'2'}>
                        The retention program is utilised for your affiliates on both the Sportsbook and Casino, however the costs are already absorbed before calculating the affiliate commission on Sportsbook bets so that we can set a standard rate of 3% assumed margin.
                    </Text>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default RetentionProgram