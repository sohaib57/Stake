import React, { useState } from 'react';
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
  ButtonGroup,
  IconButton
} from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
import GeneralSetting from './GeneralSetting'
import SecuritySetting from './SecuritySetting';
import PreferenceSetting from './PreferenceSetting';
import Api from './Api'
import IgnoredUsers from './IgnoredUsers';
import Offers from './Offers'
import Verify from './Verify'

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


        <Tabs defaultIndex={0}>
          <Stack direction={{ base: 'column', lg: 'row' }} >
            <Stack direction={{ base: 'column', lg: 'row' }} overflow={'auto'} >
              <TabList borderBottom={'0 !important'} width={'max-content'}  >
                <Stack
                  alignItems={'baseline'}
                  py={'5'}
                  color={'white'}
                  borderRadius={'xl'}
                  fontWeight={'500'}
                  fontSize={'sm'}
                  bgColor={'black'}
                  direction={{ base: 'row', lg: 'column' }}

                >
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    justifyContent={'flex-start'}
                    width={'100%'}
                  >
                    General
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    Security
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    Prefrences
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    API
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    Sessions
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'max-content'}
                    justifyContent={'flex-start'}
                  >
                    Ignored Users
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    Verify
                  </Tab>
                  <Tab
                    _selected={{
                      borderLeft: '3px solid #007BFF',
                      backgroundColor: '#071824',
                    }}
                    width={'100%'}
                    justifyContent={'flex-start'}
                  >
                    {' '}
                    Offers
                  </Tab>
                </Stack>
              </TabList>
            </Stack>
            
            <TabPanels>

              {/* General */}
              <TabPanel p={'0 !important'}>
                <GeneralSetting />
              </TabPanel>

              {/* Security */}
              <TabPanel>
                <SecuritySetting />
              </TabPanel>

              {/* Preference */}
              <TabPanel>
                <PreferenceSetting />
              </TabPanel>
              
              {/* Api */}
              <TabPanel>
                <Api />
              </TabPanel>

              {/* Sessions */}
              <TabPanel>

              </TabPanel>

              {/* Ignored Users */}
              <TabPanel>
                <IgnoredUsers />
              </TabPanel>

              {/* Verify */}
              <TabPanel>
                <Verify />
              </TabPanel>

              {/* Offers */}
              <TabPanel>
                <Offers />
              </TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Stack>
        </Tabs>
      </Stack>

    </LayoutComp>
  );
};

export default Settings;
