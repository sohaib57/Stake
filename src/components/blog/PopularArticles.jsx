import { Divider, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import React from 'react';
import BlogsCategoryCard from './BlogsCategoryCard';
import cryptoblogs1 from '../../assets/images/cryptoblogs1.jpg';
import cryptoblogs2 from '../../assets/images/cryptoblogs2.jpg';
import cryptoblogs3 from '../../assets/images/cryptoblogs3.jpg';
const PopularArticles = () => {
  return (
    <Stack
      px={{ base: '2', md: '8', lg: '12', xl: '14' }}
      py={'6'}
      mt={'0 !important'}
      bg={'#213743'}
    >
      <Heading
        color={'white'}
        fontWeight={'500'}
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      >
        Other Popular Articles
      </Heading>
      <Divider py={'2'} />
      {/* blogs */}
      <SimpleGrid
        // px={{ base: '2', md: '8', lg: '12', xl: '14' }}
        py={'6'}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX="20px"
        spacingY={'40px'}
      >
        <BlogsCategoryCard
          heading={'How to Buy Crypto'}
          text={
            'Buying various Cryptocurrencies through the established exchanges has always been the cheaper option. Usually, providing KYC, funding your account, and processing the bank transfer may take between a couple of days to an entire week...'
          }
          link={'/blog/how-to-buy-crypto'}
          img={cryptoblogs1}
        />
        <BlogsCategoryCard
          link={'/blog/how-to-buy-crypto'}
          heading={'Stake and the Blockchain'}
          text={
            'As many of you know, joining Stake can be a quite a complicated process. This article will simplify everything so anyone who wants to join Stake.com will have no problem whatsoever.Before joining, we...'
          }
          img={cryptoblogs3}
        />

        <BlogsCategoryCard
          heading={'What Crypto does Stake offer?'}
          text={
            'When people think of cryptocurrency, the majority wouldn’t know more than one or two different types with Bitcoin, Ethereum and Ripple the most notable.But there are countless different cryptocurrencies from all around the...'
          }
          img={cryptoblogs2}
          link={'/blog/how-to-buy-crypto'}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default PopularArticles;
