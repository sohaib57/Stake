import { Button, ChakraProvider, Heading, Img, Link, ListItem, OrderedList, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import LayoutComp from '../../layout/LayoutComp'
import BuyCrypto from '../../assets/images/buyCrypto.jpg'

const BuyCryptoComp = () => {
    return (
        <>
            <LayoutComp>
                <VStack bgColor={'#1A2C38'} py={'4'}>
                    <Stack w={'50%'}>
                        <Heading color={'white'}>How to Buy Crypto</Heading>
                        {/* Publish Date and Social */}
                        <Stack direction={'row'} color={'#909cb2'} justify={'space-between'} align={'center'}>
                            <Text>Caelum - April 30, 2021</Text>
                            <Stack direction={'row'} >
                                <Button bgColor={'#0f212e'} _hover={{ bgColor: '#071824', color: 'white' }} borderLeftRadius={'full'} borderRightRadius={'full'} size={'sm'}>
                                    <FaFacebookF />
                                </Button>
                                <Button bgColor={'#0f212e'} _hover={{ bgColor: '#071824', color: 'white' }} borderLeftRadius={'full'} borderRightRadius={'full'} size={'sm'}>
                                    <FaTwitter />
                                </Button>
                            </Stack>
                        </Stack>
                        <Img src={BuyCrypto} borderRadius={'md'} my={'4 !important'} />
                        <Text color={'#909cb2'}>
                            Buying various Cryptocurrencies through the established exchanges has always been
                            the cheaper option. Usually, providing KYC, funding your account, and processing
                            the bank transfer may take between a couple of days to an entire week depending on
                            your country and the location of your bank.<br /><br />
                            Whether you are buying or <Link textDecoration={'underline'} color={'white'}>betting at Stake</Link>, these hold ups can be the vital
                            difference between going away with a profit or making a loss.
                            <br /><br />
                            Buying Cryptocurrencies is the most convenient way to be a part of the largest
                            economic revolution since the invention of fiat currency. Fortunately, you do not
                            need to be an IT expert or queue up to purchase your choice of coins anymore.
                            <br />
                            <br />
                            The two ways to get Cryptocurrencies are either through mining new coins or
                            purchasing them in the open market. Mining new coins can prove to be difficult,
                            as it can be a costly and complicated process. So, our recommendation is that
                            players start by purchasing the first coins. This blog focuses on the different
                            ways you can convert your money into Cryptocurrency which will help you in
                            accessing the full services of Stake, such as <Link textDecoration={'underline'} _hover={{ color: 'white', textDecoration: 'underline' }}>betting games with crypto on the
                                casino</Link> or <Link textDecoration={'underline'} _hover={{ color: 'white', textDecoration: 'underline' }}>sports.</Link>
                            <br />
                            <br />
                            Converting your fiat currency (USD, Euro, ETC.) into Cryptocurrency used to be a
                            taxing prospect, but its current growth and popularity means there are easier and
                            more convenient options turning up each day. You can purchase Cryptocurrency by
                            following these three steps:
                            <OrderedList>
                                <ListItem>Setting up your wallet.</ListItem>
                                <ListItem>Choosing the platform of your choice to purchase the Cryptocurrency.</ListItem>
                                <ListItem>Selecting a payment method.</ListItem>
                            </OrderedList>'<br />
                            <br />
                            These steps will be further explained below for better understanding.
                            <br />
                            <br />
                            <Heading fontSize={'lg'} color={'white'}>Step 1: Setting up your wallet</Heading>
                            Selecting and setting up your Cryptocurrency wallet is the first step to getting
                            your choice of coins. A wallet works like a bank account and is necessary for
                            exchange of funds across the crypto networks.
                            <br />
                            <br />
                            You just need to download/install the software to your preferred platform and
                            follow the instructions. The players will need to choose a strong password,
                            perform a backup and it is vital to follow the account recovery guidelines.
                            If you need further information on how to do this, you can just reach out to us.
                            <br />
                            <br />
                            There are some online services who provide their own wallets, but we recommend
                            keeping your funds in a wallet which you can access with your private keys to
                            avoid the risk of losing your money because of a hack or bug in the service
                            provider’s servers.
                            <br />
                            <br />
                            Once you get yourself used to the platform, the next step is to purchase your choice of cryptocurrency.
                            <br />
                            <br />
                            <Heading fontSize={'lg'} color={'white'}>Step 2: Choosing the platform</Heading>
                            Selecting the best platform to purchase cryptocurrency is primarily based on your
                            location and the legalities in your country. Although, cryptocurrencies are legal
                            in many countries but, its regulation is still in early stages. Therefore, some
                            platforms might be unable or unwilling to offer their services in some countries.
                            <br />
                            <br />
                            Players can purchase directly through Stake using a credit/debit card, bank
                            payments, exchanges, dedicated OTC, and the site also has the option to purchase
                            using Apple Pay. The different options vary but are dependent on your preferences.
                            <br />
                            <br />
                            <Link textDecoration={'underline'} _hover={{ color: 'white', textDecoration: 'underline' }}>Purchasing cryptocurrency via Stake with your credit/debit card</Link>
                            is the most convenient option, though there is a fee for this type of transaction.
                            Verified vendors and exchanges are cheap and secure ways but require setting up an
                            account. For this ease and convenience, they require identity verification to comply
                            with local and international regulations.
                            <br />
                            <br />
                            If you have dealt with cryptocurrencies before and your primary focus is privacy,
                            you can use an ATM or look at the private methods on OTC platforms.
                            <Heading fontSize={'lg'} color={'white'}>Using a Credit/Debit Card on Stake:</Heading>
                            Buying cryptocurrency using your credit or debit cards is quick and trouble free
                            on the Stake platform thanks to our partnership with Moonpay, the largest provider
                            of different currencies. You can further explore this option by following this
                            link: <Link textDecoration={'underline'} color={'white'} isExternal _hover={{ color: 'white', textDecoration: 'underline' }} >https://stake.com/blog/how-to-buy-crypto-on-stake</Link>
                        </Text>
                    </Stack>
                </VStack>
            </LayoutComp>
        </>
    )
}

export default BuyCryptoComp