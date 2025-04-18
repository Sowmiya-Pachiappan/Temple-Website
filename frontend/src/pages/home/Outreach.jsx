import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Box,
  Button,
  MenuItem,
  TextField,
} from '@mui/material';
import Temple from '@/assets/images/temple-5.jpeg';

const Outreach = () => {
  const temples = [
    {
      label: 'Sri Venkateswara Temple',
      value: 'venkateswara',
    },
    { label: 'Meenakshi Amman Temple', value: 'meenakshi' },
    { label: 'Kashi Vishwanath Temple', value: 'kashi' },
    // Add more temples as needed
  ];

  const [selectedTemple, setSelectedTemple] = useState('');
  const [eventName, setEventName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedTemple, eventName, date });
    // Add your submission logic here
  };

  return (
    <motion.div
      id='outreach'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box>
        <img src={Temple} alt='Kula Devata' />
        <Box className='bg-brand-500 p-10 '>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4'
          >
            <TextField
              size='small'
              select
              label='Select Temple'
              value={selectedTemple}
              onChange={(e) =>
                setSelectedTemple(e.target.value)
              }
              fullWidth
            >
              {temples.map((temple) => (
                <MenuItem
                  key={temple.value}
                  value={temple.value}
                >
                  {temple.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              size='small'
              label='Event Name'
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              fullWidth
            />

            <TextField
              size='small'
              label='Date'
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <Button
              type='submit'
              variant='contained'
              className='bg-brand-500 text-white hover:bg-brand-600'
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Outreach;
