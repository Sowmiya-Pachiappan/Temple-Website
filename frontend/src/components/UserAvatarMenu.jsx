import { useState } from 'react';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  Logout,
  Settings,
  Person,
} from '@mui/icons-material';

const UserAvatarMenu = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <div className='relative'>
      <IconButton
        onClick={handleClick}
        size='small'
        className='ml-2'
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar
          className='bg-brand-500 w-10 h-10 text-white text-base'
          src={user?.avatarUrl}
        >
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'top',
        }}
        PaperProps={{
          className:
            'mt-3 rounded-lg shadow-lg border border-gray-100 min-w-[180px]',
        }}
      >
        <MenuItem className='hover:bg-gray-100'>
          <ListItemIcon>
            <Person fontSize='small' />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem className='hover:bg-gray-100'>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={handleLogout}
          className='hover:bg-gray-100'
        >
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserAvatarMenu;
