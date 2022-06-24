import { Button, Progress, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import Card from '../ui/Card'


const AllClaimed = () => {
    return (
        <>
            <SimpleGrid columns={{ base: '1', sm: '2', md: '3' ,  lg: '4' , xl: '5' }} spacingX='8px' spacingY={'30px'}  >
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

        </>
    )
}

export default AllClaimed