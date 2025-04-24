import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import Logo from '@/assets/images/logo-white.png';

const Footer = () => {
  return (
    <Box
      component='footer'
      className='bg-gray-950 px-6 py-10 md:px-16 md:py-14'
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 8, md: 6 }}
        justifyContent='space-between'
        alignItems={{ xs: 'flex-start', md: 'flex-start' }}
        className='w-full'
      >
        {/* Left Section */}
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
            className='text-gray-400 text-sm'
          >
            TempleConnect helps you explore, share, and
            connect with temples across the globe. It's more
            than just a directory—it's a cultural home for
            spiritual discovery and storytelling. Unite
            hearts, one temple at a time.
          </Typography>
        </Box>

        {/* Middle Section */}
        <Box className='flex-1'>
          <Typography
            variant='h4'
            className='text-xl text-white mb-5 relative after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-[20%] md:after:w-[10%] after:bg-brand-500'
          >
            Quick Links
          </Typography>
          <Stack
            className='text-gray-400 text-sm'
            spacing={2}
          >
            {[
              'Home',
              'Discover Temples',
              'Share Your Temple',
              'Events',
              'About Us',
              'Contact',
            ].map((label) => (
              <NavLink
                key={label}
                to='#'
                className='hover:text-white transition-colors'
              >
                {label}
              </NavLink>
            ))}
          </Stack>
        </Box>

        {/* Right Section */}
        <Box className='flex-1'>
          <Typography
            variant='h4'
            className='text-xl text-white mb-5 relative after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-[20%] md:after:w-[10%] after:bg-brand-500'
          >
            Follow Us:
          </Typography>
          <Stack
            direction='row'
            spacing={4}
            className='text-gray-400 mb-8'
          >
            <i className='fi fi-brands-facebook text-2xl cursor-pointer hover:text-white'></i>
            <i className='fi fi-brands-instagram text-2xl cursor-pointer hover:text-white'></i>
            <i className='fi fi-brands-youtube text-2xl cursor-pointer hover:text-white'></i>
          </Stack>

          <Typography
            variant='h4'
            className='text-xl text-white mb-5 relative after:content-[""] after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-[20%] md:after:w-[10%] after:bg-brand-500'
          >
            Contact Us:
          </Typography>
          <Stack
            spacing={2}
            className='text-gray-400 text-sm'
          >
            <Stack
              direction='row'
              spacing={1}
              alignItems='center'
            >
              <i className='fi fi-rr-envelope text-xl'></i>
              <span>support@templeconnect.com</span>
            </Stack>
            <Stack
              direction='row'
              spacing={1}
              alignItems='center'
            >
              <i className='fi fi-rr-phone-call text-xl'></i>
              <span>+91 98765 43210</span>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
