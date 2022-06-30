import React from 'react';
import { Stack, SimpleGrid, Center, Button } from '@chakra-ui/react';
import Header from '../Header';
import favourite from '../../../../assets/images/favouriteLogo.png';
import PromotionBlogCard from '../../../ui/PromotionBlogCard';
import dailyRaces from '../../../../assets/images/dailyRaces.jpg';

const SportsComp = () => {
  return (
    <Stack width={'100%'}>
      <Header text={'Sports'} img={favourite} />
      <Stack
        margin={'0px !important'}
        width={'100%'}
        px={'6'}
        py={'6'}
        bg={'#000000ed'}
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
          <PromotionBlogCard
            img={dailyRaces}
            text={'Ends at 5:00 AM 12/31/2022'}
            heading={'Stakes Daily Races'}
            description={
              'Earn a share in $100,000 every day through Stakes new and improved daily races!'
            }
          />
        </SimpleGrid>

        <Center py={'4'}>
          <Stack direction={'row'}>
            <Button color={'#6B767E'} variant="link">
              Previous
            </Button>
            <Button color={'white'} variant="link">
              Next
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Stack>
  );
};

export default SportsComp;
