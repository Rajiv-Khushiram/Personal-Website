import React from 'react';
import PropTypes from 'prop-types';
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.p`
  width: 70%;
  font-size: 22px;
  text-align:left;
  text-indent: 20px;
  max-width:1100px;
  padding:40px;
  line-height: 1.7;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

  border-radius:14px;
  transition: 0.2s;
  animation: ${props => (props.active ? keyframes`${bounceInLeft}` : '')} 1s;
  &:hover {
    transform: scale(1.1);

  }

  @media (max-width: 876px) {
    width: 100%;
    order: 1;
    padding:30px
    
  }
`;

const SkillsetLink = styled.span`
  text-decoration: underline;
  color: dodgerblue;
  cursor: pointer;
`;

const Paragraph = props => (
  <Wrapper active={props.active}>
    <strong>Hello World!... </strong> I'm <strong>Rajiv</strong>,  a web developer with over <strong>4</strong> years of commercial experience in <strong> Java, Python </strong>and <strong>JavaScript</strong> development.
    <br/> Currently a <strong>Full Stack JavaScript Developer</strong> at  <a
      href="https://sayi.do/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
     SAY I DO{' '}
    </a>using  <strong>GCP</strong> and  <strong>AWS</strong> cloud services.{' '}

     See my{' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>skills</SkillsetLink>
    </Link>{' '}
    and be sure to check out my{' '}
    <a
      href="https://drive.google.com/open?id=1A2lvI8pMncs4GRtazdZX1mLf7PifkJQ3"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      resume,
    </a>{' '}
    <a
      href="https://github.com/Rajiv-Khushiram"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      github
    </a>{' '}
    and{' '}
    <a
      href="/blog"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      blog.
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
     {/* &lt;3 */}
  </Wrapper>
);

Paragraph.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Paragraph;
