import React from 'react';
import LayoutComp from '../../../layout/LayoutComp';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';



const Affiliate = () => {
    const nav = useNavigate();
    const loc = window.location.pathname;
    console.log('🚀 ~ file: Settings.jsx ~ line 27 ~ Settings ~ loc', loc);
    const activeStyle = {
        backgroundColor: '#00000054',
        borderLeft: '2px solid blue',
    };
    const nonActiveStyle = {
        cursor: 'pointer',
    };
    return (
        <LayoutComp>
            <Stack
                py={'6'}
                px={{ base: '4', md: '8', lg: '12', xl: '14' }}
                bg={'#000000ed'}
            >
                <HStack pb={'4'}>
                    <AiFillSetting color="#B1BAD3" fontSize={'1.5rem'} />
                    <Text fontWeight={'500'} fontSize={'lg'} color={'white'}>
                        Affiliate Program
                    </Text>
                </HStack>
                <Stack spacing={'4'} direction={{ base: 'column', lg: 'row' }}>
                    {/* tabs */}
                    <Stack
                        maxWidth={'100%'}
                        overflow={{ base: 'auto', lg: 'inherit' }}
                        direction={{ base: 'row', lg: 'column' }}
                        height={'fit-content'}
                        color={'white'}
                        fontWeight={'500'}
                        fontSize={'sm'}
                        spacing={'0 !important'}
                    >
                        <Text
                            borderTopRadius={{ base: 'none', lg: 'lg' }}
                            borderLeftRadius={{ base: 'lg', lg: 'inherit' }}
                            style={loc === '/affiliate' ? activeStyle : nonActiveStyle}
                            onClick={() => nav('/affiliate')}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            pl={'4'}
                            pr={'14'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                            marginBottom={'0 !important'}
                        >
                            Overview
                        </Text>
                        <Text
                            style={
                                loc === '/affiliate/retentionprogram' ? activeStyle : nonActiveStyle
                            }
                            onClick={() => nav('/affiliate/retentionprogram')}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                            pl={'4'}
                            pr={'14'}
                        >
                            Retention Program
                        </Text>
                        <Text
                            style={
                                loc === '/affiliate/commission' ? activeStyle : nonActiveStyle
                            }
                            onClick={() => nav('/affiliate/commission')}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                            pl={'4'}
                            pr={'14'}
                        >
                            Commission
                        </Text>
                        <Text
                            style={loc === '/affiliate/funds' ? activeStyle : nonActiveStyle}
                            onClick={() => nav('/affiliate/funds')}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                            pl={'4'}
                            pr={'14'}
                        >
                            Funds
                        </Text>
                        <Text
                            style={loc === '/affiliate/referredusers' ? activeStyle : nonActiveStyle}
                            onClick={() => nav('/affiliate/referredusers')}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                            pl={'4'}
                            pr={'14'}
                        >
                            Referred Users
                        </Text>
                        <Text
                            style={
                                loc === 'affiliate/campaigns' ? activeStyle : nonActiveStyle
                            }
                            onClick={() => nav('/affiliate/campaigns')}
                            w={'100%'}
                            minW={'fit-content'}
                            pl={'4'}
                            _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
                            bgColor={'black'}
                            marginTop={'0 !important'}
                            py={{ base: '3', lg: '4' }}
                            textAlign={{ base: 'center', lg: "initial" }}
                        >
                            Campaigns
                        </Text>


                    </Stack>
                    <Outlet />
                </Stack>
            </Stack>
        </LayoutComp>
    );
};

export default Affiliate;
