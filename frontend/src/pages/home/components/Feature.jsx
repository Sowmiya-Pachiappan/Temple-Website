import { Box, Stack, Typography } from '@mui/material';
import FeatureImage1 from '@/assets/images/feature-1.png';
import FeatureImage2 from '@/assets/images/feature-2.png';
import FeatureImage3 from '@/assets/images/feature-3.png';

const Feature = () => {
  return (
    <div
      className='flex justify-center w-full z-10'
      id='feature'
    >
      <div className='text-white w-full md:w-5/6 rounded-md bg-gradient-to-r from-brand-400 to-brand-500 p-5 md:p-10 shadow-xl'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={1.5}
          >
            <img
              src={FeatureImage1}
              width={60}
              height={60}
              alt='Discover Temples'
            />
            <Typography align='center'>
              Discover Temples Near You
            </Typography>
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={1.5}
          >
            <img
              src={FeatureImage2}
              width={60}
              height={60}
              alt="Share Your Temple's Story"
            />
            <Typography align='center'>
              Share Your Temple's Story
            </Typography>
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap={1.5}
          >
            <img
              src={FeatureImage3}
              width={60}
              height={60}
              alt='Connect with Devotees'
            />
            <Typography align='center'>
              Connect with Devotees
            </Typography>
          </Box>
        </Stack>
      </div>
    </div>
  );
};

export default Feature;
