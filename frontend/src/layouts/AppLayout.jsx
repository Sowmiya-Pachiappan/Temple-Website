import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Container className='p-10 m-0 w-full max-w-full '>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default AppLayout;
