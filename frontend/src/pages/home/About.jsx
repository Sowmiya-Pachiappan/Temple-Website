import { useState } from 'react';
import { Button, Stack } from '@mui/material';
import { motion } from 'motion/react';
import Image from '@/assets/images/temple-8.jpg';

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const content = `
    A Kula Devata (family deity) - The word is derived from two words: Kula, meaning clan and devata, meaning deity. 
    It refers to the ancestral tutelary deity worshipped by a particular kula (clan) and gotra (lineage). 
    This deity acts as a guardian, protecting the entire lineage of the clan from misfortunes (daridram) and evil 
    influences like black magic, the evil eye, and depression. Worshiping the Kula Devata is deeply significant, 
    as it strengthens the bond between the family and the deity, ensuring blessings and protection. Many people face 
    hardships despite visiting various temples and astrologers, often because they have forgotten their Kula Devata. 
    While no deity will harm you for neglecting worship, reconnecting with your family deity is essential, especially 
    if your family is facing difficulties. Ideally, family members should visit the Kula Devata’s temple at least once 
    a year. If your cousins or paternal relatives continue the worship and include your details in rituals (pooja/sankalpa), 
    the protection remains. However, if the entire extended family loses touch with the deity, it is crucial to reestablish 
    the connection without delay. By tradition, a father’s Kula Devata is inherited by the son, passing through generations. 
    A married daughter adopts her husband’s Kula Devata. However, if one is unaware of the father's family deity, worshiping 
    the mother’s Kula Devata with full devotion is an alternative. Ultimately, faith is the core of this practice—whichever 
    deity one believes in should bring solace, peace, and strength. Kula Devata Upasana (personal deity worship) is a powerful 
    method to handle karma. Ignoring it is like neglecting a doctor despite an illness. While some people may lead an apparently 
    peaceful life despite not undertaking any upasana, most people require spiritual guidance to heal their karmic burdens. 
    To restore divine blessings, ensure that your family maintains Kula Devata worship—for protection, peace, and prosperity.
  `;

  const shortContent = content.slice(0, 700) + '...';

  return (
    <motion.div
      id='about'
      className='flex flex-col md:flex-row items-center justify-center py-10 gap-6 bg-white'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <motion.div
        className='w-full md:w-1/2'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img
          src={Image}
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
        viewport={{ once: true }}
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
          <h3 className='font-semibold text-2xl'>
            Honoring Our Kula Devata – Together
          </h3>
          <p className='text-base leading-relaxed'>
            {showFull ? content : shortContent}
          </p>
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
