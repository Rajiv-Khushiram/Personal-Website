import React, { useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
import About from "../About";
import SkillSet from "../SkillSet";
import Projects from "../Projects";
//import Contact from './Components/Contact';
import background from "../../Assets/background.jpg";
// import BlogRenew from "../BlogRenew";

import Footer from "../Footer";

const HomePage = () =>  {

    useEffect(() => {
      window.document.title="Rajiv Khushiram"
    }, [])


return ( <div>
    <Header
      background={background}
      heading="Raj-K"
      subtitle={"Full Stack Web Developer"}
    />
    <div id="menu">
      <Menu />
    </div>
    <div id="blogs">
      <About />
      <SkillSet />
      <Projects />
    </div>
    {/* <BlogRenew/> */}
    <Footer background={background} />
  </div>
);
}

export default HomePage;
