import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Temple1 from '@/assets/images/temple-1.jpg';
import Temple2 from '@/assets/images/temple-4.jpeg';
import Temple3 from '@/assets/images/hero.jpg';
import Arrow from '@/assets/images/arrow.svg';

const Hero = () => {
  return (
    <Container
      maxWidth={'xl'}
      className='h-full w-full flex items-center gap-10 rounded-2xl  bg-brand-50 p-10 relative  bg-[url(@/assets/images/world_map.svg)]'
    >
      <Box className='flex-1/2 flex flex-col gap-3'>
        <Typography
          variant='h4'
          className='leading-18 font-semibold'
        >
          Discover & Connect with{' '}
          <span className='text-brand-500'>Temples</span>{' '}
          Worldwide
        </Typography>
        <Typography variant='h6' className='leading-10'>
          Explore sacred places, share your temple's story,
          and connect with devotees from around the globe.
        </Typography>
        <div>
          <Button className='text-white bg-brand-500 rounded-xl px-5 py-3'>
            Explore more
          </Button>
        </div>
      </Box>
      <img
        src={Arrow}
        className='absolute h-1/4 left-2/5 rotate-45 top-2/6'
      />
      <Box className='flex-1/2 '>
        <div className='grid grid-rows-6 grid-cols-6 gap-4 p-4 h-full w-full'>
          {/* First Image */}
          <img
            src={Temple1}
            alt='Image 1'
            className='row-start-2 row-end-6 col-start-1 col-end-4 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

          {/* Second Image */}
          <img
            src={Temple3}
            alt='Image 2'
            className='row-start-1 row-end-4 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

          {/* Third Image */}
          <img
            src={Temple2}
            alt='Image 3'
            className='row-start-4 row-end-7 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />
        </div>
      </Box>
    </Container>
  );
};

export default Hero;
