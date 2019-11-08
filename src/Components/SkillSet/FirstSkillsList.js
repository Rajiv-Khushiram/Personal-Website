import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { bounceInLeft } from 'react-animations';

const Wrapper = styled.ul`
  width: ${100 / 3}%;
  display: inline-block;
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
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
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'Python',
  'OSGI',
  'Spring Framework',
  'Markdown',
  'Sass',
  'Less',
  'OOP Design Patterns'
];

const SkillItems = skills.map(skill => <Item key={skill}>{skill}</Item>);

const FirstSkillsList = props => (
  <Wrapper active={props.active}>{SkillItems}</Wrapper>
);

FirstSkillsList.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default FirstSkillsList;
