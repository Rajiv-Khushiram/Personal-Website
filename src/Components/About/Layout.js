import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import Paragraph from './Paragraph';
import Profile from './Profile';
import Wrapper from './AboutWrapper'


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
