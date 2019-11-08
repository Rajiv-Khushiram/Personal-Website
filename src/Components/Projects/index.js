import React, { Component } from 'react';
import Title from '../SectionTitle';
import Layout from './Layout';
import Wrapper from '../SectionWrapper';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.onEnter = this.onEnter.bind(this);
    this.onLeave = this.onLeave.bind(this);
  }
  onEnter() {
    this.setState({ active: true });
  }
  onLeave() {
    this.setState({ active: false });
  }
  render() {
    return (
      <Wrapper id="projects">
        <Title text="My Projects" icon="eye" color="ff4f81" />
        <Layout
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          active={this.state.active}
        />
      </Wrapper>
    );
  }
}

export default Projects;
