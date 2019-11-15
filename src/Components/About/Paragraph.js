import React from 'react';
import PropTypes from 'prop-types';
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.p`
  width: 70%;
  line-height: 1.6;
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
  @media (max-width: 876px) {
    width: 100%;
    order: 1;
  }
`;

const SkillsetLink = styled.span`
  text-decoration: underline;
  color: dodgerblue;
  cursor: pointer;
`;

const Paragraph = props => (
  <Wrapper active={props.active}>
    Hello World! Captivated by the possibilities that the intersection of design and technology can bring,
    I stay awake motivated to drive meaningful levels of impact at different scales across the world.
    Always hungry to learn more about the world (or in general), I look forward in bringing my focused drive to empower
     teams and shape the future for the greater good. You can check my{' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>full skills set here</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href="https://github.com/Rajiv-Khushiram"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      github
    </a>{' '}
    {/* and{' '}
    <a
      href="https://codepen.io/ahmedtarek2134"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      codepen
    </a>{' '} */}
    for my projects &lt;3
  </Wrapper>
);

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Paragraph;
