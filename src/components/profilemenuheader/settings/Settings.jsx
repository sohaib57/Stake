import React from 'react';
import LayoutComp from '../../../layout/LayoutComp';
import {
  Heading,
  HStack,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tag,
  TagLabel,
  Divider,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
const Settings = () => {
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
        <Stack direction={'row'}>
          <Stack
            spacing={'4'}
            py={'5'}
            pl={'4'}
            pr={'8'}
            color={'white'}
            borderRadius={'lg'}
            fontWeight={'500'}
            fontSize={'sm'}
            bgColor={'black'}
          >
            <Text marginBottom={'0 !important'}>General</Text>
            <Text>Security</Text>
            <Text>Prefrences</Text>
            <Text>API</Text>
            <Text>Sessions</Text>
            <Text width={'max-content'} justifyContent={'flex-start'}>
              Ignored Users
            </Text>
            <Text>Verify</Text>
            <Text>Offers</Text>
          </Stack>

          <Outlet />
        </Stack>
      </Stack>
    </LayoutComp>
  );
};

export default Settings;
