import {
  Button,
  Heading,
  Img,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import vault from '../../assets/images/vault.jpg';
import PopularArticles from '../../components/blog/PopularArticles';
import LayoutComp from '../../layout/LayoutComp';
const HowtoUseVault = () => {
  const nav = useNavigate();
  return (
    <LayoutComp>
      <Stack alignItems={'center'} bgColor={'#1A2C38'} py={'4'} px={'4'}>
        <Stack w={{base:'100%',md:'50%'}}>
          <Heading color={'white'} fontSize={{base:'lg',md:'xl',lg:'2xl'}}>How to use our vault</Heading>
          {/* Publish Date and Social */}
          <Stack
            direction={'row'}
            color={'#909cb2'}
            justify={'space-between'}
            align={'center'}
          >
            <Text>Caelum - April 30, 2021</Text>
            <Stack direction={'row'}>
              <Button
                bgColor={'#0f212e'}
                _hover={{ bgColor: '#071824', color: 'white' }}
                borderLeftRadius={'full'}
                borderRightRadius={'full'}
                size={'sm'}
              >
                <FaFacebookF />
              </Button>
              <Button
                bgColor={'#0f212e'}
                _hover={{ bgColor: '#071824', color: 'white' }}
                borderLeftRadius={'full'}
                borderRightRadius={'full'}
                size={'sm'}
              >
                <FaTwitter />
              </Button>
            </Stack>
          </Stack>
          <Img src={vault} borderRadius={'md'} my={'4 !important'} />
          <Text color={'#909cb2'}>
            If you follow Stake on Twitter, you’ll know many of our giveaway
            prizes are sent to your vaults instead of your available balance.
            <br />
            <br />
            For new players, the concept of a vault can be quite confusing. On
            some sites, there is only the one place to store your credits
            whereas on Stake, you can keep credit safe in a vault as well as
            some in your available balance.
            <br />
            <br />
            But how exactly does one use the vault? Where can it be accessed?
            What are the advantages of what is essentially, an on site bank
            account? <br />
            <br />
            Let us tell you.
            <br />
            <br />
            <Text />
            <Heading fontSize={'lg'} color={'white'}>
              What you need to know
            </Heading>
            For most players who gamble online, being able to withdraw and
            deposit money through a site is second nature. Other sites may
            differ in the way deposits and withdrawals work and how they appear,
            but it’s fairly easy to figure out.
            <br />
            <br />
            Stake is no exception.
            <br />
            <br />
            Firstly, any deposits that you make onto the site will go to your
            available balance. From there, you can decide to use your money
            however you feel.
            <br />
            <br />
            If you’re playing cleverly, then you can set a limit for yourself
            and put some in your vault for safekeeping next time you come to the
            site.
            <br />
            <br />
            Secondly, if you follow Stake on Twitter and are lucky enough to win
            a special giveaway, any bonuses will be sent to your vault, not the
            available balance.
            <br />
            <br />
            Credit can be sent directly to your available balance sometimes.
            This would be through tips or rain from other players or staff or if
            you request it to go straight to available balance.
            <br />
            <br />
            99% of the time though, giveaway prizes will be sent to your vault.
            <br />
            <br />
            <Heading fontSize={'lg'} color={'white'}>
              How do I access the vault?
            </Heading>
            It’s really very simple.
            <br />
            <br />
            Below is a screenshot of a standard Stake home page. In the top
            right of the screen between the search bar and the chat button is a
            human icon.
            <br />
            <br />
            is the most convenient option, though there is a fee for this type
            of transaction. Verified vendors and exchanges are cheap and secure
            ways but require setting up an account. For this ease and
            convenience, they require identity verification to comply with local
            and international regulations.
            <br />
            <br />
            If you have dealt with cryptocurrencies before and your primary
            focus is privacy, you can use an ATM or look at the private methods
            on OTC platforms.
            <br />
            <br />
            Congratulations, now you have all the instruments to buy and invest
            in the various cryptocurrencies. If you are using a web wallet or a
            third-party service, make sure that you transfer to your Stake
            wallet. You will be able to hold onto, trade and use cryptocurrency
            on Stake according to your preference.
            <br />
            <br />
            This guide should help cryptocurrency buyers across the world,
            though some countries have their own unusual ways of purchasing
            cryptocurrencies. Here at Stake we strive to keep our players
            updated and informed.
          </Text>
          {/* tags */}
          <Stack direction={'row'} pt={'2'}>
            <Tag
              p={'2'}
              color={'white'}
              _hover={{ cursor: 'pointer', bgColor: '#071824' }}
              size={'sm'}
              borderRadius={'full'}
              bgColor={'#0f212e'}
              onClick={() => nav('/blog/category/crypto')}
            >
              Crypto
            </Tag>
            <Tag
              p={'2'}
              color={'white'}
              _hover={{ cursor: 'pointer', bgColor: '#071824' }}
              size={'sm'}
              borderRadius={'full'}
              bgColor={'#0f212e'}
              onClick={() => nav('/blog/category/how-to-guides')}
            >
              How to Guides
            </Tag>
          </Stack>
        </Stack>
      </Stack>
      <PopularArticles />
    </LayoutComp>
  );
};

export default HowtoUseVault;
