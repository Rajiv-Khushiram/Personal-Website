import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { bounceInRight } from 'react-animations';

const Animation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.ul`
  width: ${100 / 3}%;
  display: inline-block;
  opacity: 0;
  animation: ${props => (props.active ? keyframes`${bounceInRight}` : '')} 1s 1s,
    ${props => (props.active ? Animation : '')} 0.2s 1s forwards;
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
  @media (max-width: 580px) {
    width: 100%;
    display: block;
    text-align: left;
    list-style: circle;
    padding-left: 5%;
  }
`;

const Item = styled.li`
  line-height: 1.6;
  padding: 10px 0;
`;

const skills = [
  'Git',
  'CI/CD',
  'Cloud Functions',
  'API Integrations',
  'Linux Administration',
  'Firebase',
  'Firestore',
  'MailJet',
  'Big Query',
  'Web Security', 
  'GCP',
  'AWS',
];

const SkillItems = skills.map(skill => <Item key={skill}>{skill}</Item>);

const ThirdSkillsList = props => (
  <Wrapper active={props.active}>{SkillItems}</Wrapper>
);

ThirdSkillsList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ThirdSkillsList;
