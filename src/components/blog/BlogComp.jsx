import {
  Grid,
  GridItem,
  Heading,
  Img,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import LayoutComp from '../../layout/LayoutComp';
import BHeader from '../../assets/images/BHeader.png';
import mlbblog from '../../assets/images/mlbblog.png';
import BCard1 from '../../assets/images/Bcard1.png';
import BCard2 from '../../assets/images/Bcard2.png';
import BCard3 from '../../assets/images/Bcard3.png';
import BCard4 from '../../assets/images/Bcard4.png';
import BCard5 from '../../assets/images/Bcard5.png';
import BCard6 from '../../assets/images/Bcard6.png';
import cryptoblogs1 from '../../assets/images/cryptoblogs1.jpg';
import cryptoblogs2 from '../../assets/images/cryptoblogs2.jpg';
import cryptoblogs3 from '../../assets/images/cryptoblogs3.jpg';
import cryptoblogs4 from '../../assets/images/cryptoblogs4.jpg';
import cryptoblogs5 from '../../assets/images/cryptoblogs5.jpg';
import cryptoblogs6 from '../../assets/images/cryptoblogs6.jpg';
import cryptoblogs7 from '../../assets/images/cryptoblogs7.jpg';
import cryptoblogs8 from '../../assets/images/cryptoblogs8.jpg';
import cryptoblogs9 from '../../assets/images/cryptoblogs9.jpg';
import cryptoblogs10 from '../../assets/images/cryptoblogs10.jpg';
import '../ui/BlogCard.css';
import BlogCard from '../ui/BlogCard';
import { useNavigate } from 'react-router-dom';
import BlogsCategoryCard from './BlogsCategoryCard';

const BlogComp = () => {
  const nav = useNavigate();
  return (
    <>
      <LayoutComp>
        <Stack>
          {/* Blog Header */}
          <Stack
            position={'relative'}
            minH={'28'}
            justify={'center'}
            bgImage={BHeader}
            bgRepeat={'no-repeat'}
            bgPos={'right'}
            bgColor={'#000000e3'}
          >
            <Heading
              position={'absolute'}
              left={'10'}
              textAlign={'center'}
              color={'white'}
              size={'md'}
            >
              Blog
            </Heading>
          </Stack>
          <Stack
            _hover={{ cursor: 'pointer' }}
            onClick={() => nav('/blog/mlb-2022-weekly-preview-week-14')}
            direction={{ base: 'column', lg: 'row' }}
            py={'9'}
            px={{ base: '4', md: '6', lg: '8' }}
            bgColor={'#000000ed'}
            margin={'0px !important'}
          >
            {/* mlb Image */}
            <Stack flex={'3'} className={'arrow'}>
              <Img borderRadius={'md'} src={mlbblog} />
            </Stack>
            <Spacer flex={'0'} />
            {/* mlb Info Text */}
            <Stack flex={'2'} color={'#909cb2'}>
              <Heading
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                fontWeight={'500'}
                color={'#FFF'}
                lineHeight={'2rem'}
              >
                MLB 2022 Weekly Preview - Week 14
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                Major League Baseball is starting to heat up week in and week
                out. There is clear excitement from fans across the globe with
                most teams competing at an absurdly high level.
              </Text>
            </Stack>
          </Stack>
          {/* Category Cards */}
          <SimpleGrid
            px={{ base: '4', md: '8', lg: '12', xl: '14' }}
            pt={'4'}
            pb={'8'}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacingX="20px"
            spacingY={'40px'}
            bgColor={'#000000ed'}
            margin={'0px !important'}
          >
            <Stack onClick={() => nav('/blog/category/crypto')}>
              <BlogCard img={BCard1} name={'Crypto'} />
            </Stack>
            <Stack onClick={() => nav('/blog/category/how-to-guides')}>
              <BlogCard img={BCard2} name={'How to Guides'} />
            </Stack>
            <Stack onClick={() => nav('/blog/category/stake-news')}>
              <BlogCard img={BCard3} name={'Stake News'} />
            </Stack>
            <Stack onClick={() => nav('/promotions/category/sports')}>
              <BlogCard img={BCard4} name={'Sports'} />
            </Stack>
            <Stack onClick={() => nav('/promotions/category/casino')}>
              <BlogCard img={BCard5} name={'Casino'} />
            </Stack>
            <Stack onClick={() => nav('/blog/category/other')}>
              <BlogCard img={BCard6} name={'Other'} />
            </Stack>
          </SimpleGrid>
          {/* blogs */}
          <SimpleGrid
            px={{ base: '4', md: '8', lg: '12', xl: '14' }}
            pt={'4'}
            pb={'8'}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacingX="20px"
            spacingY={'40px'}
            bgColor={'#000000ed'}
            margin={'0px !important'}
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
              img={cryptoblogs8}
            />

            <BlogsCategoryCard
              heading={'What Crypto does Stake offer?'}
              text={
                'When people think of cryptocurrency, the majority wouldn’t know more than one or two different types with Bitcoin, Ethereum and Ripple the most notable.But there are countless different cryptocurrencies from all around the...'
              }
              img={cryptoblogs2}
              link={'/blog/how-to-buy-crypto'}
            />

            <BlogsCategoryCard
              heading={'How to buy crypto on Stake'}
              text={
                'Every wondered how to buy crypto on Stake? Now, you can!Stake is proud to announce a new partnership with cryptocurrency marketplace Moonpay.Moonpay will allow you to convert into cryptocurrency on Stake with just...'
              }
              img={cryptoblogs6}
              link={'/blog/how-to-buy-crypto'}
            />

            <BlogsCategoryCard
              heading={'How to Buy Crypto'}
              text={
                'Buying various Cryptocurrencies through the established exchanges has always been the cheaper option. Usually, providing KYC, funding your account, and processing the bank transfer may take between a couple of days to an entire week...'
              }
              link={'/blog/how-to-buy-crypto'}
              img={cryptoblogs7}
            />
            <BlogsCategoryCard
              heading={'Stake and the Blockchain'}
              text={
                'As many of you know, joining Stake can be a quite a complicated process. This article will simplify everything so anyone who wants to join Stake.com will have no problem whatsoever.Before joining, we...'
              }
              img={cryptoblogs3}
              link={'/blog/how-to-buy-crypto'}
            />
            <BlogsCategoryCard
              heading={'What Crypto does Stake offer?'}
              text={
                'When people think of cryptocurrency, the majority wouldn’t know more than one or two different types with Bitcoin, Ethereum and Ripple the most notable.But there are countless different cryptocurrencies from all around the...'
              }
              img={cryptoblogs9}
              link={'/blog/how-to-buy-crypto'}
            />
            <BlogsCategoryCard
              heading={'How to buy crypto on Stake'}
              text={
                'Every wondered how to buy crypto on Stake? Now, you can!Stake is proud to announce a new partnership with cryptocurrency marketplace Moonpay.Moonpay will allow you to convert into cryptocurrency on Stake with just...'
              }
              img={cryptoblogs10}
              link={'/blog/how-to-buy-crypto'}
            />
          </SimpleGrid>
        </Stack>
      </LayoutComp>
    </>
  );
};

export default BlogComp;
