import React from 'react'
import { Stack, Input, Divider, Text } from '@chakra-ui/react'

const Commission = () => {
  return (
    <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'} color={'white'} >

      <Stack direction={'column'} spacing={'4'}>

        <Stack direction={{ base: 'column', lg: 'row' }} >

          <Stack p={'2'} >
            <Text>
              Casino
            </Text>
            <Text>
              All of our games have a different house edge. You can derive your commission using the following formula:
            </Text>
            <Input disabled placeholder='(Edge as decimal * wagered / 2) * commission rate' />
          </Stack>

          <Divider orientation={{ base: 'horizontal', lg: 'vertical' }} />

          <Stack p={'2'} >
            <Text>
              Sportsbook
            </Text>
            <Text>
              All sports bets are applied at a 3% theoretical house edge. You can derive your commission using the following formula:
            </Text>
            <Input disabled placeholder='(0.03 * wagered / 2) * commission rate' />

          </Stack>

        </Stack>
        <Stack border={'1px dotted white'} >
          <Text p={'2'}>
            The retention program is utilised for your affiliates on both the Sportsbook and Casino, however the costs are already absorbed before calculating the affiliate commission on Sportsbook bets so that we can set a standard rate of 3% assumed margin.
          </Text>
        </Stack>


      </Stack>
    </Stack>
  )
}

export default Commission