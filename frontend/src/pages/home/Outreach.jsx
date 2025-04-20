import ImageSwiper from '@/components/ImageSwiper';
import { Button, Stack } from '@mui/material';
import { motion } from 'motion/react';
import { useState } from 'react';
import EventModal from './components/EventModal';

const Outreach = () => {
  const [showEventModal, setShowEventModal] =
    useState(false);
  const postFestHandler = () => {
    setShowEventModal(true);
  };
  const closeHandler = () => {
    setShowEventModal(false);
  };
  console.log(showEventModal);
  return (
    <motion.div
      id='outreach'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='px-10 flex flex-col  items-center justify-center py-10 gap-6 bg-white'
    >
      <motion.div
        className='w-full md:w-2/3 text-gray-800 text-center'
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <EventModal
          open={showEventModal}
          onClose={closeHandler}
        />
        <Stack gap={1}>
          <Stack
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Stack gap={0.5} alignItems={'flex-end'}>
              <div className='h-0.5 w-5 bg-brand-500 rounded-full'></div>
              <div className='h-0.5 w-10 bg-brand-500 rounded-full'></div>
            </Stack>
            <h6 className='text-brand-500 font-bold '>
              OUTREACH
            </h6>
            <Stack gap={0.5} alignItems={'flex-start'}>
              <div className='h-0.5 w-5 bg-brand-500 rounded-full'></div>
              <div className='h-0.5 w-10 bg-brand-500 rounded-full'></div>
            </Stack>
          </Stack>
          <h3 className='font-semibold text-2xl'>
            Extending Divine Connections Across Borders
          </h3>
          <p className='text-base leading-relaxed'>
            Our outreach initiatives are dedicated to
            spreading spiritual wisdom, cultural heritage,
            and compassionate service beyond temple walls.
            Through community events, charity drives, and
            global connections, we bring people together to
            celebrate shared values and enrich lives. Join
            us in creating a more united, spiritually aware
            world.
          </p>
          <div>
            <Button
              onClick={postFestHandler}
              variant='contained'
              className='mt-4 bg-brand-500 text-white px-6 py-2 rounded-md hover:bg-brand-600 transition-colors duration-300 shadow-md'
            >
              Post Your Fest
            </Button>
          </div>
        </Stack>
      </motion.div>

      <ImageSwiper />
    </motion.div>
  );
};

export default Outreach;
