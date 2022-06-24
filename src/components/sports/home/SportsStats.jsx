import React from 'react';
import { RiSpyFill } from 'react-icons/ri';
import AnimateTable from '../../ui/AnimateTable';
import {
  HStack,
  IconButton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  Select,
} from '@chakra-ui/react';
const SportsStats = () => {
  return (
    <Tabs variant="soft-rounded">
      <Stack direction={'row'} align={'center'} justify={'space-between'}>
        <TabList
          overflowX={'auto'}
          w={'fit-content'}
          borderRadius={'full'}
          bgColor={'#0F212E'}
        >
          <Stack direction={'row'} p={'2'}>
            <Tab
              w={'max-content'}
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <HStack spacing={'2'}>
                <Text>All Bets</Text>
              </HStack>
            </Tab>
            <Tab
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              w={'max-content'}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <HStack spacing={'2'}>
                <Text> High Rollers</Text>
              </HStack>
            </Tab>
            <Tab
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              w={'max-content'}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <HStack spacing={'2'}>
                <Text> Races</Text>
              </HStack>
            </Tab>
          </Stack>
        </TabList>
        {/* Table rows listing */}
        <Stack w={'fit-content'} direction={'row'}>
          <Tooltip label="Ghost Mode" placement="top">
            <IconButton
              icon={<RiSpyFill />}
              variant={'ghost'}
              color={'white'}
              _hover={{}}
              _focus={{}}
              _active={{}}
            />
          </Tooltip>
          <Select
            defaultValue={'20'}
            color={'white'}
            borderColor={'#4C667B'}
            _hover={{ borderColor: '#4C667B' }}
            _active={{ borderColor: '#4C667B' }}
            _focus={{ borderColor: '#4C667B' }}
          >
            <option value="0" style={{ backgroundColor: '#0F212E' }}>
              0
            </option>
            <option value="10" style={{ backgroundColor: '#0F212E' }}>
              10
            </option>
            <option value="20" style={{ backgroundColor: '#0F212E' }}>
              20
            </option>
            <option value="30" style={{ backgroundColor: '#0F212E' }}>
              30
            </option>
            <option value="40" style={{ backgroundColor: '#0F212E' }}>
              40
            </option>
          </Select>
        </Stack>
      </Stack>
      <TabPanels>
        {/* All Bets */}
        <TabPanel px={'0 !important'}>
          <AnimateTable />
        </TabPanel>
        <TabPanel px={'0 !important'}></TabPanel>
        <TabPanel px={'0 !important'}></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SportsStats;
