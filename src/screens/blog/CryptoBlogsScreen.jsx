import {
  Button,
  Center,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cryptoblogs1 from '../../assets/images/cryptoblogs1.jpg';
import cryptoblogs2 from '../../assets/images/cryptoblogs2.jpg';
import cryptoblogs3 from '../../assets/images/cryptoblogs3.jpg';
import cryptoblogs6 from '../../assets/images/cryptoblogs6.jpg';
import cryptoblogs7 from '../../assets/images/cryptoblogs7.jpg';
import cryptoblogs8 from '../../assets/images/cryptoblogs8.jpg';
import cryptoblogs9 from '../../assets/images/cryptoblogs9.jpg';
import cryptoblogs10 from '../../assets/images/cryptoblogs10.jpg';
import cryptoheader from '../../assets/images/cryptoheader.png';
import LayoutComp from '../../layout/LayoutComp';
import BlogsCategoryCard from '../../components/blog/BlogsCategoryCard';
const CryptoBlogsScreen = () => {
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
          <Center>
            <Text fontSize={'2xl'} fontWeight={'600'} color={'white'}>
              Crypto
            </Text>
          </Center>
          <Stack>
            <Image src={cryptoheader} />
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

export default CryptoBlogsScreen;
