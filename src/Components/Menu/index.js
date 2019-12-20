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
      navigation: props.navigation,
      showTopMenu: true
    };
    this.hamburgerClicked = this.hamburgerClicked.bind(this);
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener('scroll', e => this.handleNavigation(e));
}

  componentWillUnmount() { 
    window.removeEventListener('scroll', e => this.handleNavigation(e));
  }

handleNavigation = (e) => {
    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
        console.log("scrolling up");
        this.setState({showTopMenu : true})


    } else if (this.prev < window.scrollY) {
        console.log("scrolling down");
        this.setState({showTopMenu : false})


    }
    this.prev = window.scrollY;
};

  hamburgerClicked() {
    this.setState({ active: !this.state.active });
  }

  render( ) {
    return (
      <React.Fragment>
        <div className={this.state.showTopMenu ? 'show' : 'hidden'}>
        <WrapperLeft>
          <Raj/>
        </WrapperLeft>
      <WrapperRight>
        <Hamburger active={this.state.active} onClick={this.hamburgerClicked} />
        { this.state.navigation
        ?   <NavigationBlog active={this.state.active} />
        :   <Navigation active={this.state.active} />
      }
      </WrapperRight>
      </div>
      </React.Fragment>
    );
  }
}

export default Menu;
 