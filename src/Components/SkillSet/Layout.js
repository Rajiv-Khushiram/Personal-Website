import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Waypoint from 'react-waypoint';
import FirstSkillsList from './FirstSkillsList';
import SecondSkillsList from './SecondSkillsList';
import ThirdSkillsList from './ThirdSkillsList';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  @media (max-width: 580px) {
    flex-wrap: wrap;
  }
`;

const Layout = props => (
  <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper>
      <FirstSkillsList active={props.active} />
      <SecondSkillsList active={props.active} />
      <ThirdSkillsList active={props.active} />
    </Wrapper>
  </Waypoint>
);

Layout.propTypes = {
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Layout;
