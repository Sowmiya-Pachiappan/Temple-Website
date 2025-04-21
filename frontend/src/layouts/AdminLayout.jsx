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
  DisplaySettings,
} from '@mui/icons-material';
import {
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router';
import Logo from '@/assets/images/logo.png';

const drawerWidth = 240;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook

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
    {
      text: 'Home Page Content',
      icon: <DisplaySettings />,
      path: '/admin/homePageContent',
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

          <List className='flex flex-col gap-2'>
            {menuItems.map((item) => {
              const isActive =
                location.pathname === item.path;
              const isLogout = item.text === 'Logout';

              return (
                <ListItem
                  key={item.text}
                  disablePadding
                  className='rounded-md cursor-pointer'
                >
                  <div
                    onClick={() =>
                      isLogout
                        ? logoutHandler()
                        : navigate(item.path)
                    }
                    className={`w-full group flex items-center px-4 py-2 space-x-3 rounded-md transition-colors duration-200
            ${
              isActive
                ? 'bg-brand-500 text-white'
                : 'hover:bg-brand-500 hover:text-white'
            }`}
                  >
                    <ListItemIcon
                      sx={{ minWidth: 40 }}
                      className={`${
                        isActive
                          ? 'text-white group-hover:text-white'
                          : 'group-hover:text-white'
                      }`}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.text}
                      className='group-hover:text-white'
                    />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      <Box
        component='main'
        className='flex-1 min-h-screen p-6'
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
