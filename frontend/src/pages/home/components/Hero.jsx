import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import Temple1 from '@/assets/images/temple-1.jpg';
import Temple2 from '@/assets/images/hero.jpg';
import Temple3 from '@/assets/images/temple-9.jpg';

const Hero = () => {
  return (
    <Container
      maxWidth={'xl'}
      className={`rounded-md  relative flex bg-cover h-[calc(100vh-104px)] bg-center bg-[url(@/assets/images/temple-2.jpeg)] `}
    >
      <div className='absolute rounded-md inset-0 bg-gradient-to-r from-black  to-black opacity-75'></div>

      <Box className='relative z-10 flex flex-col gap-5 text-white h-full justify-center text-center px-4 w-1/2'>
        <Typography
          variant='h4'
          className='leading-12 font-semibold text-left'
        >
          Experience the Divine: Discover & Connect with{' '}
          <span className='text-brand-500'>Temples</span>{' '}
          Worldwide
        </Typography>
        <Typography
          variant='body-1'
          className='leading-7 text-md text-gray-200 font-light text-left'
        >
          Explore sacred spaces from every corner of the
          world, right from your screen. Share the unique
          story of your temple, traditions, and festivals.
          Join a growing community of devotees, seekers, and
          culture lovers. Celebrate heritage, build
          spiritual connections, and pass on legacies that
          matter.
        </Typography>
        <div className='flex gap-10'>
          <Button className='relative group overflow-hidden bg-brand-500 px-5 py-3 text-white'>
            <span className='relative z-10 text-lg'>
              Explore More
            </span>

            {/* Expanding background hover effect */}
            <span className='absolute left-0 top-0 h-full w-0 bg-brand-600 z-0 group-hover:w-full transition-all duration-500'></span>
          </Button>
        </div>
      </Box>
      <Box className='w-1/2 z-10'>
        <div className='banner__video'>
          <a
            href='https://www.youtube.com/watch?v=XHOmBV4js_E'
            className='popup-video'
          >
            <i className='fi fi-sr-play'></i>
          </a>
        </div>
        <div className='grid grid-rows-6 grid-cols-6 gap-10 p-10 h-full w-full'>
          <img
            src={Temple1}
            alt='Image 1'
            className='row-start-2 row-end-6 col-start-1 col-end-4 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

          <img
            src={Temple3}
            alt='Image 2'
            className='row-start-1 row-end-4 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

          <img
            src={Temple2}
            alt='Image 3'
            className='row-start-4 row-end-7 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />
        </div>
      </Box>
      {/* <img
        src={Arrow}
        className='absolute h-1/4 left-2/5 rotate-45 top-2/6'
      /> */}
      {/* <Box className='flex-1/2 '>
        <div className='grid grid-rows-6 grid-cols-6 gap-4 p-4 h-full w-full'>
         
          <img
            src={Temple1}
            alt='Image 1'
            className='row-start-2 row-end-6 col-start-1 col-end-4 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

         
          <img
            src={Temple3}
            alt='Image 2'
            className='row-start-1 row-end-4 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />

       
          <img
            src={Temple2}
            alt='Image 3'
            className='row-start-4 row-end-7 col-start-4 col-end-7 w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105'
          />
        </div>
      </Box> */}
    </Container>
  );
};

export default Hero;
