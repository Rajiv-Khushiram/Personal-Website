import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import PropTypes from 'prop-types';

const HamburgerOuter = styled.div`
  outline: none;
  padding: 0;
  position: fixed;
  right: 30px;
  top: 30px;
  animation: ${keyframes`${bounceInRight}`} 1s;
  z-index: 999;
  @media (max-width: 580px) {
    display: none;
  }
`;

const HamburgerInner = styled.div`
  background-color: #fff;
  &::before,
  &::after {
    background-color: #fff;
  }
`;

const Hamburger = props => (
  <HamburgerOuter
    className={`hamburger hamburger--collapse ${
      props.active ? 'is-active' : ''
    }`}
    onClick={props.onClick}
  >
    <div className="hamburger-box">
      <HamburgerInner className="hamburger-inner" />
    </div>
  </HamburgerOuter>
);

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hamburger;
