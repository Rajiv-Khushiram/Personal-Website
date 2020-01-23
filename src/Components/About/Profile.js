import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';
import profile from '../../Assets/profile.jpg';

const Wrapper = styled.div`
  width: 30%;
  animation: ${props => (props.active ? keyframes`${bounceInRight}` : '')} 1s;
  @media (max-width: 876px) {
    width: 100%;
    margin-top: 50px;
    order: 0;
  }
`;

const Image = styled.img`
  display: block;
  margin: auto;
  padding:10px;
  border-radius: 50%;
  width: 150px;
  transition: 0.2s;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
  }
`;

const Profile = props => (
  <Wrapper active={props.active}>
    <Image src={profile} alt="Profile" />
  </Wrapper>
);

Profile.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Profile;
