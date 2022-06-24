import { useNavigate } from 'react-router-dom'
import { Stack, Tabs, TabList, TabPanels, TabPanel, Text, Image, HStack, Tab, VStack, Select, SimpleGrid, Progress, Button } from '@chakra-ui/react'
import { GoSettings } from 'react-icons/go'
import Active from './active/Active'
import AllClaimed from './allclaimed/AllClaimed'
import MyClaimed from './myclaimed/MyClaimed'


const ChallengesBody = () => {
  const navigate = useNavigate()

  const activeHandler = () => {

    navigate('/casino/challenges')

  }

  const allClaimHandler = () => {
    navigate('/casino/challenges/all-claimed');
  }

  const myClaimHandler = () => {
    navigate('/casino/challenges/my-claimed');
  }



  return (
    <Stack width={'100%'} margin={'0px !important'} bg={'#1A2C38'} >
      <Stack margin={'0px !important'} justifyContent={'space-between'} alignItems={'baseline'} px={{ base: '2', lg: '6' }} pt={'5'}  >

        <Tabs width={'100%'} variant="soft-rounded" colorScheme="green">

          <Stack direction={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
            <TabList
              overflowX={'auto'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
              p={'1'}
            >
              <Tab
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={{ base: 'sm', md: 'md' }}
                onClick={activeHandler}
              >
                <Text>
                  Active
                </Text>
              </Tab>
              <Tab
                w={'max-content'}
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                fontSize={{ base: 'sm', md: 'md' }}
                onClick={allClaimHandler}
              >
                <Text>
                  All Claimed
                </Text>

              </Tab>
              <Tab
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={{ base: 'sm', md: 'md' }}
                onClick={myClaimHandler}
              >
                <Text>
                  My Claimed
                </Text>
              </Tab>

            </TabList>

            <Stack maxWidth={'fit-content'} direction={'row'} color='white' alignItems={'center'} >

              <GoSettings fontSize={'1.2rem'} />

              <Text fontSize={'md'} >
                SortBy
              </Text>
              <Select _hover={{ bg: '#071824' }} _focusVisible={{}} bg={'#0f212e'} variant='filled' placeholder='Created' >

                <option style={{ color: 'black' }}  >Prize</option>
                <option style={{ color: 'black' }}   >Bet size</option>
                <option style={{ color: 'black' }}  >Multiplier</option>
              </Select>

            </Stack>

          </Stack>

          <TabPanels>
            <TabPanel>
              <Active />
            </TabPanel>
            <TabPanel>
              <AllClaimed />
            </TabPanel>
            <TabPanel>

              <MyClaimed />

            </TabPanel>

          </TabPanels>
        </Tabs >


      </Stack >






    </Stack>
  )
}

export default ChallengesBody