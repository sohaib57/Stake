import {
  Button,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import BlogsCategoryCard from '../../components/blog/BlogsCategoryCard';
import guideblogheader from '../../assets/images/guideblogheader.png';
import otherblogs1 from '../../assets/images/otherblogs1.png';
import otherblogs2 from '../../assets/images/otherblogs2.jpg';
import LayoutComp from '../../layout/LayoutComp';
const OtherBlogs = () => {
  return (
    <LayoutComp>
      <Stack bgColor={'#1A2C38'}>
        {' '}
        {/* header */}
        <Stack
          bgColor={'#213743'}
          justifyContent={'space-between'}
          direction={'row'}
          px={{ base: '2', md: '8', lg: '12', xl: '14' }}
          py={'2'}
        >
          <Center>
            <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
              Other
            </Text>
          </Center>
          <Stack>
            <Image src={guideblogheader} />
          </Stack>
        </Stack>
        {/* blogs */}
        <SimpleGrid
          px={{ base: '2', md: '8', lg: '12', xl: '14' }}
          py={'6'}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingX="20px"
          spacingY={'40px'}
        >
          <BlogsCategoryCard
            heading={
              'UFC®, the World’s Premier Mixed Martial Arts Organization, Today Announced a New Partnership with Stake.com, the World’s Largest Cryptocurrency Casino and Sportsbook'
            }
            text={
              'Las Vegas – UFC®, the world’s premier mixed martial arts organization, today announced a new partnership with Stake.com, the world’s largest cryptocurrency casino and sportsbookUnder the terms of the agreement, Stake.com...'
            }
            link={'/blog/stakecom-sponsors'}
            img={otherblogs1}
          />
          <BlogsCategoryCard
            heading={'How to Win Big on our Forum Challenges - Stake Blog'}
            text={
                'Did you know that Stake gives away over $5000 every single week on our forum, and all you need to do is simply play some of our games, or place some bets! These giveaways aren...'
            }
            link={'/blog/stakecom-sponsors'}
            img={otherblogs2}
          />

         
        </SimpleGrid>
        {/* pagination */}
        <Stack
          justifyContent={'center'}
          pt={'2'}
          pb={'8'}
          direction="row"
          spacing={4}
          align="center"
        >
          <Button isDisabled color={'#8B95AB'} variant="link">
            Previous
          </Button>
          <Button color={'white'} variant="link">
            Next
          </Button>
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default OtherBlogs;
