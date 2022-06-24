import React from 'react'
import { Stack, Img, Text, SimpleGrid , Heading } from '@chakra-ui/react'
import './BlogCard.css'

const PromotionBlogCard = ({ text, heading , fontSize , img }) => {
    return (
        <Stack margin={'0px !important'} >
            <Img src={img} className='arrow' />
            <Text color={'#A2ACC4'} >
                {text}
            </Text>
            <Heading fontSize={fontSize} color={'#FFFFFF'} >
                {heading}
            </Heading>
        </Stack>
    )
}

export default PromotionBlogCard