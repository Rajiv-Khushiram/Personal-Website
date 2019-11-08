import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../../Assets/background.jpg';
import MainText from './MainText';
import SocialMediaLinks from './SocialMediaLinks';
import AngleDown from './AngleDown';

const Outer = styled.div`
  height: 100vh;
  min-height: 400px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: url(${background}) center center no-repeat fixed;
  background-size: cover;
  @media (max-width: 580px) {
    background-image: none;
    background-color: #111;
  }
`;

const IconsWrapper = styled.div`
  height: 100%;
  min-height: 400px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      left: '0',
      top: '0',
    };
    this.outerHovered = this.outerHovered.bind(this);
  }
  outerHovered(e) {
    this.setState({ left: `${e.pageX / 100}px`, top: `${e.pageY / 100}px` });
  }
  render() {
    return (
      <Outer id="home" onMouseMove={this.outerHovered}>
        <MainText left={this.state.left} top={this.state.top} />
        <IconsWrapper>
          <SocialMediaLinks />
          <AngleDown />
        </IconsWrapper>
      </Outer>
    );
  }
}

export default Header;
