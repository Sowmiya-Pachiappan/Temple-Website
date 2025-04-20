import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as ScrollLink, scroller } from 'react-scroll';
import Logo from '@/assets/images/logo.png';
import { useState, useEffect, useCallback } from 'react';
import {
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router';

const Header = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(
    location.hash.replace('#', '') || 'home'
  );

  const sections = ['home', 'about', 'outreach', 'contact'];
  const isLoggedIn = localStorage.getItem('token');
  const navigate = useNavigate();

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const sectionEls = document.querySelectorAll('section');
    let found = false;

    for (const section of sectionEls) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120 && !found) {
        const newActive = section.id;
        if (newActive !== activeSection) {
          setActiveSection(newActive);
          window.history.replaceState(
            null,
            '',
            `#${newActive}`
          );
        }
        found = true;
      }
    }
  }, [activeSection]);
  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scroll to section on hash change or first load
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    } else {
      setActiveSection('home');
      scroller.scrollTo('home', {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }
  }, [location.hash]);

  const navLinkClass = useCallback(
    (sectionId) =>
      `cursor-pointer relative px-2 py-1 transition-all duration-300 ease-in-out
      ${
        activeSection === sectionId
          ? 'text-gray-700 font-semibold'
          : 'text-gray-700'
      }
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
      after:h-[2px] after:bg-brand-500 after:transition-all after:duration-300
      ${
        activeSection === sectionId
          ? 'after:w-1/2'
          : 'after:w-0 hover:after:w-1/2'
      }`,
    [activeSection]
  );

  return (
    <AppBar
      position='sticky'
      className='bg-white shadow-none px-10 py-5 m-0 z-50'
    >
      <Toolbar className='container mx-auto flex justify-between items-center w-full max-w-full'>
        <NavLink
          to='/'
          className='flex items-center space-x-4'
        >
          <img src={Logo} width={50} alt='Logo' />
        </NavLink>
        <div className='space-x-6 flex items-center'>
          {sections.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => {
                setTimeout(() => {
                  setActiveSection(section);
                  window.history.replaceState(
                    null,
                    '',
                    `#${section}`
                  );
                }, 100);
              }}
            >
              <div className={navLinkClass(section)}>
                {section.charAt(0).toUpperCase() +
                  section.slice(1)}
              </div>
            </ScrollLink>
          ))}
          {!isLoggedIn && (
            <>
              <NavLink
                to={'/login'}
                className='text-brand-500 cursor-pointer transition duration-300 ease-in-out'
              >
                Login
              </NavLink>
              <NavLink
                to='/register'
                className='bg-brand-500 text-white rounded-xl px-4 py-2 hover:bg-brand-600 transition duration-300 ease-in-out cursor-pointer'
              >
                Register
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <Stack
              direction={'row'}
              gap={1}
              alignItems={'center'}
              className='cursor-pointer'
            >
              <i className='fi fi-rr-power'></i>
              <Typography
                variant='body1'
                onClick={logoutHandler}
              >
                Logout
              </Typography>
            </Stack>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
