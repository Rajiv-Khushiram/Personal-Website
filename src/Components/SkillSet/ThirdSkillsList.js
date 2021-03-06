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
  z-index:-2;
`;

const Item = styled.li`
  line-height: 1.6;
  padding: 10px 0;
`;

const skills = [
  'Git ✔️',
  'CI/CD ✔️',
  'Firebase Suite ✔️',
  'Google Cloud Platform ✔️',
  'Cloud Run',
  'Containers',
  'AWS',
  'Big Query',
  'New Relic',
  'Jenkins',
  'Cloud build',
  'EC2 Instances',
  'AWS Cloudwatch',
  'AWS SQS',
  'AWS SNS',
];

const SkillItems = skills.map(skill => <Item key={skill}>{skill}</Item>);

const ThirdSkillsList = props => (
  <Wrapper active={props.active}><h1>DevOps</h1>{SkillItems}</Wrapper>
);

ThirdSkillsList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ThirdSkillsList;
