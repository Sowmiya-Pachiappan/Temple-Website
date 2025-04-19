import { Stack } from '@mui/material';
import About from './About';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Contact from './Contact';
import Outreach from './Outreach';

const Home = () => {
  return (
    <Stack className='overflow-hidden'>
      <div id='home' className='px-10'>
        <Hero />
        <Feature />
      </div>
      <About />
      <Outreach />
      <Contact />
    </Stack>
  );
};

export default Home;
