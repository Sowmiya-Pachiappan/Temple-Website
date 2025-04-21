import { useState } from 'react';
import {
  Button,
  Stack,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { convert } from 'html-to-text';

const About = ({ data, loading }) => {
  const [showFull, setShowFull] = useState(false);

  const shortContent = data.content.slice(0, 700) + '...';

  if (loading) return <CircularProgress sx={{ m: 4 }} />;
  console.log(convert(data.content));
  return (
    <motion.div
      id='about'
      className='px-10 flex flex-col md:flex-row items-center justify-center py-10 gap-6 bg-white'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Section */}
      <motion.div
        className='w-full md:w-1/2'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={data.imageUrl}
          alt='Kula Devata'
          className='rounded-md shadow-lg w-full object-cover'
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        className='w-full md:w-1/2 text-gray-800'
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Stack gap={1} alignItems={'start'}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            gap={2}
          >
            <Stack gap={0.5} alignItems={'flex-end'}>
              <div className='h-0.5 w-5 bg-brand-500 rounded-full'></div>
              <div className='h-0.5 w-10 bg-brand-500 rounded-full'></div>
            </Stack>
            <h6 className='text-brand-500 font-bold '>
              ABOUT US
            </h6>
            <Stack gap={0.5} alignItems={'flex-start'}>
              <div className='h-0.5 w-5 bg-brand-500 rounded-full'></div>
              <div className='h-0.5 w-10 bg-brand-500 rounded-full'></div>
            </Stack>
          </Stack>
          <h3
            className='font-semibold text-2xl'
            dangerouslySetInnerHTML={{ __html: data.title }}
          ></h3>
          <p
            className='text-base leading-relaxed'
            dangerouslySetInnerHTML={{
              __html: showFull
                ? data.content
                : shortContent,
            }}
          ></p>
          {!showFull && (
            <Button
              variant='text'
              onClick={() => setShowFull(true)}
              className='p-0'
            >
              Read More
            </Button>
          )}
          {showFull && (
            <Button
              variant='text'
              onClick={() => setShowFull(false)}
              className='p-0'
            >
              Read Less
            </Button>
          )}
        </Stack>
      </motion.div>
    </motion.div>
  );
};

export default About;
