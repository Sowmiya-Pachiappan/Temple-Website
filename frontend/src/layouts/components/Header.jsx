import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router';
import Logo from '@/assets/images/logo.png';

const Header = () => {
  return (
    <AppBar
      position='sticky'
      className='bg-white shadow-none px-10 py-5 m-0'
    >
      <Toolbar className='container mx-auto flex justify-between items-center w-full max-w-full'>
        <div className='flex items-center space-x-4'>
          <img src={Logo} width={50} />
        </div>
        <div className='space-x-4'>
          <Link to='/'>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link to='/about'>
            <Button color='inherit'>About</Button>
          </Link>
          <Link to='/outreach'>
            <Button color='inherit'>OutReach</Button>
          </Link>
          <Link to='/contact'>
            <Button color='inherit'>Contact</Button>
          </Link>
          <Link to='/login'>
            <Button color='inherit text-green-500'>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button color='inherit bg-green-500 text-white rounded-xl px-3 py-2'>
              Register
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
