import React from 'react';
import PropTypes from 'prop-types';
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.p`
  width: 70%;
  font-size: 19px;
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
    How is World? I'm a web developer with over 4 years of commercial experience in <strong> React </strong>and <strong>Java</strong> development. As a <strong>Full Stack JavaScript Developer</strong> at  <a
      href="https://sayi.do/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
     SAYI DO{' '}
    </a>I work with React and the <strong>AWS</strong> || <strong>GCP</strong> stack to provide serveless solutions. 

     You can check my{' '}
    <Link to="skillset" spy={true} smooth={true}>
      <SkillsetLink>skills here</SkillsetLink>
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
    and{' '}
    <a
      href="/blog"
      rel="noopener noreferrer"
      style={{ color: 'dodgerblue' }}
    >
      blog
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
