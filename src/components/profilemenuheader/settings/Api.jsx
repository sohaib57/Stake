import { useState } from 'react'
import { AiFillCopy } from 'react-icons/ai'
import { Img, Stack, Heading, Text, Input, Divider, Button, ButtonGroup, IconButton, HStack } from '@chakra-ui/react'
import dataAnalytics from '../../../assets/images/dataAnalytics.png'



const Api = () => {

    const [token, setToken] = useState('***********************')

    const copy = async (e) => {

        e.preventDefault();

        await navigator.clipboard.writeText(token);
    }

    return (
        <Stack p={'6'} w={'100%'} borderRadius={'xl'} bgColor={'black'}>
            <Stack direction={'column'} spacing={'4'}>

                {/* Privacy */}
                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Token</Heading>
                        <Text>
                            Disclaimer: Stake support will never ask you for this token. In giving this token to other people, you are granting them full access to your account.
                        </Text>
                        <Divider />
                        <Stack>

                            <Text> Token</Text>
                            <ButtonGroup size='md' isAttached variant='outline'>

                                <Button>**********************************</Button>
                                <IconButton onClick={copy} icon={<AiFillCopy />} />
                            </ButtonGroup>




                        </Stack>

                    </Stack>

                    <Stack margin={'0px !important'}>
                        <Divider />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            pr={'3'}
                        >
                            <Text pl={'4'} color={'white'} >
                                Do not share this!
                            </Text>
                            <Button size={'md'} variant={'solid'}>
                                {' '}
                                Reveal
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                {/* Active Tokens */}

                <Stack
                    border={'1px solid white'}
                    borderRadius={'xl'}
                    py={'3'}
                >
                    <Stack color={'white'} p={'6'}>
                        <Heading color={'white'} >Active Tokens</Heading>
                        <Text>
                            Stake currently operates with a closed API and therefore the use of these tokens are very limited. Every time you choose to reveal a new API token using the "Token Creation" form, you are initiating a new independent session. Old tokens are not deactivated until you use the click to disable all tokens.
                        </Text>
                        <Divider />
                        <Stack py='4' alignItems={'center'} justifyContent={'center'} >

                            <Stack alignItems={'center'} justifyContent={'center'} >
                                <Img boxSize={'100px'} src={dataAnalytics} />
                                <Text>
                                    No Active API Tokens
                                </Text>
                            </Stack>


                        </Stack>

                    </Stack>


                </Stack>

            </Stack>
        </Stack>
    )
}

export default Api