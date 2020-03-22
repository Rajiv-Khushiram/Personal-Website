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
    title: `SAYI.DO`,
    description: ` A commercial web app built around wedding services such as designing your wedding website, guestlist, RSVPs, seat planner, Todo-list, etc...`,
    link: "https://sayi.do/"
  },
  {
    title: `Weather-Widget-App`,
    description: ` A prototype app which displays your weather for the week similar to google's weather search result`,
    link: "https://weather-widget-app-e9668.firebaseapp.com/",
    githublink: "https://github.com/Rajiv-Khushiram/Weather-Widget-App"
  },
  {
    title: "Reviews-App",
    description:
      "A prototype project which engages customers in submitting a review to generate customer trust and track performance of sales agents",
    link: "https://rajivkhushiram-reviews-project.firebaseapp.com/",
    githublink: "https://github.com/Rajiv-Khushiram/Reviews-App-For-Business"
  },

  {
    title: "SMS-Global App",
    description: `A prototype app to send SMS using SMS-Global API keys. Simply insert you API keys and send messages
    to any phone number around the world`,
    githublink: "https://github.com/Rajiv-Khushiram/SMS-Global-ReactJS-App"
  },
  {
    title: `FB-Lite`,
    description: `A MERN Stack APP using Express as Backend and Mongoose for API calls to MongoDB`,
    githublink: "https://github.com/Rajiv-Khushiram/FB-Lite"
  },
  // {
  //   title: `ReactJS, Context API, Axios & OAuth 2.0`,
  //   description: `A Create-React-App making API calls to send and retrieve messages sent using OAuth 2.0 `,
  //   githublink: "https://github.com/Rajiv-Khushiram/SMS-Global-ReactJS-App"
  // },
  {
    title: "Hackathon 2019",
    description: `A prototype for grouping students in team projects. This project stacks React-Mongo-Db and hosting`,
    link: "https://reactrkfirebasegcp.firebaseapp.com",
    githublink: "https://github.com/Rajiv-Khushiram/reactrk"
  },
  {
    title: "Enhanced Porfolio",
    description:
      "This website plugged with React-Redux-Firebase V3 with CI/CD with Cloud Build",
    link: "https://raj-c-k.web.app",
    githublink: "https://github.com/Rajiv-Khushiram/Personal-Website"
  },
  {
    title: "RSA Encryption Prototype",
    description:
      "A prototype of RSA encryption on server and client level. Illustrates E-commerce / Cart addition encryption including Digital Envelopes generation",
    githublink:
      "https://github.com/Rajiv-Khushiram/RSA_Encryption-with-PHP-and-JavaScript"
  },
  {
    title: "Avengers End Game ",
    description:
      "A Hexagonal Java Board Game applying object oriented JAVA design Patterns",
    githublink: "https://github.com/Rajiv-Khushiram/Avengers_End_Game"
  }
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
