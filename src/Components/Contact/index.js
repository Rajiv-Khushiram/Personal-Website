import React, { Component } from 'react';
import Title from '../SectionTitle';
import Form from './Form';
import Wrapper from '../SectionWrapper';

class Contact extends Component {
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
      <Wrapper id="contact">
        <Title text="Contact Me" color="4CAF50" icon="phone" />
        <Form
          active={this.state.active}
          onEnter={this.onEnter}
          onLeave={this.onLeave}
        />
      </Wrapper>
    );
  }
}

export default Contact;
