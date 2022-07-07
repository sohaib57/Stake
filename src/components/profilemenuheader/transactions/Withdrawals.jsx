import {
    Button,
    FormControl,
    FormLabel,
    Image,
    Select,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import stats from '../../../assets/images/dataAnalytics.png';
  const Withdrawals = () => {
    const [value, setValue] = useState();
    return (
      <Stack w={'100%'} bgColor={'black'} px={'4'} py={'6'}>
        <FormControl>
          <FormLabel color={'#b1bad3'}>Type</FormLabel>
          <Select onChange={e => setValue(e.target.value)} color={'white'}>
            <option
              style={{ backgroundColor: 'black', color: 'white' }}
              value="Crypto"
            >
              Crypto
            </option>
            <option
              style={{ backgroundColor: 'black', color: 'white' }}
              value="Banking"
            >
              Banking
            </option>
          </Select>
        </FormControl>
        <Stack mt={'3 !important'} spacing={'6'} w={'100%'}>
          <Stack w={'100%'} alignItems={'center'}>
            <Image w={'10%'} src={stats} />
            <Text color={'#b1bad3'}>{value === 'Banking'? 'No Banking Withdrawals' : 'No Withdrawals'}</Text>
          </Stack>
          <Stack
            w={'full'}
            pt={'4'}
            direction="row"
            spacing={4}
            justifyContent="center"
          >
            <Button
              isDisabled
              color={'#b1bad3'}
              fontWeight={'600'}
              variant="link"
            >
              Previous
            </Button>
            <Button
              isDisabled
              color={'#b1bad3'}
              fontWeight={'600'}
              variant="link"
            >
              Next
            </Button>
          </Stack>
          {value !== 'Banking' ? (
            <Button
              fontWeight={'500'}
              _hover={{ opacity: '0.5', color: 'white' }}
              backgroundColor={'#21303A'}
              color={'white'}
              w={'fit-content'}
              alignSelf={'center'}
            >
              {' '}
              Download All Withdrawals
            </Button>
          ) : null}
        </Stack>
      </Stack>
    );
  };
  
  export default Withdrawals;
  