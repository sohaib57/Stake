import React from 'react';
import { Stack, Img, Text, Heading } from '@chakra-ui/react';
import '../ui/BlogCard.css';
import { useNavigate } from 'react-router-dom';
const BlogsCategoryCard = ({ text, heading, img, link }) => {
  const nav = useNavigate();
  return (
    <Stack
   
      _hover={{ cursor: 'pointer' }}
      onClick={() => nav(link)}
      margin={'0px !important'}
    >
      <Img borderRadius={'md'} src={img} className="arrow" />
      <Heading
        lineHeight={'1.5'}
        fontFamily={'sans-serif'}
        fontSize={'md'}
        color={'#FFFFFF'}
      >
        {heading}
      </Heading>
      <Text fontFamily={'body'} fontSize={'sm'} color={'#A2ACC4'}>
        {text}
      </Text>
    </Stack>
  );
};

export default BlogsCategoryCard;
