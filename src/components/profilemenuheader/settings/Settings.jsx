import React from 'react';
import LayoutComp from '../../../layout/LayoutComp';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';
const Settings = () => {
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
            Settings
          </Text>
        </HStack>
        <Stack spacing={'6'} direction={{ base: 'column', lg: 'row' }}>
          {/* tabs */}
          <Stack
            maxWidth={'100%'}
            overflow={{base:'auto',lg:'inherit'}}
            direction={{ base: 'row', lg: 'column' }}
            height={'fit-content'}
            color={'white'}
            fontWeight={'500'}
            fontSize={'sm'}
            spacing={'0 !important'}
          >
            <Text
              borderTopRadius={{ base: 'none', lg: 'lg' }}
              borderLeftRadius={{base: 'lg', lg: 'inherit'}}
              style={loc === '/settings' ? activeStyle : nonActiveStyle}
              onClick={() => nav('/settings')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              pl={'4'}
              pr={'14'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              marginBottom={'0 !important'}
            >
              General
            </Text>
            <Text
              style={
                loc === '/settings/security' ? activeStyle : nonActiveStyle
              }
              onClick={() => nav('/settings/security')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              Security
            </Text>
            <Text
              style={
                loc === '/settings/preferences' ? activeStyle : nonActiveStyle
              }
              onClick={() => nav('/settings/preferences')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              Prefrences
            </Text>
            <Text
              style={loc === '/settings/api' ? activeStyle : nonActiveStyle}
              onClick={() => nav('/settings/api')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              API
            </Text>
            <Text
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              Sessions
            </Text>
            <Text
              style={
                loc === '/settings/ignoredusers' ? activeStyle : nonActiveStyle
              }
              onClick={() => nav('/settings/ignoredusers')}
              w={'100%'}
              minW={'fit-content'}
              pl={'4'}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
            >
              Ignored Users
            </Text>
            <Text
              style={loc === '/settings/verify' ? activeStyle : nonActiveStyle}
              onClick={() => nav('/settings/verify')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              Verify
            </Text>
            <Text
              style={loc === '/settings/offers' ? activeStyle : nonActiveStyle}
              borderBottomRadius={{ base: 'none', lg: 'lg' }}
              borderRightRadius={{base: 'lg', lg: 'none'}}
              onClick={() => nav('/settings/offers')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{base:'3',lg:'4'}}
              textAlign={{base:'center',lg:"initial"}}
              pl={'4'}
              pr={'14'}
            >
              Offers
            </Text>
          </Stack>
          <Outlet />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default Settings;
