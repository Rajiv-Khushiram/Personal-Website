import React, { Component } from 'react';
import Title from '../SectionTitle';
import Layout from './Layout';
import Wrapper from '../SectionWrapper';

class SkillSet extends Component {
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
      <Wrapper id="skillset">
        <Title text="Skills Set" color="69F0AE" icon="superpowers" />
        <Layout
          active={this.state.active}
          onEnter={this.onEnter}
          onLeave={this.onLeave}
        />
      </Wrapper>
    );
  }
}

export default SkillSet;
