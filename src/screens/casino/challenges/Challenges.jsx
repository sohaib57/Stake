import React from 'react'
import { Stack } from '@chakra-ui/react'
import ChallengesHeader from '../../../components/casino/challenges/ChallengesHeader'
import ChallengesBody from '../../../components/casino/challenges/ChallengesBody'
import LayoutComp from '../../../layout/LayoutComp'
import useDocumentTitle from '../../../utils/useDocumentTitle'

const Challenges = () => {
    
    useDocumentTitle('Challenges - Stake.com')
    return (
        <LayoutComp>
            <ChallengesHeader />
            <ChallengesBody />
        </LayoutComp>
    )
}

export default Challenges