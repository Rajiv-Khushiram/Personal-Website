import React, { Component } from 'react';
import Layout from './Layout';
import Title from '../SectionTitle';
import Wrapper from '../SectionWrapper';

class About extends Component {
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
      <Wrapper id="about">
        <Title text="About Me" color="ffc107" icon="star" />
        <Layout
          active={this.state.active}
          onEnter={this.onEnter}
          onLeave={this.onLeave}
        />
      </Wrapper>
    );
  }
}

export default About;
