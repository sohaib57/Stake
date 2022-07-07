import React from 'react';
import LayoutComp from '../../../layout/LayoutComp';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { CgNotes } from 'react-icons/cg';
import { Outlet, useNavigate } from 'react-router-dom';
const Transactions = () => {
  const nav = useNavigate();
  const loc = window.location.pathname;
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
          <CgNotes color="#B1BAD3" fontSize={'1.5rem'} />
          <Text fontWeight={'500'} fontSize={'lg'} color={'white'}>
            Transactions
          </Text>
        </HStack>
        <Stack spacing={'6'} direction={{ base: 'column', lg: 'row' }}>
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
              borderTopLeftRadius={'lg'}
              style={loc === '/transactions' ? activeStyle : nonActiveStyle}
              onClick={() => nav('/transactions')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              pl={'4'}
              pr={'14'}
              py={{ base: '3', lg: '4' }}
              textAlign={{ base: 'center', lg: 'initial' }}
              marginBottom={'0 !important'}
            >
              Deposits
            </Text>
            <Text
              style={
                loc === '/transactions/withdrawals' ? activeStyle : nonActiveStyle
              }
              onClick={() => nav('/transactions/withdrawals')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{ base: '3', lg: '4' }}
              textAlign={{ base: 'center', lg: 'initial' }}
              pl={'4'}
              pr={'14'}
            >
              Withdrawals
            </Text>
            <Text
              style={
                loc === '/transactions/bets' ? activeStyle : nonActiveStyle
              }
              onClick={() => nav('/transactions/bets')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{ base: '3', lg: '4' }}
              textAlign={{ base: 'center', lg: 'initial' }}
              pl={'4'}
              pr={'14'}
            >
              Bets
            </Text>
            <Text
              style={loc === '/transactions/archive' ? activeStyle : nonActiveStyle}
              onClick={() => nav('/transactions/archive')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{ base: '3', lg: '4' }}
              textAlign={{ base: 'center', lg: 'initial' }}
              pl={'4'}
              pr={'14'}
              minW={'fit-content'}
            >
              Bet Archive
            </Text>
            <Text
              style={loc === '/transactions/other' ? activeStyle : nonActiveStyle}
              borderBottomLeftRadius={{ base: 'none', lg: 'lg' }}
              borderRightTopRadius={{ base: 'lg', lg: 'none' }}
              borderRightBottomRadius={'lg'}
              onClick={() => nav('/transactions/other')}
              _hover={{ cursor: 'pointer', bgColor: '#00000054' }}
              bgColor={'black'}
              marginTop={'0 !important'}
              py={{ base: '3', lg: '4' }}
              textAlign={{ base: 'center', lg: 'initial' }}
              pl={'4'}
              pr={'14'}
            >
              Other
            </Text>
          </Stack>
          <Outlet />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default Transactions;
