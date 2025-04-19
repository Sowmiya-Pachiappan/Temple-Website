import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';

const AppLayout = () => {
  return (
    <>
      <Header />
      <div className='m-0 w-full max-w-full '>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
