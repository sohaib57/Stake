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
  Circle,
} from '@chakra-ui/react';
const SportsStats = () => {
  return (
    <Tabs variant="soft-rounded">
      <Stack direction={'row'} align={'center'} justify={'space-between'}>
        <TabList
          overflowX={'auto'}
          w={'fit-content'}
          borderRadius={'full'}
          bgColor={'#010101'}
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
              minW={'max-content'}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <HStack alignItems={'center'} spacing={'2'}>
                <Text> Races</Text>
                <Circle size="10px" bg="#1FFF20" color="white" />
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
            defaultValue={'10'}
            fontSize={'sm'}
            fontWeight={'500'}
            color={'white'}
            borderColor={'#4C667B'}
            _hover={{ borderColor: '#4C667B' }}
            _active={{ borderColor: '#4C667B' }}
            _focus={{ borderColor: '#4C667B' }}
          >
            <option style={{ backgroundColor: 'black' }}>0</option>
            <option style={{ backgroundColor: 'black' }}>10</option>
            <option style={{ backgroundColor: 'black' }}>20</option>
            <option style={{ backgroundColor: 'black' }}>30</option>
          </Select>
        </Stack>
      </Stack>
      <TabPanels>
        {/* All Bets */}
        <TabPanel px={'0 !important'}></TabPanel>
        <TabPanel px={'0 !important'}></TabPanel>
        <TabPanel px={'0 !important'}>
          <AnimateTable />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SportsStats;
