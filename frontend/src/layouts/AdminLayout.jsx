import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Dashboard,
  Event,
  People,
  Logout,
  TempleHindu,
} from '@mui/icons-material';
import { NavLink, Outlet, useNavigate } from 'react-router';
import Logo from '@/assets/images/logo.png';

const drawerWidth = 240;

const AdminLayout = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <Dashboard />,
      path: '/admin/dashboard',
    },
    {
      text: 'Temples',
      icon: <TempleHindu />,
      path: '/admin/temples',
    },
    {
      text: 'Events',
      icon: <Event />,
      path: '/admin/events',
    },
    {
      text: 'Users',
      icon: <People />,
      path: '/admin/users',
    },
    { text: 'Logout', icon: <Logout /> },
  ];
  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <Box className='flex'>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box className='flex-1 flex flex-col gap-10 p-4'>
          <NavLink
            to='/'
            className='flex justify-center items-center space-x-4'
          >
            <img src={Logo} width={50} alt='Logo' />
          </NavLink>
          <List>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                onClick={() =>
                  item.text === 'Logout'
                    ? logoutHandler()
                    : navigate(item.path)
                }
                className='rounded-md hover:bg-brand-500 group cursor-pointer'
              >
                <ListItemIcon className='group-hover:text-white'>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className='group-hover:text-white'
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component='main'
        className='flex-1 min-h-screen  p-6'
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
