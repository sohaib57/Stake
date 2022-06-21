import React from 'react'
import { Stack } from '@chakra-ui/react'
import ChallengesHeader from '../../../components/casino/challenges/ChallengesHeader'
import ChallengesBody from '../../../components/casino/challenges/ChallengesBody'

const Challenges = () => {
    return (
        <Stack>
            <ChallengesHeader />
            <ChallengesBody />
        </Stack>
    )
}

export default Challenges