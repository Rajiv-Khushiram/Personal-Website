import React, { Component } from "react";
import Header from '../Header';
import Menu from '../Menu';
import About from '../About';
import SkillSet from '../SkillSet';
import Projects from '../Projects';
//import Contact from './Components/Contact';
import background from '../../Assets/background.jpg';

import Footer from '../Footer';

const HomePage = () => (
        <div>
          <Header background={background} heading="Raj-K" subtitle={"Full Stack Web Developer"}/>
          <Menu />
          <About />
          <SkillSet />
          <Projects />
          <Footer  background={background} />
        </div>
  );

export default HomePage;