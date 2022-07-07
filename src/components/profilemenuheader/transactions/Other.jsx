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
const Other = () => {
  return (
    <Stack w={'100%'} bgColor={'black'} px={'4'} py={'6'}>
      <FormControl>
        <FormLabel color={'#b1bad3'}>Type</FormLabel>
        <Select color={'white'}>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="all">All </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="bonusCode">Bonus </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="bonusDrop">Drop </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="campaignWithdrawal">Campaign Withdrawal </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="faucetClaim">Reload Claim </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="racePayout">Race Payout </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="rainReceived">Rains Received </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="rainSend">Rains Sent </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="rakeback">Rakeback Received </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="tipReceived">Tips Received </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="tipSend">Tips Sent </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="vaultDeposit">Vault Deposit </option>
          <option style={{ backgroundColor: 'black', color: 'white' }} value="vaultWithdrawal">Vault Withdrawal </option>
        </Select>
      </FormControl>
      <Stack mt={'3 !important'} spacing={'6'} w={'100%'}>
        <Stack w={'100%'} alignItems={'center'}>
          <Image w={'10%'} src={stats} />
          <Text color={'#b1bad3'}>No entries.</Text>
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

export default Other;
