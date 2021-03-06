import React from 'react';
import { RiSpyFill } from 'react-icons/ri';
import AnimateTable from '../../../ui/AnimateTable';
import {
  HStack,
  IconButton,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  Select,
  Circle,
} from '@chakra-ui/react';
const CasinoStats = () => {
  return (
    <Tabs variant="soft-rounded">
      <Stack direction={'row'} align={'center'} justify={'space-between'}>
        <TabList
          overflowX={'auto'}
          w={'fit-content'}
          borderRadius={'full'}
          bgColor={'#000000f2'}
        >
          <Stack direction={'row'} p={'2'}>
            <Tab
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              w={'max-content'}
              minW={'fit-content'}
              fontSize={{ base: 'sm', md: 'md' }}
            >
              <HStack spacing={'2'}>
                <Text>My Bets</Text>
              </HStack>
            </Tab>
            <Tab
              w={'fit-content'}
              color={'white'}
              _selected={{ color: 'white', bg: '#2F4553' }}
              minW={'max-content'}
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
              minW={'max-content'}
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
        <TabPanel padding={'0'} py={'4'}></TabPanel>
        <TabPanel>
          <TableContainer>
            <Table variant="striped" colorScheme={'gray'}>
              <Thead>
                <Tr>
                  <Th>Game</Th>
                  <Th>User</Th>
                  <Th>Time</Th>
                  <Th isNumeric>Bet Amount</Th>
                  <Th isNumeric>Multiplier</Th>
                  <Th isNumeric>Payout</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr></Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <AnimateTable />
        </TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CasinoStats;
