import React, { Component } from "react";
import Header from '../Header';
import Menu from '../Menu';
import About from '../About';
import SkillSet from '../SkillSet';
import Projects from '../Projects';
//import Contact from './Components/Contact';
import Footer from '../Footer';

const HomePage = () => (
        <div>
          <Header subtitle={"Full Stack Web Developer"}/>
          <Menu />
          <About />
          <SkillSet />
          <Projects />
          <Footer />
        </div>
  );

export default HomePage;