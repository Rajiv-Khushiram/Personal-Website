import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import Paragraph from './Paragraph';
import Profile from './Profile';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding:20px 15px;
  justify-content: space-between;
  transition: 0.2s;
  @media (max-width: 876px) {
    flex-wrap: wrap;
    padding:0px 0px;

  }
  &:hover { 
  }

  
`;

const Layout = props => (
  <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper>
      <Paragraph active={props.active} />
      <Profile active={props.active} />
    </Wrapper>
  </Waypoint>
);

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Layout;
