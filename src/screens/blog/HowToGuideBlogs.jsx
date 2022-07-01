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
import guideblog1 from '../../assets/images/guideblog1.jpg';
import guideblog2 from '../../assets/images/guideblog2.jpg';
import guideblog3 from '../../assets/images/guideblog3.jpg';
import guideblog4 from '../../assets/images/guideblog4.jpg';
import guideblog5 from '../../assets/images/guideblog5.jpg';
import guideblog6 from '../../assets/images/guideblog6.jpg';
import guideblog7 from '../../assets/images/guideblog7.jpg';
import guideblog8 from '../../assets/images/guideblog8.jpg';
import guideblog9 from '../../assets/images/guideblog9.jpg';
import guideblog10 from '../../assets/images/guideblog10.jpg';
import guideblog11 from '../../assets/images/guideblog11.jpg';
import guideblog12 from '../../assets/images/guideblog12.jpg';
import LayoutComp from '../../layout/LayoutComp';
const HowToGuideBlogs = () => {
  return (
    <LayoutComp>
      <Stack >
        {' '}
        {/* header */}
        <Stack
          bgColor={'#000000e3'}
          justifyContent={'space-between'}
          direction={'row'}
          px={{ base: '4', md: '8', lg: '12', xl: '14' }}
          py={'2'}
        >
          <Center minW={'fit-content'}>
            <Text fontSize={{ base: 'md' }} fontWeight={'600'} color={'white'}>
              How to Guides
            </Text>
          </Center>
          <Stack>
            <Image src={guideblogheader} />
          </Stack>
        </Stack>
        {/* blogs */}
        <SimpleGrid
          px={{ base: '4', md: '8', lg: '12', xl: '14' }}
          py={'6'}
          columns={{ base: 1, md: 2, lg: 3 }}
          spacingX="20px"
          spacingY={'40px'}
          bg={'#000000ed'}
          margin={'0px !important'}
        >
          <BlogsCategoryCard
            heading={'How to use our vault'}
            text={
              'If you follow Stake on Twitter, you’ll know many of our giveaway prizes are sent to your vaults instead of your available balance.For new players, the concept of a vault can be quite...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog1}
          />
          <BlogsCategoryCard
            heading={'How to become VIP on Stake'}
            text={
              'Being a VIP on Stake certainly has its perks.From monetary rewards to exclusive access to some of our special promotions, being a VIP is definitely worthwhile.But how would you go about becoming a...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog2}
          />
          <BlogsCategoryCard
            heading={'How to Win Big on our Forum Challenges - Stake Blog'}
            text={
              'Did you know that Stake gives away over $5000 every single week on our forum, and all you need to do is simply play some of our games, or place some bets! These giveaways aren...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog3}
          />
          <BlogsCategoryCard
            heading={'Stake and the Blockchain'}
            text={
              'As many of you know, joining Stake can be a quite a complicated process. This article will simplify everything so anyone who wants to join Stake.com will have no problem whatsoever.Before joining, we...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog4}
          />
          <BlogsCategoryCard
            heading={'How do Stake Monthly Bonuses work?'}
            text={
              'You would have heard about our monthly bonus system by now, and if you have got lucky enough, you would have even been able to claim a bonus or two along the way, too. For...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog5}
          />
          <BlogsCategoryCard
            heading={'Conquer the Casino? How?'}
            text={
              'If you played on Stake during the latter stages of 2020, then you’ll know of the $3000 casino promotion that is run weekly called ‘Conquer the Casino’.In this promotion, we select 10 third...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog6}
          />
          <BlogsCategoryCard
            heading={'Sweet Bonanza by Pragmatic - Game Guide and Review'}
            text={
              'The developers from Pragmatic Play brought us to an imaginary land filled with sweets and candy of different colours and sizes in the Sweet Bonanza slot game.This delightful casino game is played on a...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog7}
          />
          <BlogsCategoryCard
            heading={'Monopoly Live - Guide and Review'}
            text={
              'Monopoly Live is a 3D board game, and live-dealer casino game streamed from the studios of Evolution Gaming. It’s centred around a large spinning money wheel made up of 7 different segments. Predict...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog8}
          />
          <BlogsCategoryCard
            heading={
              'The Dog House Megaways by Pragmatic - Slot Guide and Review'
            }
            text={
              'Pragmatic Play is back with yet another dog-themed slot release set in a suburban neighbourhood. Dog House Megaways features four of the cutest canines in the town. Led by a black Doberman, this furry...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog9}
          />

          <BlogsCategoryCard
            heading={'How to Buy Crypto'}
            text={
              'Buying various Cryptocurrencies through the established exchanges has always been the cheaper option. Usually, providing KYC, funding your account, and processing the bank transfer may take between a couple of days to an entire week...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog10}
          />
          <BlogsCategoryCard
            heading={'Crazy Time Guide and Review'}
            text={
              'Crazy Time is a live casino game and game show developed by Evolution Gaming. In the centre of the action is a money wheel made up of 54 different segments. The game host spins the...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog11}
          />
          <BlogsCategoryCard
            heading={
              'How does the Red Tiger Jackpot Network work? - Stake Blog'
            }
            text={
              'Casino operators and slot creators are always looking for new ways to excite their players and kept them on the edge of their seats. The widely recognized development team behind the Red Tiger brand is...'
            }
            link={'/blog/how-to-use-our-vault'}
            img={guideblog12}
          />
        </SimpleGrid>
        {/* pagination */}
        <Stack
          margin={'0px !important'}
          justifyContent={'center'}
          pt={'2'}
          pb={'8'}
          direction="row"
          spacing={4}
          align="center"
          bg={'#000000ed'}
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

export default HowToGuideBlogs;
