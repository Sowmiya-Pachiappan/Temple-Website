import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import Logo from '@/assets/images/logo-white.png';
const Footer = () => {
  return (
    <Box
      component={'footer'}
      className='bg-gray-950 shadow-none p-10'
    >
      <Stack direction={'row'} gap={4}>
        <Box className='flex-1 flex flex-col gap-5'>
          <NavLink
            to='/'
            className='flex items-center space-x-4'
          >
            <img src={Logo} width={70} alt='Logo' />
          </NavLink>
          <Typography
            variant='h4'
            className='text-xl text-white'
          >
            TempleConnect
          </Typography>
          <Typography
            variant='body1'
            className='text-gray-500'
          >
            TempleConnect helps you explore, share, and
            connect with temples across the globe. It's more
            than just a directory—it's a cultural home for
            spiritual discovery and storytelling. Unite
            hearts, one temple at a time.
          </Typography>
        </Box>
        <Box className='flex-1'>
          <Typography
            variant='h4'
            className='text-xl text-white mb-5'
          >
            Quick Links
          </Typography>
          <Stack className='text-gray-500' gap={2}>
            <NavLink className={'hover:text-white'} to='#'>
              Home
            </NavLink>
            <NavLink className={'hover:text-white'} to='#'>
              Discover Temples
            </NavLink>
            <NavLink className={'hover:text-white'} to='#'>
              Share Your Temple
            </NavLink>
            <NavLink className={'hover:text-white'} to='#'>
              Events
            </NavLink>
            <NavLink className={'hover:text-white'} to='#'>
              About Us
            </NavLink>
            <NavLink className={'hover:text-white'} to='#'>
              Contact
            </NavLink>
          </Stack>
        </Box>

        <Box className='flex-1'>
          <Typography
            variant='h4'
            className='text-xl text-white mb-5 border-b-[50%] border-brand-500'
          >
            Follow Us:
          </Typography>
          <Stack
            className='text-gray-500 mb-10'
            gap={4}
            direction={'row'}
          >
            <i className='fi fi-brands-facebook text-2xl cursor-pointer hover:text-white'></i>
            <i className='fi fi-brands-instagram text-2xl cursor-pointer hover:text-white'></i>
            <i className='fi fi-brands-youtube text-2xl cursor-pointer hover:text-white'></i>
          </Stack>
          <Typography
            variant='h4'
            className='text-xl text-white mb-5 border-b-[50%] border-brand-500'
          >
            Contact Us:
          </Typography>
          <Stack className='text-gray-500' gap={2}>
            <Stack direction={'row'} gap={1}>
              <span>
                <i className='fi fi-rr-envelope text-xl'></i>
              </span>
              support@templeconnect.com
            </Stack>
            <Stack direction={'row'} gap={1}>
              <span>
                <i className='fi fi-rr-phone-call text-xl'></i>
              </span>
              +91 98765 43210
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
