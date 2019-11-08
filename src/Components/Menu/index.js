import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Navigation from './Navigation';

const Wrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.hamburgerClicked = this.hamburgerClicked.bind(this);
  }
  hamburgerClicked() {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <Wrapper>
        <Hamburger active={this.state.active} onClick={this.hamburgerClicked} />
        <Navigation active={this.state.active} />
      </Wrapper>
    );
  }
}

export default Menu;
