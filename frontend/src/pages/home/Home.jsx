import About from './About';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Contact from './Contact';
import Outreach from './Outreach';

const Home = () => {
  return (
    <>
      <div id='home'>
        <Hero />
        <Feature />
      </div>
      <About />
      <Outreach />
      <Contact />
    </>
  );
};

export default Home;
