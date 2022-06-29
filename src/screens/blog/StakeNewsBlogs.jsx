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
import stakenewsblogs1 from '../../assets/images/stakenewsblogs1.png';
import stakenewsblogs2 from '../../assets/images/stakenewsblogs2.jpg';
import stakenewsblogs3 from '../../assets/images/stakenewsblogs3.png';
import stakenewsblogs4 from '../../assets/images/stakenewsblogs4.jpg';
import stakenewsblogs5 from '../../assets/images/stakenewsblogs5.png';
import stakenewsblogs6 from '../../assets/images/stakenewsblogs6.jpg';
import LayoutComp from '../../layout/LayoutComp';
const StakeNewsBlogs = () => {
  return (
    <LayoutComp>
      <Stack bgColor={'#1A2C38'}>
        {' '}
        {/* header */}
        <Stack
          bgColor={'#213743'}
          justifyContent={'space-between'}
          direction={'row'}
          px={{ base: '4', md: '8', lg: '12', xl: '14' }}
          py={'2'}
        >
          <Center minW={'fit-content'}>
            <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
              Stake News
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
        >
          <BlogsCategoryCard
            heading={
              'Stake.com to sponsor middleweight championship unification fight between Ryota Murata and Gennady Golovkin'
            }
            text={
              'World fastest growing crypto betting platform Stake.com announces sponsorship of middleweight championship unification fight between Ryota Murata and Gennady Golovkin'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs6}
          />
          <BlogsCategoryCard
            heading={'Launching Ripple'}
            text={
              'One of the most anticipated coins to hit our wallet, and one of the most stable coins in the industry is Ripple, now available on Stake.com'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs1}
          />

          <BlogsCategoryCard
            heading={'Stake.com integrate Tron —Press Release'}
            text={
              'Stake.com integrate Tron —Press ReleaseWell on our way to 13 billion bets, Stake has fast become the world’s biggest crypto casino since their 2017 launch.Tron is the newest addition to the...'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs3}
          />
          <BlogsCategoryCard
            heading={'How to buy crypto on Stake'}
            text={
              'Every wondered how to buy crypto on Stake? Now, you can!Stake is proud to announce a new partnership with cryptocurrency marketplace Moonpay.Moonpay will allow you to convert into cryptocurrency on Stake with just...'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs4}
          />
          <BlogsCategoryCard
            heading={'How do Stake Monthly Bonuses work?'}
            text={
              'You would have heard about our monthly bonus system by now, and if you have got lucky enough, you would have even been able to claim a bonus or two along the way, too. For...'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs5}
          />
          <BlogsCategoryCard
            heading={'How to become a VIP on Stake'}
            text={
              'Being a VIP on Stake certainly has its perks.From monetary rewards to exclusive access to some of our special promotions, being a VIP is definitely worthwhile.But how would you go about becoming a...'
            }
            link={'/blog/stakecom-sponsors'}
            img={stakenewsblogs2}
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

export default StakeNewsBlogs;
