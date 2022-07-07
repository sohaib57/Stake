import React, { useState } from 'react'
import { Stack, AspectRatio, Text, ButtonGroup, Button, IconButton } from '@chakra-ui/react'
import { AiFillCopy } from 'react-icons/ai'

const Overview = () => {

  const [text, setText] = useState('stake.com/?c=219c45e4e4')

  const copy = async (e) => {

    e.preventDefault();

    await navigator.clipboard.writeText(text);
  }




  return (
    <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'} color={'white'}>
      <Stack margin={'0px !important'} direction={'column'} spacing={'3'}>
        <AspectRatio maxW="480px" ratio={4 / 3}>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/531039335?h=e2c71e62e1" width="640" height="360" frameborder="0" allowfullscreen>

          </iframe>
        </AspectRatio>
        <Text>
          Refer our brand and earn money through participating in Stake’s Affiliate Program! You will receive an affiliate commission for every user that registers and plays on Stake through your links.
        </Text>
        <Text>
          Being a Stake affiliate means you will earn commission for all bets placed on both our Casino and Sportsbook - which unlike traditional affiliate programs, means that despite if they win or lose, you still make the same commission!
        </Text>
        <Stack direction={'row'} justifyContent={'space-between'}   >
          <Stack >
            <Text>
              Referral Link
            </Text>
            <ButtonGroup size='md' isAttached variant='outline'>
              <Button>stake.com/?c=219c45e4e4</Button>
              <IconButton onClick={copy} icon={<AiFillCopy />} />
            </ButtonGroup>
          </Stack>
          <Stack alignSelf={'flex-end'}   >
            <Button color={'black'} >
              Download Banners
            </Button>
          </Stack>


        </Stack>

      </Stack>
    </Stack>
  )
}

export default Overview