import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { bounceInUp } from 'react-animations';

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
  animation: ${props => (props.active ? keyframes`${bounceInUp}` : '')} 1s 0.5s,
    ${props => (props.active ? Animation : '')} 0.2s 0.5s forwards;
  padding: 0;
  margin: 0;
  text-align: center;
  list-style: none;
  z-index:-2;
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
  'NodeJS ✔️',
  'NPM',
  'Express',
  'RESTful APIs ✔️',
  'Cloud Functions ✔️',
  'Mongo/Mongoose ✔️',
  'Sequelize',
  'MailJet ✔️',
  'Streams',
  'PostgreSQL',
  'Spring ',
  'Gulp',
  'Gradle/Maven',
  'Sinon JS',
];

const SkillItems = skills.map(skill => <Item key={skill}>{skill}</Item>);

const SecondSkillsList = props => (
  <Wrapper active={props.active}><h1>Back-End</h1>{SkillItems}</Wrapper>
);

SecondSkillsList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default SecondSkillsList;
