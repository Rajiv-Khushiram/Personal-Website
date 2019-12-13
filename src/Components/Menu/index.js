import React, { Component } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { Navigation, NavigationBlog } from './Navigation';
import Raj from './RajLogo'

const WrapperRight = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
`;

const WrapperLeft = styled.h3`
  position: fixed;
  left: 0;
  top: 0;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navigation: props.navigation
    };
    this.hamburgerClicked = this.hamburgerClicked.bind(this);
  }
  hamburgerClicked() {
    this.setState({ active: !this.state.active });
  }
  render( ) {

    if (this.state.navigation) {
      return (
        <React.Fragment>
          <WrapperLeft>
            <Raj/>
          </WrapperLeft>
        <WrapperRight>
          <Hamburger active={this.state.active} onClick={this.hamburgerClicked} />
          <NavigationBlog active={this.state.active} />
        </WrapperRight>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <WrapperLeft>
          {/* <Raj/> */}
        </WrapperLeft>
      <WrapperRight>
        <Hamburger active={this.state.active} onClick={this.hamburgerClicked} />
        <Navigation active={this.state.active} />
      </WrapperRight>
      </React.Fragment>
    );
  }
}

export default Menu;
