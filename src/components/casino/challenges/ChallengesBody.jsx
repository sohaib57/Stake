import { Stack, Tabs, TabList, TabPanels, TabPanel, Text, Image, HStack, Tab, VStack, Select, SimpleGrid, Progress, Button } from '@chakra-ui/react'
import { GoSettings } from 'react-icons/go'
import dice from '../../../assets/images/dice.png'
import Card from './ui/Card'


const ChallengesBody = () => {
  return (
    <Stack width={'100%'} margin={'0px !important'} bg={'#1A2C38'} >
      <Stack margin={'0px !important'} justifyContent={'space-between'} alignItems={'baseline'} px={{ base: '2', lg: '10' }} pt={'5'}  >

        <Tabs width={'100%'} variant="soft-rounded" colorScheme="green">

          <Stack direction={{ base: 'column', lg: 'row' }} justifyContent={'space-between'}>
            <TabList
              overflowX={'auto'}
              maxW={'fit-content'}
              borderRadius={'full'}
              bgColor={'#0F212E'}
              p={'2'}
            >
              <Tab
                color={'white'}
                _selected={{ color: 'white', bg: '#2F4553' }}
                w={'max-content'}
                fontSize={{ base: 'sm', md: 'md' }}
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
              <SimpleGrid columns={{ base: '1', sm: '2', md: '3', lg: '6' }} spacingX='10px' spacingY={'30px'}  >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </SimpleGrid>

              <VStack spacing={'4'} paddingTop={'4'}  >

                <Text color={'#b1bad3'} >Displaying 24 /43</Text>
                <Progress width={'180px'} height={'2px'} color={'white'} value={80} />
                <Button bg={'#2f4553'} color={'#d5dceb'} _hover={{ bg: '#3D5564', color: '#FFFFFF' }} >
                  Load More
                </Button>



              </VStack>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ base: '1', sm: '2', md: '3', lg: '6' }} spacingX='10px' spacingY={'30px'}  >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </SimpleGrid>
              <VStack spacing={'4'} paddingTop={'4'}  >

                <Text color={'#b1bad3'} >Displaying 24 /43</Text>
                <Progress width={'180px'} height={'2px'} color={'white'} value={80} />
                <Button bg={'#2f4553'} color={'#d5dceb'} _hover={{ bg: '#3D5564', color: '#FFFFFF' }} >
                  Load More
                </Button>



              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack  pb={'100px'}>
                <Image src={dice} height={'100px'} width={'100px'} />

                <Text color={'#D9DCDE'} >
                  We are unable to find any challenges
                </Text>
                <Text color={'#8E99AF'} >
                  They may not be available to your region
                </Text>
              </VStack>
            </TabPanel>

          </TabPanels>
        </Tabs >


      </Stack >






    </Stack>
  )
}

export default ChallengesBody