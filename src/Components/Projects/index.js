import React, { useState } from "react";
import Title from "../SectionTitle";
import Layout from "./Layout";
import Wrapper from "../SectionWrapper";

const Projects = () => {
  const [active, setActive] = useState(false);

  const onEnter = () => setActive(true);
  const onLeave = () => setActive(false);

  return (
    <Wrapper id="projects">
      <Title text="My Projects" icon="eye" color="ff4f81" />
      <Layout onEnter={onEnter} onLeave={onLeave} active={active} />
    </Wrapper>
  );
};

export default Projects;
