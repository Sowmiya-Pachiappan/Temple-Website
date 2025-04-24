import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import Image from '@/assets/images/decorativeLamp.png';
import Image1 from '@/assets/images/om-logo.png';
import { useEffect, useState } from 'react';
import { sendContactMessage } from '@/api/contactApi';
import { getMyTemples } from '@/api/templeApi';
import Title from '@/components/Title';

const Contact = () => {
  const [contactData, setContactData] = useState({
    templeId: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showErrorAlert, setShowErrorAlert] =
    useState(false);
  const [showSuccessAlert, setShowSuccessAlert] =
    useState(false);
  const [devataMandirs, setDevataMandirs] = useState([]);

  const closeHandler = () => {
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
  };

  const fetchData = async () => {
    try {
      const templeRes = await getMyTemples();
      setDevataMandirs(templeRes?.data?.temples);
    } catch (err) {
      const message =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.error ||
        err?.message;
      setError(message);
      setShowErrorAlert(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      await sendContactMessage({
        ...contactData,
        name: user.name,
        email: user.email,
      });

      setShowSuccessAlert(true);
      setContactData({ templeId: '', message: '' });
    } catch (err) {
      const message =
        err.response?.data?.message || err.message;
      setError(message);
      setShowErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      id='contact'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='relative flex flex-col lg:flex-row p-5 md:p-10  gap-10 bg-brand-50 overflow-hidden'
    >
      {/* Left Text Section */}
      <motion.div
        className='z-10 w-full lg:w-3/5 text-gray-800'
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Stack
          gap={1}
          alignItems={'start'}
          className='items-center md:items-start'
        >
          <Title subTitle={'CONTACT US'} />
          <h3 className='font-semibold text-2xl'>
            Connect with the Divine Space
          </h3>
          <p className='text-gray-600 text-justify'>
            Whether you have a prayer request, a question
            about temple services, or just want to send your
            blessings, we are here to listen. Reach out and
            feel the spiritual connection.
          </p>

          <Box className='flex-1 mb-10'>
            <Typography
              variant='body1'
              className='text-current mb-3 font-semibold'
            >
              Follow Us:
            </Typography>
            <Stack
              direction='row'
              gap={4}
              className='text-gray-500 mb-5'
            >
              <i className='fi fi-brands-facebook text-xl cursor-pointer hover:text-brand-500'></i>
              <i className='fi fi-brands-instagram text-xl cursor-pointer hover:text-brand-500'></i>
              <i className='fi fi-brands-youtube text-xl cursor-pointer hover:text-brand-500'></i>
            </Stack>
            <Typography
              variant='body1'
              className='text-current mb-3 font-semibold'
            >
              Contact Us:
            </Typography>
            <Stack gap={2} className='text-gray-500'>
              <Stack direction='row' gap={1}>
                <i className='fi fi-rr-envelope text-lg'></i>{' '}
                support@templeconnect.com
              </Stack>
              <Stack direction='row' gap={1}>
                <i className='fi fi-rr-phone-call text-lg'></i>{' '}
                +91 98765 43210
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </motion.div>

      {/* Decorative Image */}
      <img
        src={Image}
        alt='Decorative'
        className='absolute z-0 top-0 right-[20px] lg:right-[-60px] h-full hidden md:block md:opacity-30 lg:opacity-80'
      />

      {/* Alerts */}
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={closeHandler}
      >
        <Alert
          severity='error'
          onClose={closeHandler}
          className='mb-10'
        >
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={closeHandler}
      >
        <Alert
          severity='success'
          onClose={closeHandler}
          className='mb-10'
        >
          Thank you for reaching out! We’ve received your
          message and will get back to you shortly.
        </Alert>
      </Snackbar>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='w-full lg:w-2/5'
      >
        <Card className='rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl'>
          <CardContent className='p-5 md:p-8'>
            <Stack alignItems='center'>
              <img
                src={Image1}
                alt='Spiritual Connection'
                className='w-32 md:w-40'
              />
            </Stack>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-5 mt-4'
            >
              <FormControl fullWidth size='small'>
                <InputLabel>Select Your Temple</InputLabel>
                <Select
                  label='Select Your Temple'
                  name='templeId'
                  value={contactData?.templeId}
                  onChange={handleChange}
                  required
                >
                  {devataMandirs?.map((mandir) => (
                    <MenuItem
                      key={mandir.id}
                      value={mandir.id}
                    >
                      {mandir?.mandirName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                value={contactData?.message}
                onChange={handleChange}
                size='small'
                label='Message'
                name='message'
                variant='outlined'
                fullWidth
                required
                multiline
                rows={4}
              />
              <div className='text-right'>
                <Button
                  type='submit'
                  loading={loading}
                  variant='contained'
                  className='bg-brand-500 text-white px-6 py-2 rounded-md hover:bg-brand-600 transition-colors duration-300 shadow-md'
                >
                  Send Your Thoughts
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
