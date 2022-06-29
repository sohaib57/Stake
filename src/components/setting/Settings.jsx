import React from 'react';
import LayoutComp from '../../layout/LayoutComp';
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
} from '@chakra-ui/react';
import { AiFillSetting } from 'react-icons/ai';
const Settings = () => {
  return (
    <LayoutComp>
      <Stack
        py={'6'}
        px={{ base: '4', md: '8', lg: '12', xl: '14' }}
        bgColor={'#1A2C38'}
      >
        <HStack pb={'4'}>
          <AiFillSetting color="#B1BAD3" fontSize={'1.5rem'} />
          <Text fontWeight={'500'} fontSize={'lg'} color={'white'}>
            Settings
          </Text>
        </HStack>
        <Tabs defaultIndex={1}>
          <Stack direction={'row'}>
            <TabList borderBottom={'0 !important'}>
              <Stack
                alignItems={'baseline'}
                py={'5'}
                w={'100%'}
                color={'white'}
                borderRadius={'xl'}
                fontWeight={'500'}
                fontSize={'sm'}
                bgColor={'#0F212E'}
                direction={'column'}
              >
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  General
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  Security
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  Prefrences
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  API
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  Sessions
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  Ignored Users
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  Verify
                </Tab>
                <Tab
                  
                  _selected={{
                    borderLeft: '3px solid #007BFF',
                    backgroundColor: '#071824',
                  }}
                  w={'max-content'}
                >
                  {' '}
                  Offers
                </Tab>
              </Stack>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text>1</Text>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Stack>
        </Tabs>
      </Stack>
    </LayoutComp>
  );
};

export default Settings;
