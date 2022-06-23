import { Stack, Center, Image, HStack, Text, Progress, VStack } from '@chakra-ui/react'
import vip from '../../assets/images/vip-modal.png'
import { BsStar } from 'react-icons/bs'
const ProgressTab = () => {
    return (
        <Stack width={'100%'} spacing={'5'} py={'5'}  >
            <Center>
                <Image src={vip} />
            </Center>
            <Stack width={'full'} >
                <HStack justifyContent={'space-between'} color={'#fff'} lineHeight={'1.5'} fontWeight={'600'} >
                    <Text>
                        Your VIP Progress
                    </Text>
                    <Text>
                        0.00%
                    </Text>
                </HStack>

                <Progress borderRadius="1rem" bg={'#2F4553'} />

                <HStack justifyContent={'space-between'} fontWeight={'600'} >

                    <HStack>
                        <BsStar color='#2F4553' fontSize={'20px'} />
                        <Text color={'#b1bad3'} > None </Text>
                    </HStack>


                    <HStack>
                        <BsStar color='#BA9469' fontSize={'20px'} />
                        <Text color={'#b1bad3'} >   Bronze </Text>
                    </HStack>


                </HStack>

            </Stack>

            <Text color={'#b1bad3'} >
                Your progress is a sum accumulated through your wager on both our casino and sportsbook. Increasing through the tiers entitles you to bigger rewards and exclusive VIP treatment.
            </Text>

            <Stack bg={'#0f212e'} padding={'.75rem'} borderStyle={'dotted'}
                borderWidth={'2px'} >
                <Text color={'#b1bad3'} >
                    All bets settled on the sportsbook return a 3x (three times) faster rate of progression. Voided bets are excluded.
                </Text>

            </Stack>
        </Stack>
    )
}

export default ProgressTab