import React from 'react';
import styled, { keyframes } from 'styled-components';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';
import { bounceInRight } from 'react-animations';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3% 0;
  animation: ${props => (props.active ? keyframes`${bounceInRight}` : '')} 1s;
`;

const Projects = [
  {
    title: 'Hackathon 2019',
    description:
      `A prototype for grouping students in team projects`,
    link: 'https://reactrkfirebasegcp.firebaseapp.com',
    githublink: 'https://github.com/Rajiv-Khushiram/reactrk'
  },
  {
    title: 'Google Business Reviews-Project',
    description:
      'A project which engages customers in submitting a reviews to generate customer trust',
    link: 'https://rajivkhushiram-reviews-project.firebaseapp.com/',
    githublink: 'https://github.com/Rajiv-Khushiram/Reviews-App-For-Business'
  },
  {
    title: 'First Porfolio',
    description:
      "A demo of my first Portfolio page",
    link: 'https://rajivkhushiram.com',
    githublink:'https://github.com/Rajiv-Khushiram/rktechnologies'
  },
  {
    title: 'Enhanced Porfolio',
    description:
      'This website :) ',
    link: 'https://raj-c-k.web.app',
    githublink:'https://github.com/Rajiv-Khushiram/Personal-Website'
  },
  {
    title: 'Avengers End Game Project',
    description:
      "A Hexagonal Java Board Game applying object oriented JAVA design Patterns",
      githublink: 'https://github.com/Rajiv-Khushiram/Avengers_End_Game',
    },
  {
    title: 'RSA Encryption Prototype',
    description:
      "A prototype of RSA encryption on server and client level",
      githublink: 'https://github.com/Rajiv-Khushiram/RSA_Encryption-with-PHP-and-JavaScript',
  },
];

const Cards = Projects.map(project => (
  <Card
    title={project.title}
    description={project.description}
    link={project.link}
    githublink={project.githublink}
    key={project.title}
  />
));

const Layout = props => (
  <Waypoint onEnter={props.onEnter} onLeave={props.onLeave}>
    <Wrapper active={props.active}>{Cards}</Wrapper>
  </Waypoint>
);

Layout.propTypes = {
  active: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Layout;