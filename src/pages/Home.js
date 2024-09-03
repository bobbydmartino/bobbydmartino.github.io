import React from 'react';
import About from '../components/About';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <About />
      <Education />
      <Portfolio />
      <Hobbies />
      <Contact />
    </>
  );
};

export default Home;
