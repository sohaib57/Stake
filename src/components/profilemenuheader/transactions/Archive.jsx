import {
    Button,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React from 'react';
  import stats from '../../../assets/images/dataAnalytics.png';
  const Archive = () => {
    return (
      <Stack w={'100%'} bgColor={'black'} px={'4'} py={'6'}>
        <Stack  spacing={'6'} w={'100%'}>
          <Stack w={'100%'} alignItems={'center'}>
            <Image w={'10%'} src={stats} />
            <Text color={'#b1bad3'}>No Archive</Text>
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
        </Stack>
      </Stack>
    );
  };
  
  export default Archive;
  